import Image from "next/image";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="project-card">
      <Image
        src={project.coverImage}
        alt={project.coverImageAlt}
        width={project.coverImageWidth}
        height={project.coverImageHeight}
        sizes="(min-width: 1120px) 347px, (min-width: 1024px) 31vw, (min-width: 768px) 47vw, 94vw"
        className="block h-auto w-full"
      />
    </li>
  );
}
