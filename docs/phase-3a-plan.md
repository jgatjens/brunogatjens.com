# Phase 3A — Static Info Page

## Approved scope
Static Server Components for Info title, supplied two-paragraph biography, circular portrait, and LinkedIn/Dribbble/Behance/X placeholder links. Reuse PageContainer and the root Header/Footer. No dependencies, Motion, SEO expansion, or unrelated changes.

## Files
Modify `src/app/info/page.tsx` and scoped rules in `src/app/globals.css`. Create `src/components/info/InfoContent.tsx`, `src/components/info/SocialLinks.tsx`, and this record. Use the supplied `public/images/avatar-me-info.png`.

## Layout and typography
Retain Bricolage Grotesque headings and Fira Code body/UI per the user's font correction. Desktop at 1024px and above uses title and biography left and portrait right, with social links below. Smaller widths stack title, portrait, biography, and social links in DOM order. Reuse shared section spacing and gutters. Portrait has intrinsic 632×632 dimensions, responsive width capped at 316px, natural height, and circular styling without additional cropping.

## Assumptions
The user supplied `website-info.png` during implementation. Its composition informs the 316px portrait, 48px column gap, 48px title, desktop top spacing and biography line-height at a logical 1280px viewport. Preserve the approved existing Header and heading font. Biography is the exact supplied copy, split into two paragraphs. Social links use platform labels and small decorative SVG icons; reserved-domain placeholder URLs must be replaced before publishing.

## Verification
Run lint, typecheck, and production build. Visually inspect desktop and mobile, test widths 320/375/430/768/1024/1280/1440 and intermediate widths, check no overflow, portrait ratio, content order, accessible links, and shared Header/Footer.

## Results
Lint, typecheck and Webpack production build passed. Browser checks passed at 320/375/430/600/768/900/1024/1280/1440px: no horizontal overflow, loaded square portrait, correct stacked order below 1024px and two-column desktop composition. Desktop and mobile screenshots were inspected. Final desktop capture: `/private/tmp/phase-3a-info.png`. Exact reference matching retains intentional differences in the approved heading font, existing Header/Footer, and placeholder social labels.
