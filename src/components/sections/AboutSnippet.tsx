import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { certifications } from "@/data/experience";

const snapshotStats = [
  { value: "2018", label: "Writing commerce code since" },
  { value: "300+", label: "Brands shipped worldwide" },
  { value: "Select", label: "Shopify partner tier" },
  { value: "2", label: "AI products in development" },
];

export function AboutSnippet() {
  return (
    <section className="bg-bg-soft py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="About"
              title={
                <>
                  Engineering commerce for{" "}
                  <span className="text-gradient-purple">humans</span>, and now
                  for <span className="text-gradient-green">machines</span>
                </>
              }
            />
            <Reveal className="-mt-6 space-y-5 text-lg leading-relaxed text-white/60">
              <p>
                For eight years I have built the systems behind ambitious
                brands: Shopify Plus storefronts, headless builds, B2B
                replatforms, and the CRM, OMS, and IMS platforms that keep
                operations honest. More than 300 brands across 12 markets have
                shipped on my code.
              </p>
              <p>
                Today I am focused on what comes next:{" "}
                <span className="text-white">agentic commerce</span>. As AI
                agents begin browsing, comparing, and buying, I help brands
                make their stacks machine-legible, from{" "}
                <span className="text-white">AI readiness audits</span> through
                to MCP-connected storefronts with human approval loops.
              </p>
            </Reveal>
            <Reveal className="mt-9" delay={0.1}>
              <Button href="/about" variant="outline">
                More about me
              </Button>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal stagger={0.1} className="grid grid-cols-2 gap-4">
              {snapshotStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-line bg-card p-6"
                >
                  <p className="font-display text-3xl font-semibold text-green">
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-[0.68rem] leading-relaxed tracking-[0.14em] text-white/40 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15}>
              <p className="eyebrow mb-4 !text-gold">Certifications</p>
              <div className="flex flex-wrap gap-2.5">
                {certifications.map((c, i) => (
                  <Badge
                    key={c.title}
                    accent={(["green", "purple", "gold", "neutral"] as const)[i % 4]}
                  >
                    {c.issuer} · {c.title}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
