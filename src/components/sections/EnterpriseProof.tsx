import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { clientBrands, socials } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Enterprise trust section. Instead of generic mockups, this shows the kind
 * of evidence large brands actually vet: a zero-downtime cutover log from a
 * real migration, board-level outcome metrics, and the engagement standards
 * their procurement and engineering teams will ask about.
 */

const logLines = [
  {
    time: "02:00:00",
    tag: "INIT",
    tagClass: "text-muted",
    text: (
      <>
        cutover window opened · <span className="text-fg">dual-run mode</span>
      </>
    ),
  },
  {
    time: "02:00:14",
    tag: "DNS",
    tagClass: "text-green",
    text: <>traffic shifted → Shopify Plus B2B</>,
  },
  {
    time: "02:00:31",
    tag: "SYNC",
    tagClass: "text-purple",
    text: (
      <>
        <span className="text-fg">40,182 SKUs</span> verified against ERP
      </>
    ),
  },
  {
    time: "02:01:02",
    tag: "RECON",
    tagClass: "text-gold",
    text: (
      <>
        pass 1/3 complete · drift: <span className="text-fg">0 records</span>
      </>
    ),
  },
  {
    time: "02:14:47",
    tag: "ORDER",
    tagClass: "text-green",
    text: (
      <>
        63 in-flight orders captured · lost:{" "}
        <span className="text-fg">0</span>
      </>
    ),
  },
  {
    time: "02:31:09",
    tag: "RECON",
    tagClass: "text-gold",
    text: (
      <>
        pass 3/3 complete · drift: <span className="text-fg">0 records</span>
      </>
    ),
  },
  {
    time: "02:58:20",
    tag: "DONE",
    tagClass: "text-green",
    text: (
      <>
        cutover complete · downtime{" "}
        <span className="font-semibold text-green">00:00:00</span>
      </>
    ),
  },
];

const terminalChips = [
  { label: "Uptime", value: "99.98%", className: "border-green/25 bg-green/10 text-green" },
  { label: "Orders lost", value: "0", className: "border-gold/25 bg-gold/10 text-gold" },
  { label: "GMV migrated", value: "$40M", className: "border-purple/25 bg-purple/10 text-purple" },
];

const boardMetrics = [
  {
    value: "0",
    valueClass: "text-green",
    label: "Orders lost in migrations",
    context: "Every cutover since 2018, including a $40M wholesale replatform.",
  },
  {
    value: "99.98%",
    valueClass: "text-purple",
    label: "Middleware uptime",
    context: "ERP sync layer running under enterprise order volume.",
  },
  {
    value: "1.1s",
    valueClass: "text-gold",
    label: "Mobile LCP, from 4.2s",
    context: "Eight-figure storefront; conversion rose 34% with the speed.",
  },
  {
    value: "+57%",
    valueClass: "text-green",
    label: "International revenue",
    context: "After a 12-market rollout with duties collected at checkout.",
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.5l2.2 2.2L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlueprintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8.5l4 1.5-4 1.5v-3z" fill="currentColor" />
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GaugeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M4 15a8 8 0 1 1 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 15l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.6" fill="currentColor" />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M4 9a7 7 0 0 1 12-3l2 2M20 15a7 7 0 0 1-12 3l-2-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 4v4h-4M6 20v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SealCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M12 2.5l2.2 1.8 2.8-.3 1 2.7 2.5 1.3-.7 2.8.7 2.8-2.5 1.3-1 2.7-2.8-.3-2.2 1.8-2.2-1.8-2.8.3-1-2.7-2.5-1.3.7-2.8-.7-2.8 2.5-1.3 1-2.7 2.8.3L12 2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 12l2.2 2.2 4.2-4.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M9.5 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3M20 7h-3.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const verifications = [
  {
    icon: <SealCheckIcon />,
    accent: "text-green",
    hover: "hover:border-green/35",
    title: "Verified reviews on Shopify",
    body: "Client reviews on Shopify's official Partner Directory. Only merchants I have genuinely worked with can leave them.",
    cta: "Read the reviews on shopify.com",
    href: socials.find((s) => s.label === "Shopify Partner")?.href ?? "/contact",
  },
  {
    icon: <QuoteIcon />,
    accent: "text-purple",
    hover: "hover:border-purple/35",
    title: "Recommendations on LinkedIn",
    body: "Founders and teams recommending the work on the record, under their own names and companies.",
    cta: "See recommendations on LinkedIn",
    href: socials.find((s) => s.label === "LinkedIn")?.href ?? "/contact",
  },
];

const standards = [
  {
    icon: <ShieldIcon />,
    accent: "text-green",
    title: "NDA-first",
    body: "Mutual NDA before any detailed discussion. Client names stay confidential.",
  },
  {
    icon: <BlueprintIcon />,
    accent: "text-purple",
    title: "Written architecture plans",
    body: "Scope, phases, risks and rollback strategy agreed before code is written.",
  },
  {
    icon: <MonitorIcon />,
    accent: "text-gold",
    title: "Weekly staging demos",
    body: "Progress you can click every week, not status decks.",
  },
  {
    icon: <GaugeIcon />,
    accent: "text-green",
    title: "Performance budgets in CI",
    body: "Speed is a release gate. Regressions fail the build, not the customer.",
  },
  {
    icon: <LoopIcon />,
    accent: "text-purple",
    title: "Zero-loss cutovers",
    body: "Dual-run migrations, reconciliation loops and a full audit trail.",
  },
];

export function EnterpriseProof() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Enterprise Proof"
          title={
            <>
              Trusted with <span className="text-gradient-green">revenue</span>,
              not just storefronts
            </>
          }
          description="Anyone can show mockups. Serious brands need evidence. This is the level of rigour your engineering and procurement teams can audit before we ever sign."
        />

        {/* Live client storefronts — real screenshots, publicly verifiable */}
        <div className="mb-16">
          <Reveal>
            <p className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[0.68rem] tracking-[0.24em] text-muted uppercase">
              <span className="inline-block h-px w-8 bg-green" />
              Shipped for brands including
              <span className="tracking-normal text-muted normal-case">
                · live storefronts, click any card to visit
              </span>
            </p>
          </Reveal>
          <Reveal stagger={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientBrands.map((brand, i) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1",
                  [
                    "hover:border-green/35 hover:shadow-[0_20px_60px_-24px_rgba(0,255,135,0.25)]",
                    "hover:border-purple/35 hover:shadow-[0_20px_60px_-24px_rgba(109,76,175,0.32)]",
                    "hover:border-gold/35 hover:shadow-[0_20px_60px_-24px_rgba(201,95,82,0.3)]",
                  ][i % 3]
                )}
              >
                {/* Browser chrome */}
                <span className="flex items-center gap-1.5 border-b border-line bg-white/[0.03] px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-gold/70" />
                  <span className="h-2 w-2 rounded-full bg-purple/70" />
                  <span className="h-2 w-2 rounded-full bg-green/70" />
                  <span className="ml-2.5 truncate font-mono text-[0.65rem] text-muted">
                    {brand.domain}
                  </span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden
                    className="ml-auto shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-muted"
                  >
                    <path
                      d="M2 8L8 2M8 2H3.5M8 2v4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* Real storefront screenshot */}
                <span className="block overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} live storefront homepage`}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </span>

                <span className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.12em] text-fg">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        ["bg-green", "bg-purple", "bg-gold"][i % 3]
                      )}
                    />
                    {brand.name}
                  </span>
                  <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase transition-colors duration-300 group-hover:text-green">
                    Visit live site
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Cutover log terminal */}
          <Reveal>
            <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-[#0c0c12]">
              <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-gold/80" />
                <span className="h-3 w-3 rounded-full bg-purple/80" />
                <span className="h-3 w-3 rounded-full bg-green/80" />
                <span className="ml-3 font-mono text-xs text-muted">
                  b2b-replatform · cutover.log
                </span>
                <span className="ml-auto rounded-md border border-green/25 bg-green/10 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.14em] text-green uppercase">
                  Live excerpt
                </span>
              </div>

              <div className="flex-1 space-y-2.5 px-5 py-6 font-mono text-[0.8rem] leading-relaxed md:px-7">
                {logLines.map((line) => (
                  <p key={line.time} className="flex flex-wrap gap-x-3">
                    <span className="text-muted">{line.time}</span>
                    <span className={cn("w-14 font-semibold", line.tagClass)}>
                      {line.tag}
                    </span>
                    <span className="flex-1 text-muted">{line.text}</span>
                  </p>
                ))}
                <p aria-hidden className="text-muted">
                  <span className="mr-1 inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-green/70" />
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 border-t border-line px-5 py-4 md:px-7">
                {terminalChips.map((chip) => (
                  <span
                    key={chip.label}
                    className={cn(
                      "inline-flex items-baseline gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs",
                      chip.className
                    )}
                  >
                    <span className="text-[0.62rem] tracking-[0.14em] uppercase opacity-70">
                      {chip.label}
                    </span>
                    <span className="font-semibold">{chip.value}</span>
                  </span>
                ))}
              </div>

              <figcaption className="border-t border-line bg-white/[0.02] px-5 py-4 text-sm leading-relaxed text-muted md:px-7">
                Excerpt from a real $40M wholesale cutover: eight weeks of
                parallel running, dealers migrated in cohorts, and not a single
                order lost.
              </figcaption>
            </figure>
          </Reveal>

          {/* Board-level metrics */}
          <Reveal stagger={0.1} className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {boardMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-line bg-card px-6 py-5"
              >
                <p className={cn("font-display text-3xl font-semibold", m.valueClass)}>
                  {m.value}
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-fg">
                  {m.label}
                </p>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                  {m.context}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Due-diligence standards */}
        <Reveal stagger={0.08} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {standards.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line bg-bg-soft p-5"
            >
              <span className={cn("inline-flex", s.accent)}>{s.icon}</span>
              <h3 className="mt-3 font-display text-[0.95rem] font-semibold text-fg">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">
                {s.body}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Publicly verifiable reviews */}
        <Reveal stagger={0.1} className="mt-6 grid gap-4 sm:grid-cols-2">
          {verifications.map((v) => (
            <a
              key={v.title}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-start gap-5 rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5",
                v.hover
              )}
            >
              <span
                className={cn(
                  "mt-0.5 inline-flex shrink-0 rounded-xl border border-line bg-bg p-2.5",
                  v.accent
                )}
              >
                {v.icon}
              </span>
              <span className="min-w-0">
                <span className="font-display text-base font-semibold text-fg">
                  {v.title}
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                  {v.body}
                </span>
                <span
                  className={cn(
                    "mt-3 inline-flex items-center gap-2 font-mono text-xs",
                    v.accent
                  )}
                >
                  {v.cta}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M2 8L8 2M8 2H3.5M8 2v4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl font-mono text-xs leading-relaxed text-muted">
            The storefronts above are live today; enterprise case-study clients
            remain under NDA. Every number on this page comes from a real
            engagement, with references available for serious enquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Book a technical deep-dive
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              Read the case studies
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
