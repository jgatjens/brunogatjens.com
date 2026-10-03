import Image from "next/image";
import type { ProjectDetailData } from "@/content/project-details";

export function ProjectCaseStudyHeader({ project }: { project: ProjectDetailData }) {
  const header = project.caseStudyHeader;
  if (!header) return null;

  return (
    <header className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,349px)] md:gap-12">
      <div className="min-w-0">
        <div className="flex items-center gap-4">
          <Image src={header.logo.src} alt={header.logo.alt} width={header.logo.width} height={header.logo.height}
            className="h-auto w-16 shrink-0 sm:w-20" />
          <h1 className="text-4xl font-bold sm:text-5xl">{project.title}</h1>
        </div>
        <p className="mt-4 text-sm sm:text-base">UX/UI CASE STUDY</p>
        {project.introduction && <p className="mt-8 text-sm leading-relaxed text-muted sm:mt-10 sm:text-base">{project.introduction}</p>}
        <a href={header.website} className="mt-4 inline-block max-w-full break-words text-sm text-muted underline sm:text-base">{header.website}</a>
      </div>
      <Image src={header.illustration.src} alt={header.illustration.alt}
        width={header.illustration.width} height={header.illustration.height}
        sizes="(min-width: 768px) 349px, (min-width: 512px) 320px, calc(100vw - 32px)"
        className="mx-auto h-auto w-full max-w-80 md:max-w-[349px]" />
    </header>
  );
}
