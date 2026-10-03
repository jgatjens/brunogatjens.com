import type { ProjectImageGroupData, ProjectImageLayout } from "@/content/project-details";
import { ProjectArtwork } from "./ProjectArtwork";

const layouts: Record<ProjectImageLayout, { className: string; sizes: string }> = {
  "columns-2": {
    className: "grid-cols-1 md:grid-cols-2",
    sizes: "(min-width: 1120px) 508px, (min-width: 768px) 46vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)",
  },
  full: {
    className: "grid-cols-1",
    sizes: "(min-width: 1120px) 1040px, (min-width: 512px) 93.75vw, calc(100vw - 32px)",
  },
  "columns-4": {
    className: "grid-cols-2 lg:grid-cols-4",
    sizes: "(min-width: 1120px) 212px, (min-width: 1024px) 21vw, (min-width: 512px) 46vw, calc((100vw - 48px) / 2)",
  },
  "columns-3": {
    className: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    sizes: "(min-width: 1120px) 331px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)",
  },
  "columns-6": {
    className: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    sizes: "135px",
  },
};

export function ProjectImageGroup({ group }: { group: ProjectImageGroupData }) {
  if (group.images.length === 0) return null;
  const layout = layouts[group.layout];
  const fourColumnStyles = group.layout === "columns-4"
    ? group.compact ? "mx-auto w-full max-w-176" : "lg:gap-x-project-prop-gap"
    : "";

  return (
    <div className={`project-image-group grid min-w-0 gap-project-image-gap ${layout.className} ${fourColumnStyles} ${group.spacing ? `project-group-${group.spacing}` : ""}`}>
      {group.images.map((artwork) => (
        <div key={artwork.id} className={`flex min-w-0 justify-center ${group.compact ? "items-end" : "items-center"}`}>
          <ProjectArtwork artwork={artwork} sizes={layout.sizes} compact={group.compact} />
        </div>
      ))}
    </div>
  );
}
