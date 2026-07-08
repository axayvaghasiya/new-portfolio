import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function FeaturedProjects() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                Projects that moved{" "}
                <span className="text-gradient-green">real numbers</span>
              </>
            }
            description="Replatforms, rebuilds, and operations systems, each measured by the metric it was engaged to move."
          />
          <Reveal className="mb-14 hidden md:mb-20 md:block">
            <Button href="/projects" variant="outline">
              All projects
            </Button>
          </Reveal>
        </div>

        <Reveal stagger={0.12} className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="block h-full"
            >
              <Card glow={project.accent} className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <Badge accent={project.accent}>{project.category}</Badge>
                  <span className="font-mono text-xs text-muted">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl leading-snug font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-green">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
                  {project.results.slice(0, 4).map((r) => (
                    <div key={r.label} className="bg-card/90 px-4 py-3">
                      <dd className="font-display text-xl font-semibold text-gold">
                        {r.value}
                      </dd>
                      <dt className="mt-0.5 font-mono text-[0.6rem] tracking-wide text-muted uppercase">
                        {r.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-1 py-1 font-mono text-[0.65rem] text-muted">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </Reveal>

        <Reveal className="mt-10 md:hidden">
          <Button href="/projects" variant="outline" className="w-full">
            All projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
