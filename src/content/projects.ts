export type ProjectCategory = "case-study" | "brand" | "ui-props";

export type Project = {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  coverImage: string;
  coverImageAlt: string;
  coverImageWidth: number;
  coverImageHeight: number;
  description?: string;
  year?: number;
  detailHref?: string;
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  "case-study": "CASE STUDY",
  brand: "BRAND",
  "ui-props": "UI/PROPS",
};

// Array order defines the Home grid. Categories are temporary assignments
// approved by the user, not confirmed classifications of the actual work.
// Descriptions and years are omitted until supplied.
// Future detail URLs derive from each slug: /projects/{slug}.
export const projects: readonly Project[] = [
  {
    slug: "zonda-live",
    title: "Zonda Live",
    categories: ["case-study"],
    coverImage: "/images/projects/zonda-live-tile.png",
    coverImageAlt: "Zonda Live project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "move-on",
    title: "Move On",
    categories: ["case-study"],
    coverImage: "/images/projects/move-on-tile.png",
    coverImageAlt: "Move On project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "envision",
    title: "Envision",
    categories: ["case-study"],
    coverImage: "/images/projects/envision-tile.png",
    coverImageAlt: "Envision project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "synapse",
    detailHref: "/projects/synapse",
    title: "Synapse",
    categories: ["case-study"],
    coverImage: "/images/projects/synapse-tile.png",
    coverImageAlt: "Synapse project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "luminus",
    detailHref: "/projects/luminus",
    title: "Luminus",
    categories: ["brand"],
    coverImage: "/images/projects/luminus-tile.png",
    coverImageAlt: "Luminus project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "ui-props",
    detailHref: "/projects/ui-props",
    title: "UI / Props",
    categories: ["ui-props"],
    coverImage: "/images/projects/ui-props-tile.png",
    coverImageAlt: "UI / Props project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
];
