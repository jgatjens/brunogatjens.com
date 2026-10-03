# Agent Rules

Read before making changes:

- docs/architecture.md
- docs/design-spec.md
- docs/responsive-spec.md
- docs/implementation-plan.md

## General Rules

- Do not implement outside the current phase.
- Do not refactor unrelated code.
- Do not add dependencies without justification.
- Prefer React Server Components unless interaction requires a Client Component.
- Do not invent content or design decisions.
- Preserve artwork aspect ratios.
- Follow the responsive specification.
- Use semantic HTML.
- Keep accessibility in mind.
- Run verification before declaring a task complete.

## Workflow

For each phase:

1. Plan
2. Wait for approval
3. Implement
4. Review
5. Verify

When asked to plan, do not modify files.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
