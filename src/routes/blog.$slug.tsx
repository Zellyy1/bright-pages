import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getPostBySlug, posts, type Post } from "@/data/posts";
import { buildMeta, site } from "@/data/site";
import { PageContainer } from "@/components/PageContainer";
import { formatDate, readingTime } from "@/lib/format";

function neighbours(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

function postBody(post: Post) {
  return post.content
    .map((block) => (block.type === "paragraph" ? block.text : block.code))
    .join(" ");
}

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  head: ({ params }: { params: { slug: string } }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      return { meta: [{ title: "Post not found" }, { name: "robots", content: "noindex" }] };
    }
    const meta = buildMeta({
      title: `${post.title} — ${site.name}`,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      type: "article",
    });
    return {
      ...meta,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: site.name },
            mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          }),
        },
      ],
    };
  },
  loader: ({ params }): Post => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <PageContainer className="text-center">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">Post not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The article you are looking for does not exist or has been removed.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </PageContainer>
  );
}

function BlogPost() {
  const post = Route.useLoaderData();
  const { previous, next } = neighbours(post.slug);

  return (
    <PageContainer>
      <Link
        to="/"
        className="animate-rise mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>

      <article className="animate-rise rise-delay-1">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          <span className="text-foreground/70">{post.category}</span>
          <span className="text-border">•</span>
          <span>{formatDate(post.date)}</span>
          <span className="text-border">•</span>
          <span>{readingTime(postBody(post))}</span>
        </div>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground">
          {post.title}
        </h1>
        <p className="mt-4 max-w-[68ch] text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-10 max-w-[68ch]">
          {post.content.map((block, index) =>
            block.type === "paragraph" ? (
              <p key={index} className="mb-5 leading-[1.8] text-foreground">
                {block.text}
              </p>
            ) : (
              <figure
                key={index}
                className="mb-6 overflow-hidden rounded-xl border border-border bg-muted"
              >
                <figcaption className="border-b border-border px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  {block.language}
                </figcaption>
                <pre className="overflow-x-auto p-4 text-sm">
                  <code className="font-mono text-foreground">{block.code}</code>
                </pre>
              </figure>
            )
          )}
        </div>
      </article>

      {previous || next ? (
        <nav className="mt-14 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
          {previous ? (
            <Link
              to="/blog/$slug"
              params={{ slug: previous.slug }}
              className="group rounded-lg border border-border p-4 transition-colors hover:bg-accent"
            >
              <span className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="h-3 w-3" /> Newer
              </span>
              <span className="mt-1 block text-sm font-medium text-foreground">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group rounded-lg border border-border p-4 text-right transition-colors hover:bg-accent sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                Older <ArrowRight className="h-3 w-3" />
              </span>
              <span className="mt-1 block text-sm font-medium text-foreground">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </PageContainer>
  );
}
