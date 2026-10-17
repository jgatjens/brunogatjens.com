import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const artwork = (
    <Image
      src={project.coverImage}
      alt={project.coverImageAlt}
      width={project.coverImageWidth}
      height={project.coverImageHeight}
      sizes="(min-width: 1120px) 346.67px, (min-width: 1024px) 31.25vw, (min-width: 768px) 46.875vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)"
      className="block h-auto w-full"
    />
  );

  return (
    <li className="min-w-0">
      {project.detailHref ? (
        <Link
          href={project.detailHref}
          aria-label={`View ${project.cardLabel} project`}
          className="group relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          {artwork}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-white/40 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          />
          <span className="absolute bottom-3 left-1/2 z-[1] flex w-fit max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col items-start overflow-hidden rounded-[4px] bg-white px-5 py-3 font-sans text-[20px] font-semibold leading-normal text-[#22212C]">
            <span className="w-auto whitespace-nowrap">{project.cardLabel}</span>
          </span>
        </Link>
      ) : artwork}
    </li>
  );
}
