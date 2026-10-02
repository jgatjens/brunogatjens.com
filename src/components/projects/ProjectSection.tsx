import type { ProjectSectionData } from "@/content/project-details";
import { ProjectImageGroup } from "./ProjectImageGroup";

export function ProjectSection({ section }: { section: ProjectSectionData }) {
  if (!section.groups.some((group) => group.images.length > 0)) return null;

  return (
    <section aria-labelledby={section.id} className="project-detail-section">
      <h2 id={section.id} className="border-l border-muted pl-6 text-xl font-semibold sm:text-2xl lg:pl-10 lg:text-4xl lg:leading-tight">{section.title}</h2>
      {section.link && <a href={section.link.href} className="mt-3 inline-block max-w-full break-words text-sm underline decoration-1 underline-offset-2">{section.link.label}</a>}
      <div className="mt-8 flex flex-col sm:mt-12">
        {section.groups.map((group) => <ProjectImageGroup key={group.id} group={group} />)}
      </div>
    </section>
  );
}
