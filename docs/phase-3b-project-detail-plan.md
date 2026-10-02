# Phase 3B — Responsive Project Gallery

## Approved plan
Replace placeholders with extracted Nexomon and Jokeystudio assets. Add a Server Component ProjectImageGroup supporting full, columns-4 and columns-3 layouts, driven by ordered groups in project-details.ts. Keep ProjectArtwork as the shared next/image renderer. No dependencies, animations, route changes or unrelated refactors.

## Mapping
Nexomon props: four columns. Gameplay screenshots and three composite icon sheets: full width. Green and snow environments: full width SVGs. Green plants: four columns. Snow plants: three columns (two desktop rows, intentionally differing from the six-item reference row). Twelve separate characters: three columns in filename order. Empty groups/sections remain hidden; Role & Tools is omitted.

## Responsive rules
Four-column groups use two columns below 1024px. Three-column groups use one below 768px, two below 1024px and three above. Full groups stay full width. Shared fluid image/group gap tokens preserve whitespace. Images keep intrinsic dimensions and natural height. Small plants have a 164px height-based proportional width cap and are not enlarged beyond intrinsic dimensions. SVG artwork remains external image assets rather than UI icons.

## Verification
Check 320/375/430/768/1024/1280/1440 and intermediate widths, actual image loading, aspect ratios, ordering, columns and overflow. Run lint, typecheck and Webpack production build. Pixel-level reference refinement belongs to Phase 3C. Introduction and project external URLs remain pending approved copy.

## Results
Lint, typecheck and Webpack production build passed. Browser checks at 320/375/430/600/768/900/1024/1280/1440 confirmed expected column counts, preserved image proportions and no horizontal overflow. All 33 gallery images loaded after scrolling through the page. Desktop environments, plants and characters and the 320px props layout were visually inspected. Character filename order starts with fox, unlike the original composite reference; retained filename order as approved and corrected alt text to match actual assets. Final preview: `/private/tmp/project-gallery-phase-3b.png`.
