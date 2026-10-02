export type ProjectArtworkData = {
  id: string;
  alt: string;
  width: number;
  height: number;
  src: string;
};

export type ProjectImageLayout = "full" | "columns-3" | "columns-4" | "columns-6";

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
  sections: readonly ProjectSectionData[];
};

// Introduction and external URLs remain omitted pending approved copy.
export const projectDetails: readonly ProjectDetailData[] = [
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
  }
];
