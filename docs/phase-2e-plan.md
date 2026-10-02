# Phase 2E — Home Visual QA

## Approved plan
Compare Home at 1280px with the supplied desktop reference. Correct measured differences in section position, header/filter typography, and footer spacing. Preserve the matching 1040px grid width, 120px margins, square artwork, and zero gaps.

## Baseline
Grid started at y=307 versus reference approximately y=296. Intro and filters were slightly low. Header identity/navigation used 14px text versus approximately 16px in the reference, with content extending slightly farther outward. Desktop filters were 26px tall and labels narrower than the reference. Footer was approximately 30px too low.

## Corrections
Use named tokens to reduce desktop intro top spacing by 5px, remove 4px paragraph separation, reduce intro bottom spacing by 4px, and increase desktop filters to 28px with 17px text. These changes target an 11px upward grid correction. Header desktop text becomes 16px with a 12px inner inset. Reduce capped CTA bottom padding by 20px to align the Footer after upstream corrections.

## Intentional differences
Retain the user-approved Bricolage Grotesque headings, additional Home link, no active Projects underline, omitted company-name field, and readable darker purple accent. CTA height remains content-driven rather than restoring blank company-name space. Supplied artwork is not altered. Decorative blur details are low priority.

## Scope and verification
Modify global styles and this document only unless comparison reveals a necessary scoped correction. No features, dependencies, animations, SEO, or unrelated refactors. Repeat 1280px measurements and screenshots, check 320/375/430/768/1024px and filtering, then run lint, typecheck, and production build with the supported Webpack fallback.

## Verified results
At 1280px, filters begin at y=244 and the grid at y=296. Grid width remains 1040px with square artwork and zero gaps. The CTA card begins at approximately y=1221; Footer content begins at approximately y=1889. Remaining reference differences are intentional as described above or minor decorative details.

Responsive checks passed at 320, 375, 430, 768, and 1024px: no horizontal page overflow, undistorted square artwork, one/two/three columns at the intended breakpoints, and usable filter controls. BRAND filtering showed two projects at each width; ALL restored all six.

`npm run lint`, `npm run typecheck`, and `npm run build -- --webpack` passed. Final desktop screenshot: `/private/tmp/phase-2e-desktop.png`.
