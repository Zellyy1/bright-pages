import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getPostBySlug, type Post } from "@/data/posts";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  head: ({ params, loaderData }) => {
    const post = loaderData;
    if (!post) {
      return {
        meta: [
          { title: "Post not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} — Tech Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — Tech Blog` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  loader: ({ params }): Post => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return post;
  },
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Post not found</h1>
        <p className="mt-2 text-muted-foreground">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </main>
  );
}

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>

      <article>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium text-secondary-foreground">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

        <div className="prose mt-10 max-w-none">
          {post.content.map((block, index) =>
            block.type === "paragraph" ? (
              <p key={index} className="mb-4 leading-7 text-foreground">
                {block.text}
              </p>
            ) : (
              <pre
                key={index}
                className="mb-6 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm"
              >
                <code className="font-mono text-foreground">{block.code}</code>
              </pre>
            )
          )}
        </div>
      </article>
    </main>
  );
}
