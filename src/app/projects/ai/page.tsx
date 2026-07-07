import type { Metadata } from "next";
import { aiProjects } from "@/data/ai-projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Products",
  description:
    "AI commerce products in development: an agentic storefront copilot and an AI readiness platform for the agentic commerce era.",
};

const accentStyles = {
  green: {
    badge: "green" as const,
    title: "group-hover:text-green",
    border: "hover:border-green/30",
    tick: "text-green",
  },
  purple: {
    badge: "purple" as const,
    title: "group-hover:text-purple",
    border: "hover:border-purple/30",
    tick: "text-purple",
  },
};

export default function AiProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Portfolio"
        title={
          <>
            Building for the{" "}
            <span className="text-gradient-purple">agentic era</span>
          </>
        }
        description="Two AI commerce products in active development, applying eight years of commerce engineering to the problems that AI agents create and solve."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal stagger={0.15} className="grid gap-8 lg:grid-cols-2">
            {aiProjects.map((product) => {
              const a = accentStyles[product.accent];
              return (
                <article
                  key={product.slug}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-line bg-card p-9 transition-all duration-500 hover:-translate-y-1.5 md:p-12",
                    a.border
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Badge accent={a.badge}>{product.status}</Badge>
                  </div>

                  <h2
                    className={cn(
                      "mt-7 font-display text-3xl font-semibold tracking-tight text-white transition-colors duration-300",
                      a.title
                    )}
                  >
                    {product.title}
                  </h2>
                  <p className="mt-2 font-mono text-sm text-white/45">
                    {product.tagline}
                  </p>
                  <p className="mt-6 leading-relaxed text-white/60">
                    {product.description}
                  </p>

                  <ul className="mt-8 space-y-3 border-t border-line pt-7">
                    {product.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-3 text-sm text-white/55"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden
                          className={cn("mt-0.5 shrink-0", a.tick)}
                        >
                          <path
                            d="M3 8.5l3.5 3.5L13 4.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {product.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-white/45"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </Reveal>

          <Reveal className="mt-16 rounded-3xl border border-line bg-bg-soft p-10 text-center md:p-14">
            <p className="eyebrow justify-center">Coming soon</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance">
              Full case studies, demos, and early access are on the way
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/55">
              Both products will be built in public shortly. Would you like a
              preview, or to become an early design partner?
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Request early access</Button>
              <Button href="/blog" variant="outline">
                Read the AI commerce blog
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
