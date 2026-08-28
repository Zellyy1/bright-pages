import { Link } from "@tanstack/react-router";

import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { linkProps } from "@/lib/links";


export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav className="flex items-center gap-4">
          <Link to="/" className="transition-colors hover:text-foreground">
            Blogs
          </Link>
          <Link to="/projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          {profile.links.map((link) => {
            const external = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
