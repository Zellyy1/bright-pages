import { Link } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("border-b border-border", className)}>
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          Tech Blog
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
