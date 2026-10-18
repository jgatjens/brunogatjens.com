export type ProjectCategory = "case-study" | "brand" | "ui-props";

export type Project = {
  slug: string;
  title: string;
  cardLabel: string;
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
// Descriptions and years are omitted until supplied. Detail URLs are explicit.
export const projects: readonly Project[] = [
  {
    slug: "zonda-live",
    detailHref: "/projects/zonda-live",
    title: "Zonda Live",
    cardLabel: "Zonda Live",
    categories: ["case-study"],
    coverImage: "/images/projects/tiles/zonda-live-tile.png",
    coverImageAlt: "Zonda Live project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "move-on",
    detailHref: "/projects/move-on",
    title: "Move On",
    cardLabel: "MoveOn",
    categories: ["case-study"],
    coverImage: "/images/projects/tiles/move-on-tile.png",
    coverImageAlt: "Move On project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "envision",
    detailHref: "/projects/envision",
    title: "Envision",
    cardLabel: "Envision",
    categories: ["case-study"],
    coverImage: "/images/projects/tiles/envision-tile.png",
    coverImageAlt: "Envision project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "synapse",
    detailHref: "/projects/synapse",
    title: "Synapse",
    cardLabel: "Synapse",
    categories: ["case-study"],
    coverImage: "/images/projects/tiles/synapse-tile.png",
    coverImageAlt: "Synapse project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "luminus",
    detailHref: "/projects/luminus",
    title: "Luminus",
    cardLabel: "Luminus Brand",
    categories: ["brand"],
    coverImage: "/images/projects/tiles/luminus-tile.png",
    coverImageAlt: "Luminus project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "ui-props",
    detailHref: "/projects/ui-props",
    title: "UI / Props",
    cardLabel: "UI & Props",
    categories: ["ui-props"],
    coverImage: "/images/projects/tiles/ui-props-tile.png",
    coverImageAlt: "UI / Props project artwork",
    coverImageWidth: 694,
    coverImageHeight: 694,
  },
  {
    slug: "hookbots",
    detailHref: "/projects/hookbots",
    title: "Hookbots",
    cardLabel: "Hookbots",
    categories: [],
    coverImage: "/images/projects/tiles/hookbots-tile.png",
    coverImageAlt: "Hookbots project artwork",
    coverImageWidth: 404,
    coverImageHeight: 316,
  },
  {
    slug: "childrens-book",
    detailHref: "/projects/childrens-book",
    title: "Children's Book",
    cardLabel: "Children's Book",
    categories: [],
    coverImage: "/images/projects/tiles/childrens-book-tile.png",
    coverImageAlt: "Children's Book project artwork",
    coverImageWidth: 3500,
    coverImageHeight: 3500,
  },
  {
    slug: "character-design",
    detailHref: "/projects/character-design",
    title: "Character Design",
    cardLabel: "Character Design",
    categories: [],
    coverImage: "/images/projects/tiles/character-design-tile.png",
    coverImageAlt: "Character Design project artwork",
    coverImageWidth: 1500,
    coverImageHeight: 1500,
  },
];
