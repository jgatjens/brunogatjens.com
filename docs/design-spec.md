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

- heavy shadows outside the glass header
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

The shared navigation panel is a centered, sticky glass surface up to 1280px wide. Its closed state is fully rounded; when a project is open, the panel expands to include the project submenu and uses a 36px radius. The light panel uses white at 88% opacity, and the dark panel uses black at 88% opacity. Apply the supplied glass settings in the supported CSS treatment: Refraction 80, Depth 84, Dispersion 50, Frost 6, and Splay 21. Frost is represented with a 6px backdrop blur and restrained highlights; browser CSS does not expose direct refraction/dispersion controls.

The closed main menu is 72px tall overall in both themes and at every viewport size. The header has an 8px top inset at every viewport size and an 8px horizontal inset on mobile, increasing to 16px at the `md` breakpoint. On mobile, the header uses a 48px avatar and icon-only navigation with 48px rounded targets (44px below 360px). Desktop shows the full “Bruno Gätjens” brand and text navigation. The main links are Home, Work, and About, followed by a pink “Let’s Talk” link and the theme toggle. Work links directly to the first project; project pages show the ordered project submenu inside the same glass panel. Opening and closing the submenu smoothly animates the panel radius and submenu reveal; reduced-motion preferences disable the transition. The header slides out while scrolling down, with a 500ms delay when the downward scroll starts at the top of the page and no delay when already below the top; it reappears immediately on upward scroll or keyboard focus. The submenu stays horizontally scrollable, with mobile arrow controls and the active project kept in view; the first project begins at the start of the row.

The active main-navigation and project links use a pale-blue pill in light mode and a blue pill in dark mode. The 24px moon/sun theme control follows the navigation at every viewport size and saves the selected theme across visits. A saved theme applies site-wide and overrides project-specific themes. Without a saved choice, pages use their existing theme, including Luminus's dark theme.

The homepage “Let’s talk” card sits 64px below the project cards, has 16px rounded corners, inverts its foreground and outline colors with the active theme, and remains transparent with a 2px outline. Its “Let’s talk” heading uses the default Bricolage Grotesque heading font. The “Schedule a Call” button sits 48px below the card. The homepage “Schedule a Call” button uses a #E73266 fill, white 16px Fira Code text, 20px horizontal and 12px vertical padding, a fully rounded shape, and a 20px phone icon in both themes.

The About page content spans the full available page-container width. On desktop, the text and 240px portrait sit in separate columns with an 80px gap; on mobile, they remain stacked with the existing 32px gap.

The site-wide accent color, including highlighted text, accent icons, and keyboard focus indicators, is #E73266 in both themes.

Homepage project filter tags are fully rounded. The active tag uses #22212C text on a #E1EDFF background; inactive tags have a #A7BDDD stroke at 40% opacity and a transparent background.

Inactive main navigation links and unselected homepage filter tags use a #A7BDDD background at 24% opacity on hover. Keyboard focus styling remains available on all items.

The footer contains four icon-and-link social links: LinkedIn, Dribbble, ArtStation, and X. The Info page does not repeat these social links.

Project logo graphics render white on project pages in dark theme. In light theme, the Zonda Live, MoveOn, Envision, and Synapse title logos render as dark monochrome marks; other project logos retain their existing treatment. In dark theme only, SVG illustrations in Problem/Solution, Role & Tools, Research & Insights, Learnings, Challenges and Learnings, and Metrics & Impact sections render white, except the Problem/Solution divider surrounding “VS,” which retains its dark strokes. In light theme, these illustrations retain their original colors; illustrations elsewhere are unchanged.

All elements in project timeline sections render in a light color in dark theme.

Role & Tools chips have no fill in either theme; their borders and text remain visible.

The MoveOn Learnings user-flow illustration uses the supplied SVG artwork. In dark theme, only its black fills and strokes change to white; its other colors remain unchanged.

The Synapse Challenges and Learnings workflow image uses the supplied SVG artwork. In dark theme, only its black fills and strokes change to white; its colored details and gradient remain unchanged.

In light theme, all Luminus gallery images use a #22212C background fill behind transparent areas.

Homepage project cards use 12px rounded corners with 8px gaps, a 24px vertical grid inset, and centered white pill labels using 16px regular text. The desktop grid has three columns; the tablet and mobile breakpoints retain two and one columns respectively. The Synapse card uses the latest supplied trophy illustration and the label “Synapse”.

The About, Luminus, Hookbots, Children's Book, and Character Design page titles use the UI & Props title style: the default bold heading font at 36px, increasing to 48px at the `sm` breakpoint.


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