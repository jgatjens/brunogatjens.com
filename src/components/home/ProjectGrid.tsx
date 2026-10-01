import { ProjectCard } from "./ProjectCard";

const tiles = [
  { name: "Zonda Live", image: "zonda-live" },
  { name: "Move On", image: "move-on" },
  { name: "Envision", image: "envision" },
  { name: "Synapse", image: "synapse" },
  { name: "Luminus", image: "luminus" },
  { name: "UI / Props", image: "ui-props" },
];

export function ProjectGrid() {
  return (
    <ul className="project-grid" aria-label="Project artwork">
      {tiles.map((tile) => <ProjectCard key={tile.image} name={tile.name} src={`/images/projects/${tile.image}-tile.png`} />)}
    </ul>
  );
}
