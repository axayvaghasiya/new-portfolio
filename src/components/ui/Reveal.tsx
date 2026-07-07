"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts */
  delay?: number;
  /** Vertical travel distance in px */
  y?: number;
  /** If set, staggers the element's direct children instead of the wrapper */
  stagger?: number;
};

/**
 * Scroll-in reveal.
 *
 * Accessibility-first: content is NEVER hidden. Opacity and visibility are
 * never touched, so text is always fully rendered and readable even if
 * JavaScript is disabled, an animation is interrupted, or the observer never
 * fires. The only motion is a small upward transform applied when the element
 * scrolls into view, and it always resolves to the element's natural position.
 */
export function Reveal({ children, className, delay = 0, y = 24, stagger }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = stagger ? Array.from(el.children) : [el];
    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      // `from` a transform only — never opacity. The tween applies the offset
      // at play time and clears it on completion, so nothing persists and the
      // cards' hover transform keeps working.
      gsap.from(targets, {
        y,
        duration: 0.9,
        ease: "power3.out",
        delay,
        stagger: stagger ?? 0,
        clearProps: "transform",
      });
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      gsap.killTweensOf(targets);
    };
  }, [delay, y, stagger]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
