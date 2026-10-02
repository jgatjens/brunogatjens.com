# Phase 3A — Static UI & Props Detail

Approved after reference review. This is the project-detail phase using the user's latest numbering; the completed Info plan remains separate.

## Scope
Server-rendered `/projects/ui-props`, title UI & Props, two ordered sections matching the reference, and eleven temporary artwork placeholders. Reuse Header, Footer, container, Bricolage Grotesque and Fira Code. No Motion, dependencies, Home card navigation, or unrelated changes.

## Content and assets
Metadata remains in `src/content/projects.ts`; ordered detail content lives in `src/content/project-details.ts` keyed by its slug. Introduction and external URLs are omitted pending approved copy. Role & Tools is omitted; empty artwork sections render nothing. Add each extracted image source and actual intrinsic dimensions to replace its placeholder automatically. Placeholder ratios are approximate reference proportions, not final asset measurements.

## Components
ProjectDetail owns title/introduction and sections. ProjectSection owns heading, optional link and ordered artwork. ProjectArtwork uses next/image when a source exists, otherwise a proportioned placeholder. All are Server Components. Unsupported detail routes remain 404.

## Responsive foundation
Single-column artwork at every width, natural image height, shared gutters and progressively reduced spacing. Detailed responsive refinement belongs to Phase 3B; final visual QA belongs to Phase 3C.

## Verification
Lint, typecheck, Webpack production build, supported/unknown routes, browser desktop/mobile inspection and overflow checks. Asset fidelity can only be verified after real artwork arrives.

## Results
Lint, typecheck and Webpack production build passed. Browser checks at 320/375/768/1024/1280px found no horizontal overflow and confirmed two sections with eleven placeholders. Desktop layout inspected; unknown slug renders Page not found. Screenshot: `/private/tmp/ui-props-phase-3a.png`. Final artwork comparison remains pending extracted assets.
