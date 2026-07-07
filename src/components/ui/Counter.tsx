"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

/** Counts up from 0 when scrolled into view. */
export function Counter({ value, suffix = "", className, duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (prefersReducedMotion()) {
        ref.current.textContent = `${value}${suffix}`;
        return;
      }
      const state = { n: 0 };
      gsap.to(state, {
        n: value,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        onUpdate: () => {
          if (ref.current)
            ref.current.textContent = `${Math.round(state.n)}${suffix}`;
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
