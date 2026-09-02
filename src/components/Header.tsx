import { Link } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";


const navLinkClass =
  "relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const activeLinkClass = "text-foreground nav-active";

const links = [
  { to: "/", label: "Blogs", exact: true },
  { to: "/projects", label: "Projects" },
  { to: "/watching", label: "Watching" },
  { to: "/playing", label: "Playing" },
  { to: "/now", label: "Now" },
] as const;

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
          <nav className="flex items-center gap-4 sm:gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={navLinkClass}
                {...(link.exact ? { activeOptions: { exact: true } } : {})}
                activeProps={{ className: activeLinkClass }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
