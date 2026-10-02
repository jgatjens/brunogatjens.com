import type { ProjectSectionData } from "@/content/project-details";
import { ProjectImageGroup } from "./ProjectImageGroup";

export function ProjectSection({ section }: { section: ProjectSectionData }) {
  if (!section.groups.some((group) => group.images.length > 0)) return null;

  return (
    <section aria-labelledby={section.id} className="project-detail-section">
      <h2 id={section.id} className="project-section-title">{section.title}</h2>
      {section.link && <a href={section.link.href} className="project-section-link">{section.link.label}</a>}
      <div className="project-artwork-stack">
        {section.groups.map((group) => <ProjectImageGroup key={group.id} group={group} />)}
      </div>
    </section>
  );
}
