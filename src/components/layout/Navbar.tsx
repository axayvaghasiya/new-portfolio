"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation and lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "py-3" : "py-5",
          scrolled || open
            ? "border-b border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  isActive(item.href)
                    ? "text-green"
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-green/70" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <SocialLinks badgeClassName="h-[34px]" iconClassName="h-[25px] w-[25px]" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-[1.5px] w-6 bg-white transition-all duration-300",
                open && "top-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-[1.5px] w-4 bg-white transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-[1.5px] w-6 bg-white transition-all duration-300",
                open && "top-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col justify-between bg-bg/95 px-6 pt-28 pb-10 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className="space-y-2">
          {nav.map((item, i) => (
            <li
              key={item.href}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl font-semibold tracking-tight",
                  isActive(item.href) ? "text-green" : "text-white"
                )}
              >
                <span className="font-mono text-xs text-white/30">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "flex items-center justify-between transition-all delay-300 duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <SocialLinks badgeClassName="h-6" iconClassName="h-5 w-5" />
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-white/50 underline underline-offset-4"
          >
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}
