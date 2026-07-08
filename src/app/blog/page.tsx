import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes on commerce engineering: performance, B2B, and the shift to agentic commerce.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Field notes from the{" "}
            <span className="text-gradient-purple">commerce trenches</span>
          </>
        }
        description="What I am learning while building storefronts for humans, and preparing them for machines."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Featured post */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-line bg-card p-9 transition-all duration-500 hover:-translate-y-1 hover:border-green/30 md:p-14"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-green/[0.07] blur-[90px]"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge accent={featured.accent}>{featured.tag}</Badge>
                  <span className="font-mono text-xs text-muted">
                    {formatDate(featured.date)} · {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-6 max-w-3xl font-display text-3xl leading-tight font-semibold tracking-tight text-balance transition-colors duration-300 group-hover:text-green md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
                <p className="mt-8 font-mono text-xs tracking-[0.18em] text-green uppercase">
                  Read article{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>

          {/* Rest */}
          <Reveal stagger={0.1} className="mt-8 grid gap-6 md:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-purple/30"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Badge accent={post.accent}>{post.tag}</Badge>
                </div>
                <h3 className="mt-5 flex-none font-display text-xl leading-snug font-semibold tracking-tight transition-colors duration-300 group-hover:text-purple">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <p className="mt-6 font-mono text-xs text-muted">
                  {formatDate(post.date)} · {post.readingTime}
                </p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
