import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-display font-medium tracking-tight transition-all duration-300 will-change-transform focus-visible:outline-2 focus-visible:outline-green disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-green text-black hover:shadow-[0_0_36px_rgba(0,255,135,0.35)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-white/15 text-fg hover:border-green/60 hover:text-green hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-muted hover:text-fg",
};

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 group-hover/btn:translate-x-1"
    >
      <path
        d="M1 7h11m0 0L7.5 2.5M12 7l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {variant !== "ghost" && <Arrow />}
    </>
  );

  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
