import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  accent?: "green" | "purple" | "gold" | "neutral";
  className?: string;
};

const accents = {
  green: "border-green/25 bg-green/10 text-green",
  purple: "border-purple/25 bg-purple/10 text-purple",
  gold: "border-gold/25 bg-gold/10 text-gold",
  neutral: "border-white/10 bg-white/5 text-muted",
};

export function Badge({ children, accent = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-wide uppercase",
        accents[accent],
        className
      )}
    >
      {children}
    </span>
  );
}
