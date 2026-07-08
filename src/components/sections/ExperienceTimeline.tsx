"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { milestones } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;

      // Progress line grows as the section scrolls through the viewport
      gsap.fromTo(
        ".timeline-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-track",
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );

      // Items rise in via IntersectionObserver — transform only, no opacity,
      // so a milestone can never be left invisible.
      const observers: IntersectionObserver[] = [];
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        let played = false;
        const io = new IntersectionObserver(
          (entries, obs) => {
            if (entries.some((e) => e.isIntersecting) && !played) {
              played = true;
              gsap.from(item, {
                y: 44,
                duration: 0.9,
                ease: "power3.out",
                clearProps: "transform",
              });
              obs.disconnect();
            }
          },
          { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );
        io.observe(item);
        observers.push(io);
      });

      return () => observers.forEach((io) => io.disconnect());
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="bg-bg-soft py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Journey"
          title={
            <>
              Eight years,{" "}
              <span className="text-gradient-purple">one obsession</span>
            </>
          }
          description="From the first Liquid template to advising brands on agentic commerce: the milestones that shaped how I build."
          align="center"
        />

        <div className="timeline-track relative mx-auto max-w-4xl">
          {/* Rails */}
          <div className="absolute top-0 bottom-0 left-5 w-px bg-white/8 md:left-1/2 md:-translate-x-px" />
          <div className="timeline-progress absolute top-0 bottom-0 left-5 w-px origin-top bg-gradient-to-b from-green via-purple to-gold md:left-1/2 md:-translate-x-px" />

          <ol className="space-y-14 md:space-y-20">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={m.year}
                  className={cn(
                    "timeline-item relative pl-14 md:w-1/2 md:pl-0",
                    isLeft
                      ? "md:pr-14 md:text-right"
                      : "md:ml-auto md:pl-14"
                  )}
                >
                  {/* Node */}
                  <span
                    className={cn(
                      "absolute top-1.5 left-5 flex h-3 w-3 -translate-x-1/2 items-center justify-center",
                      isLeft
                        ? "md:left-auto md:right-0 md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    )}
                  >
                    <span className="absolute inline-flex h-3 w-3 animate-ping-slow rounded-full bg-green opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-green bg-bg" />
                  </span>

                  <p className="font-mono text-sm font-semibold text-green">
                    {m.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-fg md:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {m.description}
                  </p>
                  <div
                    className={cn(
                      "mt-4 flex flex-wrap gap-2",
                      isLeft && "md:justify-end"
                    )}
                  >
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-purple/20 bg-purple/8 px-2.5 py-1 font-mono text-[0.65rem] text-purple/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
