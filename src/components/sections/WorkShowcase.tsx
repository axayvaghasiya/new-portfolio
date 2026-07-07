import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  BrowserStorefront,
  PhonePDP,
  AnalyticsDashboard,
  OpsTable,
} from "@/components/graphics/Mockups";

type Accent = "green" | "purple" | "gold";

const glow: Record<Accent, string> = {
  green: "hover:border-green/30 hover:shadow-[0_22px_70px_-26px_rgba(0,255,135,0.28)]",
  purple: "hover:border-purple/30 hover:shadow-[0_22px_70px_-26px_rgba(109,76,175,0.34)]",
  gold: "hover:border-gold/30 hover:shadow-[0_22px_70px_-26px_rgba(201,95,82,0.3)]",
};

function ShowcaseCard({
  label,
  accent,
  className,
  contentClassName,
  children,
}: {
  label: string;
  accent: Accent;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card p-4 transition-all duration-500 hover:-translate-y-1 md:p-5",
        glow[accent],
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between px-1">
        <Badge accent={accent}>{label}</Badge>
        <svg
          width="15"
          height="15"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
          className="text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/70"
        >
          <path
            d="M1 7h11m0 0L7.5 2.5M12 7l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={cn("flex flex-1 items-center justify-center", contentClassName)}>
        {children}
      </div>
    </div>
  );
}

export function WorkShowcase() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Interfaces"
            title={
              <>
                Commerce, <span className="text-gradient-purple">crafted</span>{" "}
                to convert
              </>
            }
            description="A look at the storefronts, dashboards, and commerce systems I design and build — fast, accessible, and engineered to sell."
          />
          <Reveal className="mb-14 hidden md:mb-20 md:block">
            <Button href="/projects" variant="outline">
              Explore projects
            </Button>
          </Reveal>
        </div>

        <Reveal
          stagger={0.1}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto]"
        >
          <ShowcaseCard
            label="Shopify Plus · Storefront"
            accent="green"
            className="lg:col-span-2 lg:row-start-1"
          >
            <BrowserStorefront className="h-auto w-full" />
          </ShowcaseCard>

          <ShowcaseCard
            label="Headless · Mobile PDP"
            accent="purple"
            className="lg:col-start-3 lg:row-span-2 lg:row-start-1"
            contentClassName="py-2"
          >
            <PhonePDP className="mx-auto h-auto w-full max-w-[220px] lg:max-w-[240px]" />
          </ShowcaseCard>

          <ShowcaseCard
            label="Commerce Ops · Dashboard"
            accent="gold"
            className="lg:col-start-1 lg:row-start-2"
          >
            <AnalyticsDashboard className="h-auto w-full" />
          </ShowcaseCard>

          <ShowcaseCard
            label="B2B · Quick Order"
            accent="green"
            className="lg:col-start-2 lg:row-start-2"
          >
            <OpsTable className="h-auto w-full" />
          </ShowcaseCard>
        </Reveal>

        <Reveal className="mt-8 md:hidden">
          <Button href="/projects" variant="outline" className="w-full">
            Explore projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
