import type { ProjectDetailData } from "@/content/project-details";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectSection } from "./ProjectSection";

export function ProjectDetail({ project }: { project: ProjectDetailData }) {
  return (
    <PageContainer className="py-section">
      <h1 className="text-4xl font-bold sm:text-5xl">{project.title}</h1>
      {project.introduction && <p className="mt-6 leading-relaxed">{project.introduction}</p>}
      <div className="project-detail-sections">
        {project.sections.map((section) => <ProjectSection key={section.id} section={section} />)}
      </div>
    </PageContainer>
  );
}
