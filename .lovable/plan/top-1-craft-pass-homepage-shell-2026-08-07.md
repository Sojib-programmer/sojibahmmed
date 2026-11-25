# Top 1% craft pass — homepage + shell

Reviewed the rendered site at 1280px. The content and SEO layer is strong; the *craft* layer is what's holding it back. Concrete problems found in the render:

- **~600px of dead black space above the hero.** The first screen shows nothing but stars — the headline starts at roughly 620px down. On a laptop the fold is empty. This is the single biggest credibility leak.
- **The announcement bar collides with the navbar.** "SOJIB AHMMED" and the resale.bd banner overlap in the top-left corner.
- **Everything is center-aligned at the same width and rhythm** — eyebrow, headline, sub, sub-sub, buttons, stats. Four stacked paragraphs of decreasing size below the H1 read as filler, not confidence.
- **Stat cards are flat**: near-invisible borders, no dividers, no motion, uniform weight. They look like placeholders.
- **Unmotivated vertical gaps** between newsletter → contact → name chips (400px+ of nothing), while the contact form itself is a plain 3-field stack.
- **Duplicated name lists**: the homepage "Known across the web as" chips and the footer "Also known as" row are the same 7 links, stacked back to back.

## What changes

**1. Fix the shell**
Announcement bar becomes a real stacked layer above a sticky navbar (no overlap, navbar offset follows bar dismissal). Navbar gets a scroll-state: transparent at the top, blurred glass with a hairline border once scrolled.

**2. Own the fold**
Hero collapses to a real first screen — one viewport, no dead space. Asymmetric editorial layout instead of dead-center: oversized headline left-weighted with a tighter tracking scale, a single supporting line (not four), one primary CTA plus one quiet secondary, and the social handles demoted to small monospace links. Add a subtle animated gradient bloom behind the headline layered over the existing star field.

**3. Give the numbers weight**
Stats become a single hairline-divided row with monospace tabular numerals, count-up on scroll into view, and a one-line qualifier each. Fewer, sharper numbers beat four equal boxes.

**4. Section craft pass across the homepage**
Consistent vertical rhythm (one spacing scale, no random 400px voids), numbered section eyebrows, and a repeating layout signature: sticky section label on the left, content on the right on desktop. Ecosystem and blog cards get real hover states (border ignition, subtle lift, arrow shift) instead of static panels. Contact section becomes a two-column layout — the "reach out if you're" list beside the form, not stacked above it.

**5. Motion that reads as intentional, not decorative**
One shared easing curve and stagger token for section reveals, hover, and page transitions. Respect `prefers-reduced-motion` everywhere.

**6. Remove the duplication**
Drop the footer's "Also known as" list; keep the homepage chips as the single surface (all 7 variant routes stay linked, so nothing is lost for SEO). Footer is rebuilt as a proper 3-column sitemap — Sections / Ecosystem / Vision — with the social row and copyright on a hairline baseline.

**7. Detail polish that separates the top 1%**
Selection colour, focus-visible rings on every interactive element, custom scrollbar, hairline `1px` borders at the right opacity for dark UI, text balance on headlines, and a proper 404 that matches the system.

## Scope note

This is a presentation-layer pass. No schema, route, content, or metadata changes — every canonical, JSON-LD block, redirect, and blog record stays exactly as it is. Visual identity stays on the locked direction (pure-black dark, deep blue accent, Space Grotesk, glassmorphism) — this sharpens the execution rather than restyling the brand.

## Technical notes

- Touches: `src/components/AnnouncementBar.tsx`, `Navbar.tsx`, `HeroSection.tsx`, `StorySection.tsx`, `ManifestoSection.tsx`, `EcosystemSection.tsx`, `ProductsSection.tsx`, `FlagshipSection.tsx`, `BlogSection.tsx`, `NewsletterSignup.tsx`, `ContactSection.tsx`, `Footer.tsx`, `src/pages/Index.tsx`, `src/pages/NotFound.tsx`, `src/index.css`, `tailwind.config.ts`.
- New spacing/easing/elevation tokens go in `index.css` + `tailwind.config.ts` as semantic tokens — no hardcoded colour utilities in components.
- Count-up and reveal logic reuses the existing `useScrollAnimation` hook and framer-motion setup; no new dependencies.
- Verification: Playwright screenshots at 390px, 777px (your current viewport) and 1440px before/after, plus a console check.
