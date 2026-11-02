export type ProjectArtworkData = {
  id: string;
  alt: string;
  width: number;
  height: number;
  src: string;
  loading?: "eager" | "lazy";
  displayFrame?: { width: number; height: number };
  maxWidth?: number;
  link?: { href: string; label: string; newTab?: boolean };
};

export type ProjectImageLayout = "full" | "columns-2" | "columns-3" | "columns-4" | "columns-6";

export type ProjectImageGroupData = {
  id: string;
  layout: ProjectImageLayout;
  compact?: boolean;
  spacing?: "related" | "spacious";
  images: readonly ProjectArtworkData[];
};

export type ProjectSectionData = {
  id: string;
  title: string;
  link?: { label: string; href: string };
  groups: readonly ProjectImageGroupData[];
};

export type ProjectDetailData = {
  slug: string;
  title: string;
  introduction?: string;
  caseStudyHeader?: {
    logo: ProjectArtworkData;
    illustration: ProjectArtworkData;
    website: string;
  };
  theme?: "dark";
  showGalleryTitle?: boolean;
  gallery?: readonly ProjectArtworkData[];
  sections: readonly ProjectSectionData[];
};

// Introduction and external URLs remain omitted pending approved copy.
export const projectDetails: readonly ProjectDetailData[] = [
  { slug: "zonda-live", title: "Zonda Live", sections: [] },
  { slug: "move-on", title: "MoveOn", sections: [] },
  { slug: "envision", title: "Envision", sections: [] },
  {
    slug: "synapse",
    title: "Synapse",
    introduction: "Efficient management of personnel, assets, and field information",
    caseStudyHeader: {
      logo: { id: "synapse-logo", src: "/images/projects/synapse/logo-synapse.svg", alt: "", width: 80, height: 80 },
      illustration: { id: "synapse-header", src: "/images/projects/synapse/header-synapse.svg", alt: "Illustration of a person using a connected device", width: 349, height: 333 },
      website: "https://www.syn4pse.com/",
    },
    sections: [
      {
        id: "synapse-mobile-screen",
        title: "Mobile screen",
        groups: [
          {
            id: "synapse-mobile-screens",
            layout: "columns-2",
            images: [
              { id: "synapse-section-01-item-01", src: "/images/projects/synapse/synapse-section-01-item-01.png", alt: "Synapse Statistics screen with performance charts and completed orders", width: 780, height: 1572 },
              { id: "synapse-section-01-item-02", src: "/images/projects/synapse/synapse-section-01-item-02.png", alt: "Synapse Reporting screen with crossing details, photos, and cable measurements", width: 780, height: 1572 },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "luminus",
    title: "The World of Luminus",
    theme: "dark",
    introduction: "The World of Luminus is a cosmic-fantasy brand featuring vibrant neon palettes, glowing holographic effects, luminous gradients, and mystical symbols. Its visual identity blends theatrical scenography with dark, ethereal atmospheres to evoke wonder, energy, and euphoria.",
    showGalleryTitle: true,
    sections: [],
    gallery: [
      { id: "luminus-logo", src: "/images/projects/luminus/luminus-01.png", alt: "Project Luminus lettering framed by neon foliage and butterflies", width: 2080, height: 1302 },
      { id: "luminus-characters", src: "/images/projects/luminus/luminus-02.png", alt: "Neon animal musicians surrounded by cosmic symbols and foliage", width: 2080, height: 1506 },
      { id: "luminus-video-preview", src: "/images/projects/luminus/luminus-03.png", alt: "Preview of The World of Luminus video", width: 2080, height: 1151, link: { href: "https://youtu.be/P1-f7cTawWc?si=RztSgqBg3UUAHJ0N", label: "Watch The World of Luminus on YouTube (opens in a new tab)", newTab: true } },
      { id: "luminus-poster", src: "/images/projects/luminus/luminus-04.png", alt: "Luminus: The Mystic Forest poster with colorful foliage, animal musicians, and a glowing fountain", width: 2080, height: 3275 },
    ],
  },
  {
    "slug": "ui-props",
    "title": "UI & Props",
    "sections": [
      {
        "id": "nexomon-extinction",
        "title": "Nexomon: Extinction",
        "groups": [
          {
            "id": "props",
            "layout": "columns-4",
            "images": [
              {
                "id": "nexomon-section-01-item-01",
                "src": "/images/projects/nexomon/nexomon-section-01-item-01.png",
                "alt": "Nexomon prop illustration 1",
                "width": 424,
                "height": 424
              },
              {
                "id": "nexomon-section-01-item-02",
                "src": "/images/projects/nexomon/nexomon-section-01-item-02.png",
                "alt": "Nexomon prop illustration 2",
                "width": 424,
                "height": 424
              },
              {
                "id": "nexomon-section-01-item-03",
                "src": "/images/projects/nexomon/nexomon-section-01-item-03.png",
                "alt": "Nexomon prop illustration 3",
                "width": 424,
                "height": 424
              },
              {
                "id": "nexomon-section-01-item-04",
                "src": "/images/projects/nexomon/nexomon-section-01-item-04.png",
                "alt": "Nexomon prop illustration 4",
                "width": 424,
                "height": 424
              }
            ]
          },
          {
            "id": "nexomon-2",
            "layout": "full",
            "images": [
              {
                "id": "nexomon-section-02-item-01",
                "src": "/images/projects/nexomon/nexomon-section-02-item-01.png",
                "alt": "Nexomon world gameplay screenshot",
                "width": 2080,
                "height": 961
              }
            ]
          },
          {
            "id": "nexomon-3",
            "layout": "full",
            "images": [
              {
                "id": "nexomon-section-03-item-01",
                "src": "/images/projects/nexomon/nexomon-section-03-item-01.png",
                "alt": "Nexomon battle gameplay screenshot",
                "width": 2080,
                "height": 1170
              }
            ]
          },
          {
            "id": "nexomon-4",
            "spacing": "spacious",
            "layout": "full",
            "images": [
              {
                "id": "nexomon-section-04-item-01",
                "src": "/images/projects/nexomon/nexomon-section-04-item-01.png",
                "alt": "Nexomon icon exploration sheet",
                "width": 2080,
                "height": 1560
              }
            ]
          },
          {
            "id": "nexomon-5",
            "layout": "full",
            "images": [
              {
                "id": "nexomon-section-05-item-01",
                "src": "/images/projects/nexomon/nexomon-section-05-item-01.png",
                "alt": "Nexomon additional icon exploration sheet",
                "width": 4160,
                "height": 3120
              }
            ]
          },
          {
            "id": "nexomon-6",
            "layout": "full",
            "images": [
              {
                "id": "nexomon-section-06-item-01",
                "src": "/images/projects/nexomon/nexomon-section-06-item-01.png",
                "alt": "Nexomon element icon sheet",
                "width": 2080,
                "height": 1560
              }
            ]
          }
        ]
      },
      {
        "id": "solve-rescue",
        "title": "Solve & Rescue – Math Puzzles",
        "groups": [
          {
            "id": "environment-1",
            "layout": "full",
            "images": [
              {
                "id": "jokeystudio-section-01",
                "src": "/images/projects/jokeystudio/jokeystudio-section-01.svg",
                "alt": "Green environment illustration",
                "width": 1040,
                "height": 976
              }
            ]
          },
          {
            "id": "plants-1",
            "spacing": "related",
            "layout": "columns-4",
            "images": [
              {
                "id": "jokeystudio-section-01-item-01",
                "src": "/images/projects/jokeystudio/jokeystudio-section-01-item-01.svg",
                "alt": "Green environment plant illustration 1",
                "width": 156,
                "height": 164
              },
              {
                "id": "jokeystudio-section-01-item-02",
                "src": "/images/projects/jokeystudio/jokeystudio-section-01-item-02.svg",
                "alt": "Green environment plant illustration 2",
                "width": 135,
                "height": 163
              },
              {
                "id": "jokeystudio-section-01-item-03",
                "src": "/images/projects/jokeystudio/jokeystudio-section-01-item-03.svg",
                "alt": "Green environment plant illustration 3",
                "width": 77,
                "height": 130
              },
              {
                "id": "jokeystudio-section-01-item-04",
                "src": "/images/projects/jokeystudio/jokeystudio-section-01-item-04.svg",
                "alt": "Green environment plant illustration 4",
                "width": 59,
                "height": 88
              }
            ],
            "compact": true
          },
          {
            "id": "environment-2",
            "layout": "full",
            "images": [
              {
                "id": "jokeystudio-section-02",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02.svg",
                "alt": "Snow environment illustration",
                "width": 1040,
                "height": 1180
              }
            ]
          },
          {
            "id": "plants-2",
            "spacing": "related",
            "layout": "columns-6",
            "images": [
              {
                "id": "jokeystudio-section-02-item-01",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02-item-01.svg",
                "alt": "Snow environment plant illustration 1",
                "width": 131,
                "height": 154
              },
              {
                "id": "jokeystudio-section-02-item-02",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02-item-02.svg",
                "alt": "Snow environment plant illustration 2",
                "width": 135,
                "height": 163
              },
              {
                "id": "jokeystudio-section-02-item-03",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02-item-03.svg",
                "alt": "Snow environment plant illustration 3",
                "width": 48,
                "height": 81
              },
              {
                "id": "jokeystudio-section-02-item-04",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02-item-04.svg",
                "alt": "Snow environment plant illustration 4",
                "width": 96,
                "height": 157
              },
              {
                "id": "jokeystudio-section-02-item-05",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02-item-05.svg",
                "alt": "Snow environment plant illustration 5",
                "width": 73,
                "height": 120
              },
              {
                "id": "jokeystudio-section-02-item-06",
                "src": "/images/projects/jokeystudio/jokeystudio-section-02-item-06.svg",
                "alt": "Snow environment plant illustration 6",
                "width": 70,
                "height": 115
              }
            ],
            "compact": true
          },
          {
            "id": "characters",
            "layout": "columns-3",
            "images": [
              {
                "id": "jokeystudio-section-03-item-01",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-01.png",
                "alt": "Fox character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-02",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-02.png",
                "alt": "Deer character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-03",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-03.png",
                "alt": "Sheep character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-04",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-04.png",
                "alt": "Rabbit character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-05",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-05.png",
                "alt": "Polar bear character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-06",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-06.png",
                "alt": "Husky character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-07",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-07.png",
                "alt": "Owl character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-08",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-08.png",
                "alt": "Snow leopard character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-09",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-09.png",
                "alt": "Musk ox character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-10",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-10.png",
                "alt": "Pig character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-11",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-11.png",
                "alt": "Penguin character illustration",
                "width": 694,
                "height": 694
              },
              {
                "id": "jokeystudio-section-03-item-12",
                "src": "/images/projects/jokeystudio/jokeystudio-section-03-item-12.png",
                "alt": "Zebra character illustration",
                "width": 694,
                "height": 694
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "hookbots",
    title: "Hookbots",
    introduction: "Illustrated 7 main characters with expressive poses and clean linework.",
    showGalleryTitle: true,
    sections: [],
    gallery: [
      { id: "hookbots-01", src: "/images/projects/hookbots/hookbots-01.png", alt: "Hookbots character lineup", width: 1400, height: 960, loading: "eager" },
      { id: "hookbots-02", src: "/images/projects/hookbots/hookbots-02.png", alt: "Hookbots character illustration 2", width: 1400, height: 960 },
      { id: "hookbots-03", src: "/images/projects/hookbots/hookbots-03.png", alt: "Hookbots character illustration 3", width: 1400, height: 960 },
      { id: "hookbots-04", src: "/images/projects/hookbots/hookbots-04.png", alt: "Hookbots character illustration 4", width: 1400, height: 960 },
      { id: "hookbots-05", src: "/images/projects/hookbots/hookbots-05.png", alt: "Hookbots character illustration 5", width: 1400, height: 960 },
      { id: "hookbots-06", src: "/images/projects/hookbots/hookbots-06.png", alt: "Hookbots character illustration 6", width: 1400, height: 960 },
      { id: "hookbots-07", src: "/images/projects/hookbots/hookbots-07.png", alt: "Hookbots character illustration 7", width: 1400, height: 960 },
      { id: "hookbots-08", src: "/images/projects/hookbots/hookbots-08.png", alt: "Hookbots character illustration 8", width: 1400, height: 960 },
    ],
  },
  {
    slug: "childrens-book",
    title: "Children's Book",
    showGalleryTitle: true,
    sections: [],
    gallery: [
      { id: "childrens-book-01", src: "/images/projects/childrens-book/childrens-book-01.png", alt: "Children's Book illustration 1", width: 1920, height: 1920, loading: "eager" },
      { id: "childrens-book-02", src: "/images/projects/childrens-book/childrens-book-02.png", alt: "Children's Book scene with a girl standing beside a large pink dinosaur in a forest", width: 768, height: 768 },
      { id: "childrens-book-03", src: "/images/projects/childrens-book/childrens-book-03.png", alt: "Children's Book illustration 3", width: 4096, height: 2650, displayFrame: { width: 932, height: 673 } },
      { id: "childrens-book-04", src: "/images/projects/childrens-book/childrens-book-04.png", alt: "Children's Book illustration 4", width: 960, height: 1440 },
      { id: "childrens-book-05", src: "/images/projects/childrens-book/childrens-book-05.png", alt: "Children's Book illustration 5", width: 1127, height: 1329, maxWidth: 1028 },
      { id: "childrens-book-06", src: "/images/projects/childrens-book/childrens-book-06.png", alt: "Children's Book illustration 6", width: 1920, height: 1920 },
      { id: "childrens-book-07", src: "/images/projects/childrens-book/childrens-book-07.png", alt: "Children's Book illustration 7", width: 935, height: 1146, maxWidth: 998 },
      { id: "childrens-book-08", src: "/images/projects/childrens-book/childrens-book-08.png", alt: "Children's Book illustration 8", width: 1011, height: 932 },
    ],
  },
  {
    slug: "character-design",
    title: "Character Design",
    showGalleryTitle: true,
    sections: [],
    gallery: [
      { id: "character-design-01", src: "/images/projects/character-design/character-design-01.png", alt: "Character Design illustration 1", width: 1500, height: 1500, loading: "eager" },
      { id: "character-design-02", src: "/images/projects/character-design/character-design-02.png", alt: "Character design sheet with fantasy characters and creature sketches", width: 1086, height: 768 },
      { id: "character-design-03", src: "/images/projects/character-design/character-design-03.png", alt: "Character Design illustration 3", width: 1440, height: 1440 },
      { id: "character-design-04", src: "/images/projects/character-design/character-design-04.png", alt: "Character Design illustration 4", width: 1440, height: 1800 },
      { id: "character-design-05", src: "/images/projects/character-design/character-design-05.png", alt: "Character Design illustration 5", width: 1920, height: 2716 },
      { id: "character-design-06", src: "/images/projects/character-design/character-design-06.png", alt: "Character Design illustration 6", width: 1500, height: 1500 },
      { id: "character-design-07", src: "/images/projects/character-design/character-design-07.png", alt: "Character Design illustration 7", width: 1500, height: 1600 },
      { id: "character-design-08", src: "/images/projects/character-design/character-design-08.png", alt: "Character Design illustration 8", width: 1500, height: 1714 },
    ],
  }
];
