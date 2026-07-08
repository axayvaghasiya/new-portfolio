import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const accentStyles = {
  green: {
    bar: "bg-green",
    number: "text-green",
    blob: "bg-green/10",
    border: "hover:border-green/30",
  },
  purple: {
    bar: "bg-purple",
    number: "text-purple",
    blob: "bg-purple/10",
    border: "hover:border-purple/30",
  },
  gold: {
    bar: "bg-gold",
    number: "text-gold",
    blob: "bg-gold/10",
    border: "hover:border-gold/30",
  },
} as const;

export function ServicesOverview() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Senior engineering,{" "}
                <span className="text-gradient-gold">end to end</span>
              </>
            }
            description="Six ways I help commerce brands ship faster, sell more, and prepare for what comes next."
          />
          <Reveal className="mb-14 hidden md:mb-20 md:block">
            <Button href="/services" variant="outline">
              All services
            </Button>
          </Reveal>
        </div>

        <Reveal stagger={0.09} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const a = accentStyles[service.accent];
            return (
              <article
                key={service.slug}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-line bg-card p-7 transition-all duration-500 hover:-translate-y-1.5",
                  a.border
                )}
              >
                {/* Top bar reveal */}
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                    a.bar
                  )}
                />
                {/* Glow blob */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100",
                    a.blob
                  )}
                />

                <p className={cn("font-mono text-sm font-semibold", a.number)}>
                  {service.number}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-fg">
                  {service.title}
                </h3>
                <p className={cn("mt-1 font-mono text-xs", a.number)}>
                  {service.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-[0.83rem] text-muted"
                    >
                      <span
                        className={cn("mt-[0.55em] h-px w-3.5 shrink-0", a.bar)}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Reveal>

        <Reveal className="mt-10 md:hidden">
          <Button href="/services" variant="outline" className="w-full">
            All services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
