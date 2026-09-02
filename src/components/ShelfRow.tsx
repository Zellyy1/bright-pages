import { ListRow } from "@/components/ListRow";
import { linkProps } from "@/lib/links";
import type { ShelfEntry } from "@/data/shelf";

function Rating({ value }: { value: number }) {
  return (
    <span className="ml-2 inline-flex items-center gap-0.5 align-middle" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < value
              ? "h-1 w-1 rounded-full bg-foreground/60"
              : "h-1 w-1 rounded-full bg-border"
          }
        />
      ))}
    </span>
  );
}

export function ShelfRow({ entry }: { entry: ShelfEntry }) {
  return (
    <article>
      <ListRow
        title={entry.title}
        meta={entry.meta}
        tag={entry.tag}
        description={entry.note}
        render={({ className, children }) =>
          entry.href ? (
            <a href={entry.href} {...linkProps(entry.href)} className={className}>
              {children}
              {entry.rating ? <Rating value={entry.rating} /> : null}
            </a>
          ) : (
            <div className={className}>
              {children}
              {entry.rating ? <Rating value={entry.rating} /> : null}
            </div>
          )
        }
      />
    </article>
  );
}
