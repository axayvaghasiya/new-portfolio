"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { budgetOptions, contactFieldLimits } from "@/lib/contact";
import { Button } from "@/components/ui/Button";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; theme?: "light" | "dark" | "auto" }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

const budgets = budgetOptions;

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4MB
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-5 py-3.5 text-sm text-white placeholder:text-white/25 transition-colors duration-300 focus:border-green/50 focus:outline-none";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [loadedAt] = useState(() => Date.now());
  const [turnstileScriptLoaded, setTurnstileScriptLoaded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileScriptLoaded || !turnstileContainerRef.current) return;

    turnstileWidgetIdRef.current = window.turnstile!.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: "dark",
    });

    return () => {
      if (turnstileWidgetIdRef.current) {
        window.turnstile?.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [turnstileScriptLoaded, status]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      setFileError("");
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setFileError("That file is over 4MB — please attach something smaller.");
      setFileName("");
      e.target.value = "";
      return;
    }
    setFileError("");
    setFileName(file.name);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      formRef.current?.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-green/25 bg-green/[0.06] p-12 text-center">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          aria-hidden
          className="mx-auto text-green"
        >
          <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <path
            d="M13 22.5l6.5 6.5L31 15"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="mt-6 font-display text-2xl font-semibold text-white">
          Thank you — your message is on its way
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/55">
          I&apos;ve received your enquiry and will reply within 24 hours. If it&apos;s
          urgent, you can also reach me directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-green underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 font-mono text-xs tracking-[0.18em] text-white/40 uppercase transition-colors hover:text-white"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real visitors, bots fill every field */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {/* Lets the server reject submissions completed suspiciously fast */}
      <input type="hidden" name="formLoadedAt" value={loadedAt} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs tracking-wide text-white/45 uppercase">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={contactFieldLimits.name}
            placeholder="Jane Founder"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs tracking-wide text-white/45 uppercase">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={contactFieldLimits.email}
            placeholder="jane@brand.com"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block font-mono text-xs tracking-wide text-white/45 uppercase">
            Company / Store
          </label>
          <input
            id="company"
            name="company"
            maxLength={contactFieldLimits.company}
            placeholder="brand.com"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block font-mono text-xs tracking-wide text-white/45 uppercase">
            Budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs tracking-wide text-white/45 uppercase">
          Project details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={contactFieldLimits.message}
          placeholder="What are you building, which metric do you need to move, and when would you like to start?"
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="attachment" className="mb-2 block font-mono text-xs tracking-wide text-white/45 uppercase">
          Attachment (optional)
        </label>
        <label
          htmlFor="attachment"
          className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-line bg-bg px-5 py-3.5 text-sm transition-colors duration-300 hover:border-green/40"
        >
          <span className={fileName ? "text-white" : "text-white/35"}>
            {fileName || "Brief, deck, or reference file — PDF, Word, PPT, or image"}
          </span>
          <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] tracking-wide text-white/50 uppercase">
            Browse
          </span>
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.webp"
          className="sr-only"
        />
        {fileError ? (
          <p className="mt-2 text-xs text-gold">{fileError}</p>
        ) : (
          <p className="mt-2 text-xs text-white/30">Max 4MB.</p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-gold/30 bg-gold/[0.08] px-5 py-4 text-sm text-gold">
          {errorMessage}{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            Email me directly instead
          </a>
          .
        </div>
      )}

      {TURNSTILE_SITE_KEY && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
            onLoad={() => setTurnstileScriptLoaded(true)}
          />
          <div ref={turnstileContainerRef} />
        </>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="font-mono text-xs text-white/35">
          * Required · replies within 24h
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting" || !!fileError}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
