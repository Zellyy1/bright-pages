import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import type { Post } from "@/data/posts";

export function PostCard({ post, className }: { post: Post; className?: string }) {
  return (
    <article className={cn("group", className)}>
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="block rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-card-foreground transition-colors group-hover:text-foreground">
          {post.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      </Link>
    </article>
  );
}
