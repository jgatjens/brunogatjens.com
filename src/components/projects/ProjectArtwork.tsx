import Image from "next/image";
import type { ProjectArtworkData } from "@/content/project-details";

export function ProjectArtwork({ artwork, sizes, compact = false }: { artwork: ProjectArtworkData; sizes: string; compact?: boolean }) {
  return (
    <Image src={artwork.src} alt={artwork.alt} width={artwork.width} height={artwork.height}
      sizes={sizes}
      style={compact ? { maxWidth: artwork.width * Math.min(1, 164 / artwork.height) } : undefined}
      className="mx-auto block h-auto w-full" />
  );
}
