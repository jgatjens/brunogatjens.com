# Phase 2C — Functional Project Filtering

## Approved scope
Add local category filtering with ALL, CASE STUDY, BRAND, and UI/PROPS. Preserve project order and source data. No animation, persistence, URL state, backend, dependencies, or detail-page work.

## Implementation
Home stays a Server Component and passes projects and category labels to ProjectFilter, the only new client boundary. It imports the reusable ProjectGrid and ProjectCard, which remain stateless components participating in the client graph. Replace the static preview component.

State is `"all" | ProjectCategory`, initially all. Derive the subset with array filter and category includes, supporting multiple categories without mutation. Reuse existing active styling, add native buttons with aria-pressed, keyboard focus, and a polite result-count status. Preserve wrapping controls and a minimum 24px target height. Empty categories display “No projects in this category yet.” Focus stays on the activated button.

## Files
Create ProjectFilter.tsx and this plan. Modify Home and relevant global styles; remove the replaced ProjectFilterPreview.tsx. Preserve grid/card rendering, registry, metadata, and other pages.

## Verification
Run lint, typecheck, and production build. Verify all six projects under ALL, Move On/Luminus under CASE STUDY, Zonda Live/Synapse under BRAND, and Envision/UI / Props under UI/PROPS. Check keyboard activation, active state, focus retention, result status, repeat selection, restored order, multi-category and empty-category cases, and source-data preservation. Inspect 320/390/768/1280px without overflow. No existing automated test suite.

## Future work
Phase 2D may refine spacing and touch targets. Stable slug keys and the single grid rendering path support later Motion without adding animation abstractions now. Temporary classifications remain user-approved provisional data.


## Verification results
- Lint and typecheck passed.
- Production build passed with `npm run build -- --webpack`. Home remains statically prerendered. Default Turbopack builds failed (including the elevated retry) because worker port binding returned EPERM; the default build script was preserved.
- Browser category checks passed: all six under ALL; Move On/Luminus under CASE STUDY; Zonda Live/Synapse under BRAND; Envision/UI / Props under UI/PROPS. Returning to ALL restored original order.
- Native Enter/Space activation and Tab/Shift+Tab order passed. Focus remains on the activated button, with a solid visible focus outline and exactly one aria-pressed=true control. Status text updates from six to two projects. Screen-reader speech output was not directly tested.
- Browser layout checks passed at 320, 390, 768, and 1280px: no horizontal overflow, wrapped controls, minimum button height 24px, and 1/2/3-column grid progression.
- Actual component rendering checks with temporary controlled state passed for immutable inputs, category counts, multiple category membership, and empty results with a zero-count status. No test dependency or persistent test framework was added.
- Filter selection leaves the URL unchanged. No animation, persistence, detail links, or source-data modifications were added.
- Screenshot evidence: /private/tmp/phase-2c-filter-preview.png (BRAND selected).
