import type { Metadata } from "next";
import { services } from "@/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shopify Plus engineering, headless performance, B2B commerce, operations platforms, AI and agentic commerce, and CRO. Senior engineering from end to end.",
};

const accentText = {
  green: "text-green",
  purple: "text-purple",
  gold: "text-gold",
} as const;

const accentBar = {
  green: "bg-green",
  purple: "bg-purple",
  gold: "bg-gold",
} as const;

const process = [
  {
    step: "01",
    title: "Discover",
    body: "A working session covering your numbers, stack, and bottlenecks. Together we define the metric the project exists to move.",
  },
  {
    step: "02",
    title: "Architect",
    body: "A written technical plan covering scope, phases, risks, and rollback strategy, prepared before a line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demos on staging, tight feedback loops, and performance budgets enforced from day one.",
  },
  {
    step: "04",
    title: "Scale",
    body: "Launch with monitoring in place, then measure, iterate, and hand over documentation your team can genuinely use.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            One engineer,{" "}
            <span className="text-gradient-gold">every layer</span> of your
            commerce stack
          </>
        }
        description="From storefront to warehouse to AI agent: senior engineering with no hand-offs, no account managers, and outcomes measured in revenue."
      />

      {/* Service detail rows */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="divide-y divide-line border-y border-line">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="grid scroll-mt-32 gap-8 py-14 lg:grid-cols-[8rem_1.2fr_1fr] lg:gap-12"
                >
                  <p
                    className={cn(
                      "font-display text-5xl font-bold opacity-80",
                      accentText[service.accent]
                    )}
                  >
                    {service.number}
                  </p>

                  <div>
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {service.title}
                    </h2>
                    <p
                      className={cn(
                        "mt-2 font-mono text-sm",
                        accentText[service.accent]
                      )}
                    >
                      {service.tagline}
                    </p>
                    <p className="mt-5 leading-relaxed text-white/55">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:pt-2">
                    <h3 className="font-mono text-xs tracking-[0.2em] text-white/40 uppercase">
                      What you get
                    </h3>
                    <ul className="mt-5 space-y-3.5">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 text-sm text-white/60"
                        >
                          <span
                            className={cn(
                              "mt-[0.55em] h-px w-4 shrink-0",
                              accentBar[service.accent]
                            )}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-green" />
              Process
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              How an engagement <span className="text-gradient-green">runs</span>
            </h2>
          </Reveal>

          <Reveal stagger={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-line bg-card p-7"
              >
                <p className="font-mono text-sm font-semibold text-green">
                  {p.step}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {p.body}
                </p>
                {i < process.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-4 hidden h-px w-8 bg-gradient-to-r from-green/50 to-transparent lg:block"
                  />
                )}
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-14 text-center">
            <Button href="/pricing" size="lg">
              See pricing
            </Button>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
