import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <ul className="project-grid" aria-label="Project artwork">
      {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
    </ul>
  );
}
