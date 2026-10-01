# Implementation Plan

## 1. Purpose

This document defines the implementation phases for Bruno Gätjens' portfolio website.

The project should be built incrementally.

Each phase should follow this workflow:

PLAN
→ IMPLEMENT
→ REVIEW
→ VERIFY

Do not build the entire website in one pass.

Each phase should be independently reviewable and testable.

---

## 2. General Rules

Before implementing any phase:

1. Read `docs/architecture.md`
2. Read `docs/design-spec.md`
3. Read `docs/implementation-plan.md`
4. Read `AGENTS.md`
5. Review the current repository state
6. Produce a short implementation plan before modifying code

During implementation:

- only modify files required for the current phase
- do not refactor unrelated code
- do not introduce speculative abstractions
- do not add dependencies unless justified
- do not invent product content
- do not redesign the Figma
- preserve accessibility
- preserve responsive behavior
- preserve project artwork quality
- prefer Server Components unless interaction requires a Client Component

After implementation:

- run typecheck
- run lint
- run relevant tests
- run build when appropriate
- visually verify UI changes in the browser

---

# Phase 1 — Project Foundation

## Goal

Create a clean Next.js foundation and establish the shared visual system.

## Scope

Implement:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- ESLint
- global styles
- Noto Serif
- Fira Code
- design tokens
- shared page container
- shared Header
- shared Footer
- base routes
- initial metadata
- static asset structure

Do not implement the full Home, Info, or Project Detail designs yet.

---

## Project Delivery Order

Use this order:

Phase 1 — Foundation
Phase 2 — Home
Phase 3 — Info
Phase 4 — First Project Detail
Phase 5 — Remaining Projects
Phase 6 — Motion and Interaction
Phase 7 — Accessibility and SEO
Phase 8 — Testing
Phase 9 — Performance and Visual QA
Phase 10 — Deployment

FOR EACH PHASE LETS CREATE A MARKDOWN FILE WITH THE PLANING.