import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.name],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Renders the plain-string post body: paragraphs, `## ` headings, `- ` lists. */
function PostBody({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className="prose-dark">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{block.slice(3)}</h2>;
        }
        if (block.split("\n").every((line) => line.startsWith("- "))) {
          return (
            <ul key={i}>
              {block.split("\n").map((line, j) => (
                <li key={j}>{line.slice(2)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === post.slug);
  const next = blogPosts[(index + 1) % blogPosts.length];

  return (
    <article className="relative overflow-hidden pt-40 pb-20 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-purple/[0.06] blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <Link
            href="/blog"
            className="font-mono text-xs tracking-[0.18em] text-white/40 uppercase transition-colors hover:text-green"
          >
            ← All articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge accent={post.accent}>{post.tag}</Badge>
            <span className="font-mono text-xs text-white/35">
              {formatDate(post.date)} · {post.readingTime}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl leading-tight font-bold tracking-[-0.02em] text-balance md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/55">
            {post.excerpt}
          </p>

          <div className="mt-10 mb-12 hairline" />
        </Reveal>

        <Reveal delay={0.1}>
          <PostBody content={post.content} />
        </Reveal>

        {/* Author + next */}
        <Reveal className="mt-16 space-y-8">
          <div className="rounded-2xl border border-line bg-card p-8">
            <p className="eyebrow mb-3">Written by</p>
            <p className="font-display text-xl font-semibold text-white">
              {site.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              {site.role} · {site.subRole}. Building commerce systems that are
              fast for humans and legible to machines.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="outline">
                Work with me
              </Button>
            </div>
          </div>

          <Link
            href={`/blog/${next.slug}`}
            className="group block rounded-2xl border border-line bg-bg-soft p-8 transition-colors duration-300 hover:border-green/30"
          >
            <p className="font-mono text-xs tracking-[0.18em] text-white/40 uppercase">
              Read next
            </p>
            <p className="mt-3 font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-green">
              {next.title}
            </p>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
