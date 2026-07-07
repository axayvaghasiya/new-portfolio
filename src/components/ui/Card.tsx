import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: "green" | "purple" | "gold" | "none";
};

const glows = {
  green: "hover:border-green/30 hover:shadow-[0_16px_60px_-16px_rgba(0,255,135,0.25)]",
  purple: "hover:border-purple/30 hover:shadow-[0_16px_60px_-16px_rgba(109,76,175,0.3)]",
  gold: "hover:border-gold/30 hover:shadow-[0_16px_60px_-16px_rgba(201,95,82,0.28)]",
  none: "",
};

export function Card({ children, className, glow = "green" }: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-line bg-card p-7 transition-all duration-500",
        glow !== "none" && "hover:-translate-y-1.5",
        glows[glow],
        className
      )}
    >
      {children}
    </div>
  );
}
