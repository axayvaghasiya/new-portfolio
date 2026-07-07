"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/** Lenis smooth scrolling, kept in sync with GSAP's ScrollTrigger. */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.115, smoothWheel: true, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    // Exposed so anchor jumps / devtools can drive the virtual scroll
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Self-driven rAF loop (canonical Lenis integration). Driving it from
    // gsap.ticker can silently stop when the ticker sleeps.
    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    // ScrollTrigger measures each reveal's start position when it mounts, but
    // the web fonts swap and the hero canvas settle afterwards, which reflows
    // the page and shifts every downstream section. Without recomputing, the
    // furthest-down sections (e.g. Services) can end up with stale trigger
    // positions and never reveal. Refresh once layout has fully settled.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    const refreshTimer = window.setTimeout(refresh, 800);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimer);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
