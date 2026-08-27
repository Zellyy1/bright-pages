import { Link } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinkClass =
  "relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const activeLinkClass =
  "text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-foreground";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md",
        className
      )}
    >
    <div className="mx-auto flex max-w-3xl items-center justify-end px-5 py-3.5">

        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-5">
            <Link
              to="/"
              className={navLinkClass}
              activeOptions={{ exact: true }}
              activeProps={{ className: activeLinkClass }}
            >
              Blogs
            </Link>
            <Link
              to="/projects"
              className={navLinkClass}
              activeProps={{ className: activeLinkClass }}
            >
              Projects
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
