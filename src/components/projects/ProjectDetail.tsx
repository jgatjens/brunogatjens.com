import type { ProjectDetailData } from "@/content/project-details";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectSection } from "./ProjectSection";
import { ProjectArtwork } from "./ProjectArtwork";

export function ProjectDetail({ project }: { project: ProjectDetailData }) {
  if (project.gallery) {
    return (
      <PageContainer className="pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-32">
        <article data-project-theme={project.theme} aria-labelledby="project-title">
          <h1 id="project-title" className="sr-only">{project.title}</h1>
          <p className="text-sm leading-tight sm:text-base">{project.introduction}</p>
          <div className="mt-12 space-y-12 sm:mt-20 sm:space-y-20 lg:mt-24 lg:space-y-24">
            {project.gallery.map((artwork) => (
              artwork.link ? (
                <a key={artwork.id} href={artwork.link.href} aria-label={artwork.link.label}
                  target={artwork.link.newTab ? "_blank" : undefined}
                  rel={artwork.link.newTab ? "noopener noreferrer" : undefined} className="block">
                  <ProjectArtwork artwork={artwork} sizes="(min-width: 1120px) 1040px, (min-width: 512px) 93.75vw, calc(100vw - 32px)" />
                </a>
              ) : (
                <ProjectArtwork key={artwork.id} artwork={artwork} sizes="(min-width: 1120px) 1040px, (min-width: 512px) 93.75vw, calc(100vw - 32px)" />
              )
            ))}
          </div>
        </article>
      </PageContainer>
    );
  }
  return (
    <PageContainer className="py-section lg:pt-20">
      <h1 className="text-4xl font-bold sm:text-5xl">{project.title}</h1>
      {project.introduction && <p className="mt-6 leading-relaxed">{project.introduction}</p>}
      <div className="mt-section space-y-section">
        {project.sections.map((section) => <ProjectSection key={section.id} section={section} />)}
      </div>
    </PageContainer>
  );
}
