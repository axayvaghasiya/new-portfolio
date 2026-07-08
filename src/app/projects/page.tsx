import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Commerce engineering case studies: B2B replatforms, headless performance rebuilds, operations platforms, and global expansion programmes.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Work measured in{" "}
            <span className="text-gradient-green">outcomes</span>, not
            deliverables
          </>
        }
        description="Six representative engagements from more than 300 shipped brands. Client names are confidential; the numbers are real."
      />

      {/* AI portfolio pointer */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Link
              href="/projects/ai"
              className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-purple/20 bg-purple/[0.06] px-7 py-5 transition-colors duration-300 hover:border-purple/45"
            >
              <div className="flex items-center gap-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-purple opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple" />
                </span>
                <p className="font-display font-semibold text-fg">
                  Building the AI side too:{" "}
                  <span className="text-purple">
                    two AI commerce products in development
                  </span>
                </p>
              </div>
              <span className="font-mono text-xs tracking-wide text-purple uppercase transition-transform duration-300 group-hover:translate-x-1">
                View AI portfolio →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <article
                id={project.slug}
                className="grid scroll-mt-32 gap-10 rounded-3xl border border-line bg-card p-8 transition-colors duration-500 hover:border-white/12 md:p-12 lg:grid-cols-[1.2fr_1fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Badge accent={project.accent}>{project.category}</Badge>
                    <span className="font-mono text-xs text-muted">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 font-mono text-xs text-muted">
                    {project.client}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                        Problem
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-mono text-xs tracking-[0.2em] text-green uppercase">
                        Solution
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results panel */}
                <div className="grid content-center gap-4 sm:grid-cols-2">
                  {project.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-2xl border border-line bg-bg px-6 py-7 text-center"
                    >
                      <p className="font-display text-3xl font-bold text-gradient-green md:text-4xl">
                        {r.value}
                      </p>
                      <p className="mt-2 font-mono text-[0.65rem] leading-relaxed tracking-[0.12em] text-muted uppercase">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pt-8 pb-4 text-center">
        <Reveal>
          <p className="text-muted">
            Want the full story behind any of these?
          </p>
          <div className="mt-6">
            <Button href="/contact">Ask me about a case</Button>
          </div>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
