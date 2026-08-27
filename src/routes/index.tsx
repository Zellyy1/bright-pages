import { createFileRoute } from "@tanstack/react-router";

import { posts } from "@/data/posts";
import { buildMeta, site } from "@/data/site";
import { PageContainer } from "@/components/PageContainer";
import { PostCard } from "@/components/PostCard";
import { ProfileHeader } from "@/components/ProfileHeader";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    buildMeta({
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      path: "/",
    }),
});

function Home() {
  return (
    <PageContainer>
      <div className="animate-rise">
        <ProfileHeader />
      </div>

      <section className="mt-14">
        <h2 className="animate-rise rise-delay-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Blogs
        </h2>
        <div className="animate-rise rise-delay-2 mt-3 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
