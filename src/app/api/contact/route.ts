import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";
import { budgetOptions, contactFieldLimits, MIN_FILL_TIME_MS } from "@/lib/contact";
import { isRateLimited } from "@/lib/rateLimit";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4MB — safe across hosts (Vercel caps around 4.5MB per request)
// Deliberately excludes .zip (and other archive/executable types) — Gmail
// hard-bounces any message with a zip attachment outright, regardless of
// sender reputation, since it can't scan inside the archive. Confirmed via
// Resend's delivery logs: identical send with a .zip attachment bounced,
// the same send with a .pdf delivered.
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
]);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Verified once at module load so a misconfigured deployment gets flagged in
// logs immediately rather than silently skipping the check on every request.
const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
if (!turnstileSecret) {
  console.warn(
    "TURNSTILE_SECRET_KEY is not set — bot-verification is disabled on the contact form."
  );
}

// Cloudflare's own fault, not the visitor's — a bad/missing secret or a
// malformed request from us. Failing open on these means a misconfigured key
// logs loudly instead of silently rejecting every real contact submission.
const TURNSTILE_CONFIG_ERRORS = new Set([
  "missing-input-secret",
  "invalid-input-secret",
  "bad-request",
  "internal-error",
]);

async function verifyTurnstile(token: string, ip: string) {
  if (!turnstileSecret) return true; // feature not configured — don't block submissions

  const body = new URLSearchParams({ secret: turnstileSecret, response: token, remoteip: ip });
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data.success === true) return true;

    const errorCodes: string[] = data["error-codes"] ?? [];
    if (errorCodes.some((code) => TURNSTILE_CONFIG_ERRORS.has(code))) {
      console.error(
        "Turnstile is misconfigured (check TURNSTILE_SECRET_KEY) — allowing submission through:",
        errorCodes
      );
      return true;
    }

    return false;
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "Email delivery is not configured yet. Please email me directly." },
      { status: 500 }
    );
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  // Reject POSTs that didn't originate from this site (e.g. a script hitting
  // the endpoint directly from elsewhere).
  const expectedOrigin = new URL(req.url).origin;
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const sourceOrigin = origin ?? (referer ? new URL(referer).origin : null);
  if (sourceOrigin !== expectedOrigin) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 403 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Honeypot — bots fill every field, real visitors never see or touch this one.
  if (String(form.get("website") ?? "").trim().length > 0) {
    // Pretend success so bots don't learn anything from the response.
    return NextResponse.json({ ok: true });
  }

  // Bots that script a submission tend to fire it immediately on load;
  // real visitors need at least a couple of seconds to read and type.
  const loadedAt = Number(form.get("formLoadedAt"));
  if (!loadedAt || Date.now() - loadedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const company = String(form.get("company") ?? "").trim();
  const budget = String(form.get("budget") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const attachment = form.get("attachment");
  const turnstileToken = String(form.get("cf-turnstile-response") ?? "");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and project details are required." }, { status: 400 });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (
    name.length > contactFieldLimits.name ||
    email.length > contactFieldLimits.email ||
    company.length > contactFieldLimits.company ||
    message.length > contactFieldLimits.message
  ) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }
  if (budget && !budgetOptions.includes(budget as (typeof budgetOptions)[number])) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  if (turnstileSecret) {
    if (!turnstileToken || !(await verifyTurnstile(turnstileToken, ip))) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (attachment instanceof File && attachment.size > 0) {
    if (attachment.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json(
        { error: "Attachment is too large. Please keep it under 4MB." },
        { status: 413 }
      );
    }
    if (attachment.type && !ALLOWED_ATTACHMENT_TYPES.has(attachment.type)) {
      return NextResponse.json(
        { error: "That file type isn't supported. Try a PDF, Word, PowerPoint, or image file." },
        { status: 415 }
      );
    }
    const bytes = Buffer.from(await attachment.arrayBuffer());
    attachments.push({ filename: attachment.name || "attachment", content: bytes });
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: -apple-system, sans-serif; color: #111; max-width: 560px;">
      <h2 style="margin: 0 0 16px;">New project enquiry</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 6px 0; color: #666; width: 120px;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #666;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 6px 0; color: #666;">Company</td><td style="padding: 6px 0;">${escapeHtml(company) || "—"}</td></tr>
        <tr><td style="padding: 6px 0; color: #666;">Budget</td><td style="padding: 6px 0;">${escapeHtml(budget) || "—"}</td></tr>
      </table>
      <p style="margin: 20px 0 6px; color: #666; font-size: 14px;">Project details</p>
      <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; border-left: 3px solid #00ff87; padding-left: 12px;">${escapeHtml(message)}</p>
      ${attachments.length ? `<p style="margin-top: 20px; color: #666; font-size: 13px;">Attachment: ${escapeHtml(attachments[0].filename)}</p>` : ""}
    </div>
  `;

  // Falls back to Resend's shared sandbox sender until a domain (or
  // subdomain) is verified in the Resend dashboard and CONTACT_FROM_EMAIL is
  // set — see .env.local for setup notes.
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || `${site.name} Website <onboarding@resend.dev>`;

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: site.email,
      replyTo: email,
      subject: `Project enquiry from ${name}`,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send your message right now. Please email me directly." },
        { status: 502 }
      );
    }

    console.log("Contact form email sent — Resend id:", result.data?.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Could not send your message right now. Please email me directly." },
      { status: 500 }
    );
  }
}
