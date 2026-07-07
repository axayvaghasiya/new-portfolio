"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { site, heroStats } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), {
  ssr: false,
});

function Chars({ text, charClassName }: { text: string; charClassName?: string }) {
  // Gradient must live on each char span: background-clip:text doesn't
  // paint through inline-block descendants, and the 3D reveal needs them.
  return (
    <span aria-hidden>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className={cn("hero-char inline-block will-change-transform", charClassName)}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const scope = ref.current;
      // Transform-only intro — no opacity. The name lines have overflow-hidden
      // masks, so characters simply slide up from behind the mask. Content is
      // never made invisible via opacity/visibility.
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        // Safety net: whatever happens, strip all inline transforms shortly
        // after the intro so nothing can ever be left offset or hidden.
        onComplete: () =>
          gsap.set(scope.querySelectorAll(".hero-char, .hero-fade, .hero-scroll"), {
            clearProps: "transform",
          }),
      });
      tl.from(".hero-char", {
        yPercent: 120,
        rotateX: -80,
        duration: 1.1,
        stagger: 0.035,
      })
        .from(
          ".hero-fade",
          { y: 26, duration: 0.9, stagger: 0.12 },
          "-=0.55"
        )
        .from(".hero-scroll", { y: 10, duration: 0.8 }, "-=0.3");
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <HeroCanvas />

      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-green/[0.05] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/5 h-[26rem] w-[26rem] rounded-full bg-purple/[0.07] blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 text-center">
        <p className="hero-fade eyebrow mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="inline-block h-px w-8 bg-green" />
          Shopify Select Partner · Google-Certified AI Professional
          <span className="inline-block h-px w-8 bg-green" />
        </p>

        <h1
          className="font-display font-bold tracking-[-0.03em] uppercase [perspective:900px]"
          aria-label={site.name}
        >
          <span className="block overflow-hidden pb-1 text-[clamp(3rem,11vw,8.5rem)] leading-[0.95] text-white [transform-style:preserve-3d]">
            <Chars text="AKSHAY" />
          </span>
          <span className="block overflow-hidden pb-2 text-[clamp(3rem,11vw,8.5rem)] leading-[0.95] [transform-style:preserve-3d]">
            <Chars text="VAGHASIYA" charClassName="text-gradient-green" />
          </span>
        </h1>

        <p className="hero-fade mt-8 font-display text-lg font-medium text-purple md:text-2xl">
          {site.role}
          <span className="mx-3 text-white/25">·</span>
          <span className="text-gold">Freelance eCommerce Consultant</span>
        </p>

        <p className="hero-fade mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {site.intro}
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/projects" size="lg">
            View Projects
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>

        {/* Stats */}
        <dl className="hero-fade mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-y-8 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/8 border-l first:border-l-0 max-md:odd:border-l-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-white md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dd className="mt-1 font-mono text-[0.68rem] tracking-[0.18em] text-white/40 uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-white/30 uppercase">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            aria-hidden
            className="animate-bounce"
          >
            <path
              d="M2 8l6 6 6-6"
              stroke="#00ff87"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
            <path
              d="M2 14l6 6 6-6"
              stroke="#00ff87"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.35"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
