import Image from "next/image";
import type { ProjectArtworkData } from "@/content/project-details";

export function ProjectArtwork({ artwork, sizes, compact = false }: { artwork: ProjectArtworkData; sizes: string; compact?: boolean }) {
  if (artwork.displayFrame) {
    return (
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          aspectRatio: `${artwork.displayFrame.width} / ${artwork.displayFrame.height}`,
          maxWidth: artwork.displayFrame.width,
        }}
      >
        <Image
          src={artwork.src}
          alt={artwork.alt}
          fill
          loading={artwork.loading}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <Image src={artwork.src} alt={artwork.alt} width={artwork.width} height={artwork.height}
      loading={artwork.loading}
      sizes={sizes}
      style={artwork.maxWidth ? { maxWidth: artwork.maxWidth } : compact ? { maxWidth: artwork.width * Math.min(1, 164 / artwork.height) } : undefined}
      className="mx-auto block h-auto w-full" />
  );
}
