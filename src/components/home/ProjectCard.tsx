import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

const glass = {
  refraction: 56,
  depth: 72,
  dispersion: 56,
  frost: 8,
  splay: 100,
};

export function ProjectCard({ project }: { project: Project }) {
  const filterId = `${project.slug}-refraction`;
  const splayFrequency = 0.01 * (glass.splay / 100);
  const channelOffset = glass.dispersion / 8;
  const artwork = (
      <Image
        src={project.coverImage}
        alt={project.coverImageAlt}
        width={project.coverImageWidth}
        height={project.coverImageHeight}
        sizes="(min-width: 1120px) 346.67px, (min-width: 1024px) 31.25vw, (min-width: 768px) 46.875vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)"
        className="block h-auto w-full"
      />
  );

  return (
    <li className="min-w-0">
      {project.detailHref ? (
        <Link href={project.detailHref} aria-label={`View ${project.cardLabel} project`} className="group relative block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
          {artwork}
          <svg aria-hidden="true" className="absolute h-0 w-0" focusable="false">
            <defs>
              <filter id={filterId} x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
                <feTurbulence type="fractalNoise" baseFrequency={splayFrequency} numOctaves="2" seed="8" result="distortion" />
                <feDisplacementMap in="SourceGraphic" in2="distortion" scale={glass.refraction} xChannelSelector="R" yChannelSelector="G" result="refracted" />
                <feDisplacementMap in="refracted" in2="distortion" scale={glass.depth} xChannelSelector="G" yChannelSelector="B" result="depth" />
                <feColorMatrix in="depth" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
                <feColorMatrix in="depth" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green" />
                <feColorMatrix in="depth" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
                <feOffset in="red" dx={-channelOffset} result="red-dispersed" />
                <feOffset in="blue" dx={channelOffset} result="blue-dispersed" />
                <feBlend in="red-dispersed" in2="green" mode="screen" result="red-green" />
                <feBlend in="red-green" in2="blue-dispersed" mode="screen" />
              </filter>
            </defs>
          </svg>
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/40 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden [clip-path:inset(calc(100%_-_58px)_0_0)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Image
              src={project.coverImage}
              alt=""
              fill
              sizes="(min-width: 1120px) 346.67px, (min-width: 1024px) 31.25vw, (min-width: 768px) 46.875vw, (min-width: 512px) 93.75vw, calc(100vw - 32px)"
              className="object-cover"
              style={{ filter: `url(#${filterId})` }}
            />
          </span>
          <span className="absolute bottom-[11.67px] left-1/2 z-[2] flex w-fit max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col items-start gap-2 rounded-full bg-white/40 px-6 py-4 font-sans text-[20px] font-semibold leading-[26px] text-[#22212C] backdrop-blur-[8px]">
            {project.cardLabel}
          </span>
        </Link>
      ) : artwork}
    </li>
  );
}
