"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={cn(
        "fixed bottom-5 left-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card/80 text-fg backdrop-blur-xl transition-colors duration-300 hover:border-green/60 hover:text-green md:bottom-7 md:left-7"
      )}
    >
      {mounted && isLight ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden
        >
          <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M9 1v2M9 15v2M17 9h-2M3 9H1M14.66 3.34l-1.41 1.41M4.75 13.25l-1.41 1.41M14.66 14.66l-1.41-1.41M4.75 4.75L3.34 3.34"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden
        >
          <path
            d="M15.5 10.5A6.5 6.5 0 0 1 7.5 2.5a6.5 6.5 0 1 0 8 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
