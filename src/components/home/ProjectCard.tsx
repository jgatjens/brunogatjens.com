import Image from "next/image";

export function ProjectCard({ name, src }: { name: string; src: string }) {
  return (
    <li className="project-card">
      <Image
        src={src}
        alt={`${name} project artwork`}
        width={694}
        height={694}
        sizes="(min-width: 1120px) 347px, (min-width: 1024px) 31vw, (min-width: 768px) 47vw, 94vw"
        className="block h-auto w-full"
      />
    </li>
  );
}
