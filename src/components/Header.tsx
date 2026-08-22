import { Link } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("border-b border-border", className)}>
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <nav className="flex items-center gap-5">
          <Link to="/" className={navLinkClass} activeProps={{ className: "text-foreground font-medium" }}>
            Blogs
          </Link>
          <Link
            to="/projects"
            className={navLinkClass}
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Projects
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
