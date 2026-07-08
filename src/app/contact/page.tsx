import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/layout/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project: Shopify Plus builds, headless storefronts, B2B replatforms, or AI readiness. Replies within 24 hours.",
};

const expectations = [
  {
    step: "01",
    title: "Reply within 24h",
    body: "A genuine reply from me, not an autoresponder or an assistant.",
  },
  {
    step: "02",
    title: "Free 30-min call",
    body: "We discuss numbers, stack, and goals. No pitch deck, and no pressure.",
  },
  {
    step: "03",
    title: "Written proposal",
    body: "Scope, timeline, and a fixed figure within three business days.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let us build something that{" "}
            <span className="text-gradient-green">sells</span>
          </>
        }
        description="Tell me about your project, or simply email me directly. Either way, you will hear back within 24 hours."
      />

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-line bg-card p-8">
                  <p className="eyebrow mb-4">Direct</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-mono text-sm break-all text-fg underline decoration-green/40 underline-offset-4 transition-colors hover:text-green"
                  >
                    {site.email}
                  </a>
                  <p className="mt-4 text-sm text-muted">{site.location}</p>
                  <SocialLinks
                    className="mt-6"
                    badgeClassName="h-7"
                    iconClassName="h-5 w-5"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.15} stagger={0.1} className="space-y-4">
                {expectations.map((e) => (
                  <div
                    key={e.step}
                    className="flex gap-5 rounded-2xl border border-line bg-bg-soft p-6"
                  >
                    <p className="font-mono text-sm font-semibold text-green">
                      {e.step}
                    </p>
                    <div>
                      <h3 className="font-display font-semibold text-fg">
                        {e.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {e.body}
                      </p>
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-gold/20 bg-gold/[0.05] p-6">
                  <p className="font-mono text-xs tracking-[0.18em] text-gold uppercase">
                    Currently booking
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    I am taking on{" "}
                    <span className="text-fg">two new projects</span> this
                    quarter. Audit sprints can usually start within a week.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
