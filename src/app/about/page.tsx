import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { certifications, milestones } from "@/data/experience";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full Stack Commerce Engineer and Shopify Select Partner. Eight years of work, more than 300 brands, and 12 markets. Now helping brands prepare for agentic commerce.",
};

const principles = [
  {
    title: "Revenue is the spec",
    body: "Every technical decision traces back to a commercial outcome. If a rebuild does not move conversion, speed, or operating cost, it is a hobby rather than a project.",
    accent: "text-green",
  },
  {
    title: "Reliability wins",
    body: "Idempotent syncs, reconciliation loops, and approval queues are not glamorous. They are the reason my migrations lose no orders and my integrations run at 99.98% uptime.",
    accent: "text-purple",
  },
  {
    title: "Build for the next buyer",
    body: "The next customer might be an AI agent. I build storefronts that are fast for humans and legible to machines: structured, truthful, and transactable.",
    accent: "text-gold",
  },
];

const stack = {
  Commerce: ["Shopify Plus", "Hydrogen", "Shopify Functions", "Checkout Extensibility", "Shopify Markets"],
  Engineering: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
  "AI & Agents": ["Claude API", "MCP", "LangChain", "LangGraph", "Deep Agents", "Vector Search"],
  Growth: ["GrowthBook", "BigQuery", "Klaviyo", "Core Web Vitals", "Server-side Testing"],
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            The engineer behind{" "}
            <span className="text-gradient-green">300+ storefronts</span>
          </>
        }
        description="I am Akshay Vaghasiya, a Full Stack Commerce Engineer, Shopify Select Partner, and Google-certified AI professional working with brands across 12 markets."
      />

      {/* Bio */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
            <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                I started writing commerce code in 2018, building Shopify
                themes for local D2C brands. The lesson from those first
                storefronts still drives everything I build:{" "}
                <span className="text-fg">
                  in commerce, engineering quality is measured at the checkout
                </span>
                . A handsome site that loads in four seconds is a handsome way
                to lose money.
              </p>
              <p>
                Eight years later, that obsession has compounded into more
                than 300 shipped brands, recognition in Shopify&apos;s Select
                partner tier, and a speciality in the unglamorous systems that
                decide whether a brand scales: B2B replatforms, ERP middleware,
                unified CRM, OMS, and IMS platforms, and performance programmes
                that treat milliseconds as revenue.
              </p>
              <p>
                Now I am focused on the next platform shift:{" "}
                <span className="text-fg">agentic commerce</span>. AI agents
                are beginning to browse, compare, and buy on behalf of humans.
                As a Google-certified AI professional with Anthropic MCP and
                LangChain Deep Agents training, I help brands score their AI
                readiness and rebuild their stacks for buyers made of software,
                while shipping two AI products of my own.
              </p>
              <p>
                I work as an independent consultant: one senior engineer,
                direct communication, no account managers, and no hand-offs.
                Based in {site.location.split(" · ")[0]}, working with brands
                worldwide.
              </p>
            </Reveal>

            {/* Certifications */}
            <div>
              <Reveal>
                <p className="eyebrow mb-6 !text-gold">Certifications</p>
              </Reveal>
              <Reveal stagger={0.1} className="space-y-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-card px-6 py-5"
                  >
                    <div>
                      <p className="font-display font-semibold text-fg">
                        {c.title}
                      </p>
                      <p className="mt-1 font-mono text-xs text-muted">
                        {c.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-green">
                      {c.year}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow mb-10 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-green" />
              How I work
            </p>
          </Reveal>
          <Reveal stagger={0.12} className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.title} glow="none" className="p-8">
                <h3 className={`font-display text-xl font-semibold ${p.accent}`}>
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </Card>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow mb-10 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-purple" />
              <span className="!text-purple">Tools I reach for</span>
            </p>
          </Reveal>
          <Reveal stagger={0.1} className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display text-lg font-semibold text-fg">
                  {group}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-mono text-[0.8rem] text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-green/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Compact journey recap */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow mb-10 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gold" />
              <span className="!text-gold">Milestones</span>
            </p>
          </Reveal>
          <Reveal stagger={0.08} className="divide-y divide-line border-y border-line">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="grid gap-2 py-6 md:grid-cols-[6rem_1fr_2fr] md:gap-8"
              >
                <p className="font-mono text-sm font-semibold text-green">
                  {m.year}
                </p>
                <h3 className="font-display font-semibold text-fg">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {m.description}
                </p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-12">
            <Button href="/projects" variant="outline">
              See the work
            </Button>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
