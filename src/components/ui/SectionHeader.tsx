import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-3xl md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="eyebrow mb-4 flex items-center gap-3">
        {align === "left" && <span className="inline-block h-px w-8 bg-green" />}
        {eyebrow}
        {align === "center" && (
          <span className="mx-auto hidden" aria-hidden />
        )}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-white/60">{description}</p>
      )}
    </Reveal>
  );
}
