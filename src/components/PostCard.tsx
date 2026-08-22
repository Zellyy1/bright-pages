import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import type { Post } from "@/data/posts";

export function PostCard({ post, className }: { post: Post; className?: string }) {
  return (
    <article className={cn("group", className)}>
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="block rounded-md px-2 py-3 transition-colors hover:bg-accent"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="truncate text-sm font-medium text-foreground">{post.title}</h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{post.date}</span>
        </div>
        <p className="mt-1 truncate text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-wide">{post.category}</span>
          <span className="mx-1.5">·</span>
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
