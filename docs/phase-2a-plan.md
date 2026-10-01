# Phase 2A — Static Home Layout

## Status and scope

Implementation authorized by the user. Phase 2A source implementation is complete; visual verification remains partially blocked (see results below).

Read and reviewed: AGENTS.md, docs/architecture.md, docs/design-spec.md, docs/responsive-spec.md, docs/implementation-plan.md, and the existing Home and shared layout components.

Design reference: `/Users/jgatjens/Downloads/brunogatjens.com/website-homepage.jpg` (1280px-wide desktop screenshot).

Include the intro, visual-only project filters, grid structure, static project-card shells, consultation CTA, shared Header/Footer integration, and initial desktop/tablet/mobile adaptation. Placeholder artwork and logo are authorized; real assets will be supplied later.

Exclude filter behavior, Motion, animations, project-detail implementation, advanced SEO, and new dependencies. Phase 2B introduces real project data and artwork; Phase 2C adds filtering; Phase 2D refines responsive behavior; Phase 2E performs the final visual comparison.

## 1. Files to create

- `src/components/home/HomeIntro.tsx`
- `src/components/home/ProjectFilterPreview.tsx`
- `src/components/home/ProjectGrid.tsx`
- `src/components/home/ProjectCard.tsx`
- `src/components/home/ConsultationCTA.tsx`
- This planning document, `docs/phase-2a-plan.md`.

Use CSS placeholders. No temporary image assets or dependencies are necessary.

## 2. Files to modify

- `src/app/page.tsx`: compose the static Home sections.
- `src/app/globals.css`: refine shared colors, content width, typography, and spacing tokens from the reference.
- `src/components/layout/Header.tsx`: integrate a logo placeholder and reference navigation styling.
- `src/components/layout/Footer.tsx`: match the compact reference arrangement.

Reuse PageContainer and adjust its token values rather than duplicate container logic. Shared Header/Footer changes affect Info and project-route scaffolds; verify those pages too. Preserve unrelated files and the existing specifications.

## 3. Proposed component boundaries

| Component | Responsibility |
| --- | --- |
| HomeIntro | Intro copy and purple highlighted phrase |
| ProjectFilterPreview | Static filter labels and initial visual state |
| ProjectGrid | Six-item layout, responsive columns, and ordering |
| ProjectCard | Square placeholder artwork region |
| ConsultationCTA | Heading, consultation card, static decoration, and email CTA |

All remain Server Components. No interaction state, event handlers, or animation.

## 4. Home page structure

```text
Existing shared Header
Main
  Intro
  Project section
    Static filters
    Six project tiles
  Consultation section
    Heading
    Consultation card and decorative background
    LET'S TALK CTA
Existing shared Footer
```

Reuse the root layout's main landmark and skip link; do not duplicate Header or Footer inside Home.

Intro text from the reference:

> I am a UX/UI Designer, turning complex problems into simple, delightful interfaces
>
> Open to freelance UX/UI and 2D illustration projects

Highlight “simple, delightful interfaces” in purple. Use the first statement as h1, styled like the reference; “Book a Free Consultation” becomes h2.

## 5. Project-card structure

The reference shows artwork only, without external titles, descriptions, borders, rounding, or shadows.

Create six square, noninteractive placeholder cards with discreet labels identifying their positions. Do not invent project names, captions, or detail links. Keep the artwork region replaceable without changing grid geometry.

## 6. Project-grid approach

- Desktop: three columns and two rows.
- Tablet: two columns and three rows.
- Mobile: one column and six rows.
- Zero grid gaps, matching the adjoining tiles.
- Preserve left-to-right, top-to-bottom order.

Filter labels: ALL, CASE STUDY, BRAND, UI/PROPS. ALL has a dark filled treatment; the other labels have thin borders. Filters remain visual-only in this phase.

## 7. Image handling strategy

Use CSS placeholder blocks for six artworks and a small logo placeholder. Do not extract artwork from the screenshot or generate substitutes.

When assets arrive, use next/image with intrinsic dimensions and responsive sizes matching the grid. The reference suggests square thumbnail exports. Preserve supplied artwork ratios and confirm cropping if original images are not square. Do not implement real asset integration outside the approved phase scope.

## 8. Desktop layout strategy

Compare first at the reference's 1280px width. Approximate screenshot measurements:

- Main content: 1040px wide, centered with approximately 120px side margins.
- Header: approximately 64px tall, with a subtle bottom divider.
- Intro: centered, beginning approximately 130px from the page top.
- Filters: left-aligned above the grid.
- Artwork tiles: approximately 347px square.
- Consultation: generous separation from the grid, centered heading, and approximately 320px-wide bordered card.
- Footer: small text arranged in one row near the bottom.

Treat measurements and sampled colors as screenshot-derived estimates. Store reusable values as design tokens.

## 9. Tablet layout strategy

Propose two columns from approximately 768px, subject to checking content fit. Reduce gutters and section spacing, and allow intro text and filters to wrap naturally. Center the consultation card and contain decorative elements inside the section. Header and Footer may wrap without adding mobile-menu interaction.

## 10. Mobile layout strategy

Use one grid column below the tablet breakpoint and support 320px upward.

- Allow natural intro wrapping without forced desktop line breaks.
- Wrap filter labels.
- Use available content width for square artwork tiles.
- Constrain the consultation card to the viewport with readable padding.
- Wrap Footer items and hide redundant visual separators where necessary.
- Reduce decorative consultation elements if they obscure content or cause overflow.

These adaptations are proposals. Deeper responsive refinement belongs to Phase 2D.

## 11. Accessibility considerations

- Preserve the main landmark and keyboard skip link.
- Use one h1 and a consultation h2.
- Render filter previews as static labels with accessible text explaining that filtering is unavailable in this phase; do not use enabled controls or tab semantics.
- Keep placeholders noninteractive and clearly identified.
- Use a descriptive mailto link once the address is confirmed.
- Hide decorative icons, logo placeholders, and background tiles from assistive technology when they convey no additional information.
- Check contrast, especially the purple intro phrase; flag conflicts between screenshot fidelity and readable contrast.
- Preserve visible keyboard focus for working links.
- Do not introduce fake booking or résumé links.

## 12. Visual verification strategy

After implementation approval:

1. Run typecheck, lint, and production build; run relevant tests if available.
2. Capture a full-page desktop screenshot at 1280px and compare section positions, widths, typography, filters, grid geometry, CTA, and Footer.
3. Inspect at 320, 390, 768, 1024, and 1440px, including around chosen grid breakpoints.
4. Check wrapping, placeholder ratios, zero grid gaps, keyboard navigation, and horizontal overflow.
5. Recheck shared Header/Footer on Info and the not-found page.
6. Record discrepancies caused by placeholder assets and unresolved typography.

Phase 2E performs the final detailed visual comparison. Phase 2A still needs a basic reference comparison to validate its structure.

## 13. Ambiguities and questions

- **Typography:** the specification requires Noto Serif headings, while the consultation heading appears sans-serif in the screenshot. Proposed default: Please update headings to use Bricolage Grotesque.
- **Consultation content:** the screenshot contains `[Company name]` and apparent sample booking copy. Confirm whether to reproduce it temporarily or use supplied copy. Do not render the company name for now.
- **Contact:** the Footer appears to show `gatjensb@gmail.com` and “Heredia, Costa Rica.” Confirm before making the email link functional.
- **Résumé:** no résumé file is available. Proposed temporary treatment: a visibly unavailable label without a fake link. Here is the link https://drive.google.com/open?id=1m9q1cGma0pVq_xxAVRi0VOL3H94wVb-3&usp=drive_fs
- **Navigation:** Please add a home link, Projects should not be underline on homepage.
- **Consultation decoration:** propose static blurred numbered tiles matching the reference, with simpler placement on narrow screens and no animation.

The user authorized implementation after revising this plan. The decisions and remaining verification limits are recorded below.


## Implementation decisions and results

- Implemented all five Home components as Server Components, with static filter labels and six CSS artwork placeholders. Existing image assets remain untouched for later integration.
- Added the screenshot intro, an accessible project section, a gapless 1/2/3-column grid (below 768px / from 768px / from 1024px), and the static consultation card with decorative blurred tiles on desktop.
- Replaced Noto Serif with Bricolage Grotesque for headings as explicitly requested in the revised plan. Retained Fira Code for UI and the screenshot's monospaced intro. No dependency changes.
- Updated the shared Header with a logo placeholder, separate Home and Projects links, Info, and the supplied résumé URL. Projects links to /#projects and has no active underline on Home.
- Omitted the company-name field. Kept screenshot sample consultation copy as temporary static content; no scheduler or booking behavior is implemented.
- User explicitly confirmed gatjensb@gmail.com and Heredia, Costa Rica. Both the consultation CTA and Footer email now use mailto links.
- Refined screenshot-derived tokens: light background, dark text, 1040px desktop inner content width, purple accent, spacing, and placeholder surfaces. The accent is darker than the screenshot to improve readability.
- Typecheck passed, ESLint passed, and production build passed. Home and Info remain statically generated. No automated test suite exists; none was introduced for this static phase.
- Local HTTP checks passed: Home returned 200, Info returned 200, and an unknown project returned 404.
- Browser accessibility inspection confirmed the intro, four category labels, six placeholder cards, consultation structure, email links, and Header/Footer. This is not equivalent to visual or keyboard verification.
- Full-page screenshot comparison, viewport checks, and shared-page visual regression checks could not be completed: browser commands failed with connection/debugger errors; native Chrome access was not approved. Responsive CSS is implemented but remains visually unverified in this phase.
- A second dev server could not start because a server was already running at http://localhost:3000. Existing server was preserved.
- No filters, animation, Motion, project-detail content, advanced SEO, or new dependencies were introduced.

## Remaining review items

- Complete browser screenshots and responsive checks at 320, 390, 768, 1024, 1280, and 1440px when browser access is available.
- Verify keyboard focus, skip-link behavior, card dimensions, shared Header/Footer on Info and not-found routes, and no horizontal overflow.
- Replace sample consultation wording with final copy when supplied.
- Real artwork and logo integration remains outside the static-placeholder implementation.


## Phase 2A asset follow-up

User explicitly requested real tile and avatar integration before completing Phase 2A, extending the earlier placeholder-only scope.

- Replaced all six artwork placeholders with supplied 694 × 694 PNGs using next/image, intrinsic dimensions, responsive sizes, and no cropping.
- Preserved reference order: Zonda Live, Move On, Envision, Synapse, Luminus, UI / Props.
- Replaced the logo placeholder with the supplied 64 × 64 avatar-me.png, displayed at 32 × 32. Empty image alt avoids repeating the adjacent linked name.
- Used the user-supplied 14 × 14 copyright SVG path and fill in the Footer, with accessible copyright text.
- Removed unused placeholder styling. No filter behavior, project links, animations, or dependencies were added.
- Lint and typecheck passed. Production build was blocked by the sandbox preventing Turbopack from binding a worker port; the requested elevated retry was declined. Build verification remains incomplete for this follow-up.
- Browser inspection remains incomplete; the preview tab was unavailable.
