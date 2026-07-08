import type { Metadata } from "next";
import { pricingTiers } from "@/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent engagement models: audit sprints, fixed-scope builds, and monthly growth retainers for commerce brands.",
};

const faqs = [
  {
    q: "Why fixed pricing instead of hourly?",
    a: "Hourly billing rewards slowness. Fixed scopes and retainers align us on outcomes: you know the investment in advance, and I am incentivised to ship efficiently. Larger builds are quoted after a scoping workshop, so the figure is honest rather than padded.",
  },
  {
    q: "Do you work with agencies or only brands directly?",
    a: "Both. Around a third of my work is white-label engineering for agencies that need senior Shopify Plus or AI capability on a specific engagement. The same quality standard applies, with your brand on the deliverable.",
  },
  {
    q: "What if my project does not fit these tiers?",
    a: "Most do not fit perfectly. These tiers are anchors rather than boxes. A B2B replatform and a checkout optimisation programme are very different projects. Book a call and I will scope it properly, free of charge.",
  },
  {
    q: "What does 'AI readiness' actually include?",
    a: "A scored audit of how legible your store is to AI shopping agents, covering structured data completeness, price transparency, feed quality, and agentic checkout compatibility, together with a prioritised roadmap ranked by revenue impact.",
  },
  {
    q: "How soon can you start?",
    a: "Audit sprints usually start within a week. Project builds are booked two to four weeks ahead, depending on the quarter. Retainer clients receive priority scheduling.",
  },
];

const accentTop = {
  green: "from-green/60",
  purple: "from-purple/60",
  gold: "from-gold/60",
} as const;

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Simple engagements,{" "}
            <span className="text-gradient-green">honest numbers</span>
          </>
        }
        description="No discovery-call pricing games. Three ways to work together, each designed around how commerce teams genuinely ship."
      />

      {/* Tiers */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal stagger={0.12} className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-card p-9 transition-all duration-500",
                  tier.highlight
                    ? "border-purple/40 shadow-[0_24px_80px_-24px_rgba(109,76,175,0.35)] lg:-my-4 lg:py-13"
                    : "border-line hover:border-white/15"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-8 top-0 h-px bg-gradient-to-r to-transparent",
                    accentTop[tier.accent]
                  )}
                />
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-purple/40 bg-bg px-4 py-1 font-mono text-[0.65rem] tracking-[0.18em] text-purple uppercase">
                    Most popular
                  </span>
                )}

                <h2 className="font-display text-xl font-semibold text-fg">
                  {tier.name}
                </h2>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight text-fg">
                    {tier.price}
                  </span>
                </p>
                <p className="mt-1.5 font-mono text-xs text-muted">
                  {tier.period}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {tier.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3.5 border-t border-line pt-7">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                        className={cn(
                          "mt-0.5 shrink-0",
                          tier.accent === "green" && "text-green",
                          tier.accent === "purple" && "text-purple",
                          tier.accent === "gold" && "text-gold"
                        )}
                      >
                        <path
                          d="M3 8.5l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Button
                    href="/contact"
                    variant={tier.highlight ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-12 text-center">
            <p className="mx-auto max-w-xl text-sm text-muted">
              Enterprise replatforms and multi-quarter programmes are scoped
              individually. Every engagement starts with a free 30-minute call:
              no pitch deck, simply an honest assessment of whether I am the
              right fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gold" />
              <span className="!text-gold">FAQ</span>
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              Questions, <span className="text-gradient-purple">answered</span>
            </h2>
          </Reveal>

          <Reveal stagger={0.08} className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-line bg-card open:border-green/25"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 font-display font-semibold text-fg [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="shrink-0 text-green transition-transform duration-300 group-open:rotate-45"
                  >
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="px-7 pb-6 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </Reveal>

          <Reveal className="mt-14 text-center">
            <Button href="/contact" size="lg">
              Book the free call
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
