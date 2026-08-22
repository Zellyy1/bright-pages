import avatar from "@/assets/avatar.jpg";
import { profile } from "@/data/profile";

export function ProfileHeader() {
  return (
    <section className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <img
        src={avatar}
        alt={`${profile.name} profile picture`}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-full border border-border object-cover"
      />

      <div className="min-w-0">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{profile.name}</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">{profile.role}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {profile.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {profile.links.map((link) => {
            const external = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
