import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * AV wordmark. Letters use currentColor so they inherit the surrounding
 * text colour (white on the dark UI); the chevron/slash accents keep the
 * brand red.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 16"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[18px] w-auto", className)}
    >
      <path
        d="M0 9.59446V7.34446L9 3.38139V5.97017L2.83807 8.44389L2.92116 8.30966V8.62926L2.83807 8.49503L9 10.9688V13.5575L0 9.59446Z"
        fill="#C95F52"
      />
      <path
        d="M18.943 13.7045H15.9771L20.4963 0.613637H24.063L28.5758 13.7045H25.6099L22.3308 3.60511H22.2285L18.943 13.7045ZM18.7576 8.55895H25.7633V10.7195H18.7576V8.55895Z"
        fill="currentColor"
      />
      <path
        d="M30.8817 0.613637L34.0458 10.5597H34.1673L37.3377 0.613637H40.4059L35.8931 13.7045H32.3264L27.8072 0.613637H30.8817Z"
        fill="currentColor"
      />
      <path
        d="M48.1712 0L43.9524 15.6733H41.6065L45.8253 0H48.1712Z"
        fill="#C95F52"
      />
      <path
        d="M59.0137 9.59446L50.0137 13.5575V10.9688L56.1756 8.49503L56.0925 8.62926V8.30966L56.1756 8.44389L50.0137 5.97017V3.38139L59.0137 7.34446V9.59446Z"
        fill="#C95F52"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Akshay Vaghasiya, home"
      className={cn(
        "group inline-flex items-center text-fg transition-opacity duration-300 hover:opacity-80",
        className
      )}
    >
      <LogoMark className="h-5" />
    </Link>
  );
}
