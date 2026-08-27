import { ListRow } from "@/components/ListRow";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <ListRow
        title={project.name}
        meta={project.year}
        tag={project.tags.join(" / ")}
        description={project.description}
        render={({ className, children }) =>
          project.href ? (
            <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
              {children}
            </a>
          ) : (
            <div className={className}>{children}</div>
          )
        }
      />
    </article>
  );
}
