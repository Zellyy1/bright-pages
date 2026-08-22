import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Premnath" },
      {
        name: "description",
        content: "Side projects and tools I build: developer CLIs, realtime apps, and color tooling.",
      },
      { property: "og:title", content: "Projects — Premnath" },
      {
        property: "og:description",
        content: "Side projects and tools I build: developer CLIs, realtime apps, and color tooling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Projects</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Small things I have built, mostly to scratch my own itch.
      </p>

      <div className="mt-8 divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <article key={project.id}>
            <a
              href={project.href ?? "#"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noreferrer" : undefined}
              className="group block rounded-md px-2 py-3 transition-colors hover:bg-accent"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="flex items-center gap-1 truncate text-sm font-medium text-foreground">
                  {project.name}
                  {project.href ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                  ) : null}
                </h2>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <p className="mt-1 truncate text-xs text-muted-foreground">
                <span className="font-mono uppercase tracking-wide">{project.tags.join(" / ")}</span>
                <span className="mx-1.5">·</span>
                {project.description}
              </p>
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
