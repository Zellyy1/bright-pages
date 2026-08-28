import { createFileRoute } from "@tanstack/react-router";

import { projects } from "@/data/projects";
import { buildMeta, site } from "@/data/site";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";

const description =
  "Side projects and tools I build: developer CLIs, realtime apps, and color tooling.";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () =>
    buildMeta({
      title: `Projects — ${site.name}`,
      description,
      path: "/projects",
    }),
});

function ProjectsPage() {
  return (
    <PageContainer>
      <h1 className="animate-rise font-display text-3xl font-semibold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="animate-rise rise-delay-1 mt-2 text-sm text-muted-foreground">
        Small things I have built, mostly to scratch my own itch.
      </p>

      <div className="animate-rise rise-delay-2 mt-8 divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}
