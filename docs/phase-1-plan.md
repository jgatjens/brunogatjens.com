# Phase 1 — Project Foundation

## Approved scope
Next.js, TypeScript, App Router, Tailwind CSS, ESLint, shared layout, fonts, tokens, base routes, metadata, and static asset folders. No full page designs, animations, backend, or deployment.

## Setup and dependencies
Use npm and src/. Next.js/React provide routing and Server Components; TypeScript and type definitions provide strict checks; Tailwind/PostCSS provide styling; ESLint with Next.js rules provides linting. No additional libraries.

## Shared layout and routes
Root layout owns Header, Footer, a skip link, and the main landmark. PageContainer owns maximum width and responsive gutters. Home and Info contain only scaffold headings. The reserved project route returns 404 until project data exists. All components remain Server Components.

## Fonts and tokens
Use next/font/google for Noto Serif (serif) and Fira Code (sans per specification). CSS theme tokens centralize colors, gutters, section spacing, and container width. Neutral colors, 80rem maximum width, fluid gutters, and spacing are provisional until the Figma reference is available. Framework typography and spacing scales are reused.

## Responsive behavior
Support 320px upward with fluid gutters and wrapping navigation/footer. No new mobile-menu interaction. Later Home implementation will use 1/2/3 columns; the grid is outside this phase.

## Missing design/content
Header alignment, footer composition, font weights, and exact tokens await Figma. Footer uses only the supplied identity and profession. Email and social links await actual address, labels, and approved destinations. No invented project content or artwork. Git initialization and deployment are outside this implementation.

## Verification
Run typecheck, lint, production build, route/404 checks, and browser review at 320px, mobile, tablet, and desktop. Check keyboard focus, skip link, fonts, landmarks, wrapping, and overflow. No existing automated test suite; adding a test framework is deferred to the testing phase.

## Implementation and verification results
- Installed Next.js 16.3.8 and required dependencies with an npm lockfile; install audit reported zero vulnerabilities.
- Typecheck passed; ESLint passed without warnings; production build passed.
- Home and Info are statically generated. The reserved project route is dynamic and returns the shared not-found page for every slug until project data is supplied.
- Browser navigation to Info and return-home navigation passed. Unknown project displayed the not-found page.
- Noto Serif and Fira Code were confirmed in computed styles.
- Keyboard Tab reaches the skip link; Enter transfers focus to main-content.
- Browser layout checks at 320, 390, 768, and 1440px found no horizontal overflow. Header/footer remain readable and wrap at narrow widths.
- No automated test suite exists; no test framework was added for the static foundation.
- Build requires Google Fonts network access. Set the Turbopack root explicitly to this project to avoid resolving the unrelated home-directory lockfile.
- Existing specifications and AGENTS.md were preserved. No Git initialization, full page implementation, or deployment performed.
