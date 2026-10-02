# Phase 3C — Project Detail Visual QA

## Approved scope
Compare `/projects/ui-props` with website-project-detail.png at logical 1280px width. Refine measured typography, prop scale, group spacing and plant presentation. Preserve approved fonts, navigation, image order and responsive columns. No features, dependencies, SEO or unrelated refactors.

## Baseline and findings
The 1040px artwork width and 120px desktop gutters already matched. Title started at y=161. Section headings were 24px with 24px left padding, smaller than the reference's approximately 36px headings and 40px inset. Props occupied 242px cells versus approximately 212px in the reference. Every group used a 64px gap, missing the longer pause before icon exploration and shorter relationship between environments and plants. Green plants were distributed across the entire container rather than forming a centered supporting row. Transparent image padding was considered separately from CSS spacing.

## Refinements
Use page-specific 80px desktop top padding, moving title to y=145. Section headings become 36px with 40px left inset on desktop. Prop columns use 64px desktop gaps, yielding 212px cells. Keep ordinary group gaps at 64px; use 128px before the first icon sheet and 32px before plant groups, with responsive token scaling. Center green plants in a 704px maximum-width row, retaining their proportional intrinsic-size caps and bottom alignment. Keep snow plants in six desktop columns. All spacing remains in normal flow without negative margins.

## Intentional differences
Retain Bricolage Grotesque instead of reference serif headings, Home/Info/Resume navigation without a back arrow or Projects link, omitted Role & Tools, and approved character filename order beginning with fox. Introduction and external project links remain absent pending approved content; no artificial blank space substitutes for them. Extracted individual artwork may differ slightly from the original composite assets. Exact page height therefore differs from the reference.

## Verification
Browser checks at 320/375/430/600/768/900/1024/1280/1440 confirmed expected columns, proportional artwork and no horizontal overflow. Desktop top, green plants, characters/Footer and 320px top were visually inspected; all 33 gallery assets loaded after scrolling. Final lint, typecheck and Webpack production build passed. Captures: `/private/tmp/phase-3c-desktop.png` and `/private/tmp/phase-3c-plants.png`. Prior baseline captures are recorded in Phase 3B.
