import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" aria-label="Project artwork">
      {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
    </ul>
  );
}
