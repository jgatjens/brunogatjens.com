# Design Specification

## 1. Purpose

This document defines the visual and interaction rules for Bruno Gätjens' portfolio website.

The implementation should stay visually faithful to the provided Figma design and reference screenshots.

The current design is desktop-first. Responsive behavior should preserve the same hierarchy and visual character rather than simply shrinking the desktop layout.

When the design is ambiguous, do not invent major visual behavior without documenting the decision.

---

## 2. Visual Direction

The website should feel:

- minimal
- editorial
- clean
- calm
- professional
- design-focused
- image-first
- spacious

The artwork and portfolio work should be the main visual focus.

Avoid adding unnecessary UI decoration.

Do not introduce visual styles that are not supported by the design, such as:

- heavy shadows
- glassmorphism
- gradients
- excessive rounded cards
- strong 3D effects
- overly animated transitions

---

## 3. Typography

The site uses two main typefaces.

### Headings / Display

Use:

Headings
Noto Serif
Use tailwind configuration of serif.

Body / UI
Fira Code
Use tailwind configuration of sans.

Customize tailwind tokesn for COLORS.


## 4. Known Design Decisions

Portfolio owner:
Bruno Gätjens

Profession:
UX/UI Designer / Illustrator

Heading font:
Noto Serif

Body / UI font:
Fira Code

Main pages:
Home
Info
Project Detail

Home grid desktop:
3 columns

Home grid tablet:
2 columns

Home grid mobile:
1 column

Project card hover:
Subtle animation

Project filter animation:
Desired

Contact CTA:
Email

Social links:
Text links with placeholder URLs

Responsive design:
Will be designed from the desktop system

Design priority:
Portfolio artwork should remain the visual focus


## 5. Design Ambiguity Rule

If a design decision is not defined by the Figma or this specification:
1. do not invent a large visual change
2. preserve the existing visual language
3. prefer the simpler solution
4. document the ambiguity
5. request clarification when the decision could materially change the design

OK to infer:
responsive spacing
reasonable text wrapping
grid breakpoint

Needs clarification:
completely new navigation
large animations
new sections
new visual effects
changing project composition