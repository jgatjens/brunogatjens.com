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
        sizes="(min-width: 1120px) 346.67px, (min-width: 1024px) 31.25vw, (min-width: 768px) 46.875vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)"
        className="block h-auto w-full"
      />
    </li>
  );
}
