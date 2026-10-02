# Phase 2B — Central Project Metadata

## Approved scope
Move project metadata to src/content/projects.ts. Home supplies the registry to a reusable ProjectGrid; ProjectCard consumes one Project. All components remain Server Components. Preserve grid order, markup, images, responsive classes, and image sizes.

## Data model
Export ProjectCategory and Project with slug, title, categories, coverImage, coverImageAlt, coverImageWidth, coverImageHeight, and optional description/year. Export a readonly project array and typed category-label mapping. Keep layout-specific image sizes in ProjectCard. Future URLs derive from /projects/{slug}; cards stay noninteractive until detail pages exist.

## Temporary categories
User approved provisional assignments: Zonda Live → brand; Move On → case-study; Envision → ui-props; Synapse → brand; Luminus → case-study; UI / Props → ui-props. Clearly mark them as temporary in the registry. Omit unknown descriptions and years.

## Files
Create src/content/projects.ts and this document. Modify Home, ProjectCard, ProjectGrid, and ProjectFilterPreview. Preserve CSS, shared layout, metadata, and detail routes. No dependencies or runtime validation library.

## Verification
Run typecheck, lint, and production build; check unique URL-safe slugs, categories, image paths, alt text, dimensions, and order. Verify rendered markup and appearance if browser access is available. No existing automated test suite.

## Exclusions
No filter behavior, Motion, animations, detail pages, previous/next navigation, CMS, API, database, SEO expansion, or unrelated refactors.


## Results
- Implemented the approved registry, reusable card/grid props, Home data import, and shared category labels. No CSS, dependencies, SEO, or route changes.
- Typecheck and lint passed.
- Registry checks passed: six unique URL-safe slugs, original order, known categories, existing PNG files, exact 694 × 694 dimensions, and nonempty alternative text.
- Browser inspection passed at 320, 768, and 1280px: 1/2/3 columns, square tiles, no horizontal overflow, original image order, no card links, and no filter buttons. All six images were confirmed loaded at tablet and desktop widths; mobile screenshots showed artwork rendering while lazy images were still loading during the initial measurement.
- Production build remains blocked: Turbopack worker port binding returned EPERM both in the initial sandbox run and the requested elevated retry. No source error was reported. Build verification remains incomplete.
- No automated test suite is present. Registry checks were run directly without adding a framework.
