import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

/** Standard hero header for inner pages. */
export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-green/[0.05] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-green" />
            {eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-bold tracking-[-0.02em] text-balance md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
