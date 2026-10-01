# Architecture

## Project Overview

This is a portfolio website for Bruno Gätjens, a UX/UI Designer and Illustrator.

The website is based on an existing Figma desktop design and will be implemented as a responsive, accessible, performant Next.js application.

The project is also being used to practice AI-assisted and agentic development workflows.

The architecture should stay simple and avoid unnecessary backend complexity.

---

## Tech Stack

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- React Server Components by default
- Next.js Image
- Vercel for deployment

Add Motion for React only when animation work begins.

Do not add extra libraries unless there is a clear reason.

---

## Main Architecture Principles

### Keep it simple

This is a static portfolio.

Do not add:

- database
- authentication
- API layer
- CMS
- ORM
- global state management

unless future requirements explicitly need them.

Prefer static content and static generation.

### Server Components by default

Use React Server Components unless a component requires browser interaction.

Examples that can stay Server Components:

- Header
- Footer
- project content
- static sections
- galleries
- project metadata

Examples that may require Client Components:

- project filters
- animated project grid
- mobile menu
- Motion interactions

Do not add `"use client"` to an entire page when only one small component needs it.

---

## Routes

Use Next.js App Router.

Main routes:

```text
/
├── /info
└── /projects/[slug]