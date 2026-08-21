import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/posts";
import { PostCard } from "@/components/PostCard";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Tech Blog — Thoughts on frontend engineering" },
      {
        name: "description",
        content: "A simple tech blog about React, CSS, full-stack development, and design systems.",
      },
      { property: "og:title", content: "Tech Blog — Thoughts on frontend engineering" },
      {
        property: "og:description",
        content: "A simple tech blog about React, CSS, full-stack development, and design systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Tech Blog
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Short, practical notes on frontend engineering, CSS, and building better web applications.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Latest posts
        </h2>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
