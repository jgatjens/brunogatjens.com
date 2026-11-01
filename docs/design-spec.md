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

### Header and color theme

On mobile, the header uses a 48px avatar and icon-only navigation with 48px rounded targets (44px below 360px), 24px gaps, and a pale-blue active pill. The desktop header uses a 32px avatar and the full “Bruno Gätjens” brand, with text navigation, a pale-blue active pill, 24px gaps between links and the theme toggle, and 130px side insets within a 1280px frame. The Info route is labeled “About” in the header. A theme toggle follows the navigation at every viewport size. It shows a moon in light mode and a sun in dark mode, and saves the selected theme across visits. A saved theme applies site-wide and overrides project-specific themes. Without a saved choice, pages use their existing theme, including Luminus's dark theme.

The homepage “Let’s talk” card sits 64px below the project cards, has 16px rounded corners, inverts its foreground and outline colors with the active theme, and remains transparent with a 2px outline. The “Schedule a Call” button is fully rounded, uses a #E73266 fill with white text in light mode and a light fill with dark text in dark mode. Its hover fill is #E73266 in both themes.

A site-wide floating “Schedule a Call” link stays fixed 24px above the viewport bottom and uses the homepage Calendly URL. On the homepage it hides while the in-page “Schedule a Call” link is visible, and returns when that link leaves view. It uses a #E73266 pill with a phone icon inside a #F8FAFD rounded container.

The site-wide accent color, including highlighted text, accent icons, and keyboard focus indicators, is #E73266 in both themes.

Homepage project filter tags are fully rounded. The active tag uses #22212C text on a #E1EDFF background; inactive tags have a #CDCDCD stroke and transparent background.

Main navigation links and homepage filter tags use a #E8ECF3 background on hover and keyboard focus.

The footer contains four icon-and-link social links: LinkedIn, Dribbble, ArtStation, and X. The Info page does not repeat these social links.

Project logo graphics render white on project pages. In dark theme only, SVG illustrations in Problem/Solution, Role & Tools, Research & Insights, Learnings, Challenges and Learnings, and Metrics & Impact sections render white, except the Problem/Solution divider surrounding “VS,” which retains its dark strokes. In light theme, these illustrations retain their original colors; illustrations elsewhere are unchanged.

All elements in project timeline sections render in a light color in dark theme.

Role & Tools chips have no fill in either theme; their borders and text remain visible.

The MoveOn Learnings user-flow illustration uses the supplied SVG artwork. In dark theme, only its black fills and strokes change to white; its other colors remain unchanged.

The Synapse Challenges and Learnings workflow image uses the supplied SVG artwork. In dark theme, only its black fills and strokes change to white; its colored details and gradient remain unchanged.

In light theme, all Luminus gallery images use a #22212C background fill behind transparent areas.

Homepage project cards use 12px rounded corners with 8px gaps, a 24px vertical grid inset, and centered white pill labels using 16px regular text. The desktop grid has three columns; the tablet and mobile breakpoints retain two and one columns respectively. The Synapse card uses its Figma thumbnail and the label “Synapse”.


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