import type { ProjectImageGroupData, ProjectImageLayout } from "@/content/project-details";
import { ProjectArtwork } from "./ProjectArtwork";

const layouts: Record<ProjectImageLayout, { className: string; sizes: string }> = {
  full: {
    className: "project-images-full",
    sizes: "(min-width: 1120px) 1040px, (min-width: 512px) 93.75vw, calc(100vw - 32px)",
  },
  "columns-4": {
    className: "project-images-four",
    sizes: "(min-width: 1120px) 242px, (min-width: 1024px) 23vw, (min-width: 512px) 46vw, calc((100vw - 48px) / 2)",
  },
  "columns-3": {
    className: "project-images-three",
    sizes: "(min-width: 1120px) 331px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)",
  },
  "columns-6": {
    className: "project-images-six",
    sizes: "135px",
  },
};

export function ProjectImageGroup({ group }: { group: ProjectImageGroupData }) {
  if (group.images.length === 0) return null;
  const layout = layouts[group.layout];

  return (
    <div className={`project-image-group ${layout.className}`}>
      {group.images.map((artwork) => (
        <div key={artwork.id} className={`flex min-w-0 justify-center ${group.compact ? "items-end" : "items-center"}`}>
          <ProjectArtwork artwork={artwork} sizes={layout.sizes} compact={group.compact} />
        </div>
      ))}
    </div>
  );
}
