import { Link } from "@tanstack/react-router";

import { ListRow } from "@/components/ListRow";
import { formatDate } from "@/lib/format";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <ListRow
        title={post.title}
        meta={formatDate(post.date)}
        tag={post.category}
        description={post.excerpt}
        render={({ className, children }) => (
          <Link to="/blog/$slug" params={{ slug: post.slug }} className={className}>
            {children}
          </Link>
        )}
      />
    </article>
  );
}
