"use client";

import { useEffect, useRef, useState } from "react";
import { whatsapp, site } from "@/lib/site";
import { LogoMark } from "@/components/layout/Logo";

const quickReplies = [
  "I'd like to discuss a project",
  "What is your availability?",
  "Can I get a quote?",
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>(whatsapp.message);

  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Focus the input on open; close on Escape or outside click.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        fabRef.current?.focus();
      }
    };
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        !fabRef.current?.contains(t)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const send = () => {
    const text = message.trim() || whatsapp.message;
    const href = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="fixed right-5 bottom-5 z-[55] flex flex-col items-end gap-4 md:right-7 md:bottom-7 print:hidden">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={`Chat with ${site.name} on WhatsApp`}
          className="w-[calc(100vw-2.5rem)] max-w-[22rem] origin-bottom-right overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)] [animation:wa-pop_0.28s_cubic-bezier(0.16,1,0.3,1)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
              <LogoMark className="h-4 w-auto" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-sm font-semibold text-white">
                {site.name}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[0.65rem] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                Online · replies in minutes
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Conversation */}
          <div className="space-y-3 bg-bg-soft px-5 py-5">
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-line bg-card px-4 py-3 text-sm leading-relaxed text-white/80">
              Hi there 👋 Thanks for visiting. How can I help with your commerce
              project?
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => {
                    setMessage(q);
                    inputRef.current?.focus();
                  }}
                  className="rounded-full border border-green/25 bg-green/10 px-3 py-1.5 text-xs text-green transition-colors hover:bg-green/20"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="flex items-end gap-2 border-t border-line bg-card p-3">
            <label htmlFor="wa-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="wa-message"
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              rows={2}
              placeholder="Type a message…"
              className="max-h-28 min-h-[2.75rem] flex-1 resize-none rounded-xl border border-line bg-bg px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-green/50 focus:outline-none"
            />
            <button
              type="button"
              onClick={send}
              aria-label="Send message on WhatsApp"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 12l16-8-6 16-3-7-7-1z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating action button */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping-slow"
          />
        )}
        <span className="relative">
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <WhatsAppGlyph className="h-7 w-7" />
          )}
        </span>
      </button>
    </div>
  );
}
