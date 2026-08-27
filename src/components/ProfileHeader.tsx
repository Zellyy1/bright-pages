import { Github, Mail, Twitter, Link as LinkIcon } from "lucide-react";

import avatar from "@/assets/avatar.jpg";
import { profile } from "@/data/profile";

function iconFor(label: string) {
  const key = label.toLowerCase();
  if (key === "github") return Github;
  if (key === "x" || key === "twitter") return Twitter;
  if (key === "email") return Mail;
  return LinkIcon;
}

export function ProfileHeader() {
  return (
    <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
      <img
        src={avatar}
        alt={`${profile.name} profile picture`}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-full object-cover shadow-lg ring-1 ring-border"
      />

      <div className="min-w-0">
        <h1 className="font-display text-3xl tracking-tight text-foreground">{profile.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {profile.location}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {profile.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.links.map((link) => {
            const Icon = iconFor(link.label);
            const external = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
