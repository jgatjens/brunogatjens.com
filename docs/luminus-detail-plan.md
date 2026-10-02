# Luminus Detail

Approved scope: create `/projects/luminus` from the supplied reference and description.

- Preserve the existing shared container, fonts, Header, and Footer.
- Apply a route-scoped #22212C background with light text, icons, separators, and focus outlines.
- Render the supplied description and an accessible visually hidden heading.
- Display luminus-01.png (logo), luminus-02.png (characters), luminus-03.png (video preview), and luminus-04.png (poster) in order.
- Preserve intrinsic image dimensions and transparency; never crop artwork.
- Use full-width artwork with progressively reduced spacing on smaller screens.
- Link the Home Luminus card to the new detail route.
- Keep the video preview static until its destination URL is provided.
- Add no dependencies or animations.

Verification: lint, TypeScript, production build, desktop reference comparison, and overflow checks at 320, 375, 430, 768, and 1024 pixels. Confirm the Home page returns to its light theme.
