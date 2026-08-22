import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/posts";
import { PostCard } from "@/components/PostCard";
import { ProfileHeader } from "@/components/ProfileHeader";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Premnath — Blogs, notes and projects" },
      {
        name: "description",
        content:
          "Personal site of Premnath: short, practical notes on React, CSS, full-stack development, and design systems.",
      },
      { property: "og:title", content: "Premnath — Blogs, notes and projects" },
      {
        property: "og:description",
        content:
          "Personal site of Premnath: short, practical notes on React, CSS, full-stack development, and design systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="animate-rise">
        <ProfileHeader />
      </div>

      <section className="mt-12">
        <h2 className="animate-rise rise-delay-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Blogs
        </h2>
        <div className="animate-rise rise-delay-2 mt-3 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
