import { Github, KeyRound, Mail, Twitter, Link as LinkIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import avatar from "@/assets/avatar.jpg";
import { profile } from "@/data/profile";
import { linkProps } from "@/lib/links";

const icons: Record<string, LucideIcon> = {
  github: Github,
  x: Twitter,
  twitter: Twitter,
  email: Mail,
  pgp: KeyRound,
};

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
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {profile.location}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {profile.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.links.map((link) => {
            const Icon = icons[link.label.toLowerCase()] ?? LinkIcon;
            return (
              <a
                key={link.label}
                href={link.href}
                {...linkProps(link.href)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
              </a>
            );
          })}
        </div>
        <p className="mt-3 font-mono text-[0.65rem] leading-relaxed text-muted-foreground">
          PGP fingerprint {profile.pgp.fingerprint}
        </p>
      </div>
    </section>
  );
}
