import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

const rowClass =
  "group -mx-3 flex items-center gap-4 rounded-lg px-3 py-3.5 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

type ListRowProps = {
  title: string;
  meta: string;
  tag?: string;
  description: string;
  /** Rendered as the row wrapper, receives the row classes. */
  render: (props: { className: string; children: ReactNode }) => ReactNode;
};

export function ListRow({ title, meta, tag, description, render }: ListRowProps) {
  return render({
    className: rowClass,
    children: (
      <>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="truncate text-[0.95rem] font-medium text-foreground transition-transform duration-200 group-hover:translate-x-0.5">
              {title}
            </h3>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{meta}</span>
          </div>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {tag ? (
              <>
                <span className="font-mono uppercase tracking-wide text-foreground/70">
                  {tag}
                </span>
                <span className="mx-1.5 text-border">•</span>
              </>
            ) : null}
            {description}
          </p>
        </div>
        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </>
    ),
  });
}
