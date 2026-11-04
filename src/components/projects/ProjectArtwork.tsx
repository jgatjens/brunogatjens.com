import Image from "next/image";
import type { ProjectArtworkData } from "@/content/project-details";

export function ProjectArtwork({ artwork, sizes, compact = false }: { artwork: ProjectArtworkData; sizes: string; compact?: boolean }) {
  const imageClassName = "mx-auto h-auto w-full";

  if (artwork.darkSrc) {
    return (
      <>
        <Image
          src={artwork.src}
          alt={artwork.alt}
          width={artwork.width}
          height={artwork.height}
          loading={artwork.loading}
          sizes={sizes}
          style={artwork.maxWidth ? { maxWidth: artwork.maxWidth } : compact ? { maxWidth: artwork.width * Math.min(1, 164 / artwork.height) } : undefined}
          className={`${imageClassName} project-artwork-light`}
        />
        <Image
          src={artwork.darkSrc}
          alt=""
          aria-hidden="true"
          width={artwork.width}
          height={artwork.height}
          loading={artwork.loading}
          sizes={sizes}
          style={artwork.maxWidth ? { maxWidth: artwork.maxWidth } : compact ? { maxWidth: artwork.width * Math.min(1, 164 / artwork.height) } : undefined}
          className={`${imageClassName} project-artwork-dark`}
        />
      </>
    );
  }

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
      className={imageClassName} />
  );
}
