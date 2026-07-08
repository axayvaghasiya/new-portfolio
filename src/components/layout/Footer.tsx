import Link from "next/link";
import { nav, site, legalLinks } from "@/lib/site";
import { services } from "@/data/services";
import { Logo } from "@/components/layout/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="relative mt-28">
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {site.role} & {site.subRole.split(" · ")[0]}. Building commerce
              systems that are fast for humans and legible to machines.
            </p>
            <SocialLinks className="mt-6" badgeClassName="h-7" iconClassName="h-5 w-5" />
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow mb-5 !text-purple">Explore</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow mb-5 !text-gold">Services</p>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm break-all text-muted underline decoration-green/30 underline-offset-4 transition-colors hover:text-green"
            >
              {site.email}
            </a>
            <p className="mt-4 text-sm text-muted">{site.location}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green/25 bg-green/10 px-4 py-1.5 font-mono text-[0.7rem] tracking-wide text-green uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-green opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
              </span>
              {site.availability}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 md:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-xs text-muted transition-colors hover:text-muted"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
