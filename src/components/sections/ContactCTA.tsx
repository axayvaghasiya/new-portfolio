import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid-bg relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-20 text-center md:py-28">
            {/* Radial accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-green/[0.09] blur-[110px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-96 rounded-full bg-purple/[0.1] blur-[110px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-80 rounded-full bg-gold/[0.07] blur-[110px]"
            />

            <div className="relative">
              <p className="eyebrow mb-6 justify-center">
                Next project starts here
              </p>
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Ready to scale your{" "}
                <span className="text-gradient-green">commerce</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                One senior engineer, direct communication, and outcomes
                measured in revenue. I am currently booking projects for this
                quarter.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" size="lg">
                  Start a project
                </Button>
                <Button
                  href={`mailto:${site.email}`}
                  variant="outline"
                  size="lg"
                >
                  Email me directly
                </Button>
              </div>
              <p className="mt-8 font-mono text-xs text-muted">
                Average reply time: under 24 hours
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
