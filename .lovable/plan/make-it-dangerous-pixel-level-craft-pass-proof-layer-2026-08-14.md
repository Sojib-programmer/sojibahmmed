# Make it dangerous: pixel-level craft pass + proof layer

I audited the live homepage at 1280px and 751px, scrolled end to end, and measured the actual gaps. The writing and the ambition are already there. What's leaking authority is **rhythm, alignment, and the total absence of proof**. Right now the page reads as "confident claims in a dark theme." Dangerous means: verifiable, dense, and impossible to skim past.

## What's actually broken (measured, not vibes)

**1. Four different left gutters on one page.** Hero starts at x=81. Products at x=163. Story at x=243. Flagship card at x=245. Contact at x=325. Nothing lines up vertically as you scroll — the eye never locks onto a spine. This is the single biggest tell.

**2. Dead vertical bands of 200-400px.** Between the hero stat row and THE STORY. Between the "ALSO HELD" chips and the 1ai.bd card (~300px of nothing). Between the newsletter card and CONTACT (~250px). The page feels padded out rather than full.

**3. Cards with top-aligned content and empty bottoms.** The cyber.bd featured card is ~220px tall with ~130px of content — a visible hollow. Same on the newsletter card. Cards must fit their content or earn their height.

**4. The flagship "1ai.bd" wordmark is clipped.** The leading `1` is cut off on its left edge by the container — it renders as `⁄ai.bd`. On the flagship. Optical-inset / overflow bug.

**5. "THE ECOSYSTEM" eyebrow appears twice** (products block and flagship block). Duplicate eyebrows read like a copy-paste template.

**6. Zero proof.** 7+ / 20+ / 1K+ / 15+ are unsourced round numbers. No logos, no named outcomes, no entity documents surfaced above the fold, no third-party signal. A skeptical investor or CISO scrolls this and has nothing to verify.

**7. Mobile hero over-scales.** At 751px the H1 renders ~90px and eats the entire first screen; the subhead pushes the CTAs to the fold edge. The `clamp()` upper bound is tuned for desktop drama, not for handhelds.

**8. Contact closes soft.** A bulleted "you should reach out if you're..." list plus a generic 3-field form. No qualification, no response-time commitment, no reason to act now.

## The moves

### A. One spine — kill the gutter drift
Single shared container (`max-w-[1200px]`, one gutter token) applied to hero, story, products, flagship, blog, contact, footer. Every eyebrow, H2, and card edge lands on the same x. Add an optional hairline vertical rule at the spine on desktop so the alignment is *felt*, not just correct.

### B. Compress the rhythm
Section padding collapses to a strict scale: `py-24` desktop / `py-16` mobile between sections, `mt-6` eyebrow-to-heading, `mt-10` heading-to-content. Remove every ad-hoc spacer. Target: ~30% shorter page with more on screen per scroll.

### C. Fix the card geometry
- Cards size to content; no fixed heights leaving hollows.
- cyber.bd featured card: content grid fills the full card width, tagline + 3 capability chips on the baseline row so the bottom is used.
- Newsletter card tightens to its form.
- Flagship: fix the `1ai.bd` clip (padding-left / `overflow-visible` on the wordmark), and drop the second "THE ECOSYSTEM" eyebrow for "THE FLAGSHIP".

### D. The proof layer (this is what makes it dangerous)
- **Sourced stats.** Each hero stat gets a one-line provenance under it (e.g. "10,000+ founders — companysetup.io, 80+ countries"), tied to something real. Round numbers with a source beat big numbers without one.
- **Receipts strip** directly under the hero: the registered-entity facts (US LLC New Mexico + BD Private Ltd, filing/cert refs) surfaced as a compact hairline row instead of buried mid-page. Legal existence is the strongest trust signal on the page and it's currently at scroll-depth 3.
- **Named build log.** A dense, mono, dated list of shipped systems — date, system, one-line outcome. Operators trust changelogs, not adjectives.
- **Live surface.** cyber.bd, ticru, companysetup.io, resale.bd, 1ai.bd shown as a single status grid with real states (live / building / held) rather than three separate visual treatments.

### E. Close hard
Contact becomes a two-column: left = qualification ("what to send me" — 3 tight lines), right = form with an explicit response commitment. One primary action, mono email as a secondary. Remove the bullet list.

### F. Mobile
Retune the fluid scale so the 700-820px band lands the H1 around 44-52px, subhead at 17px/1.6, and both CTAs plus the first stat row visible on first screen.

## Deliberately not doing
- No new color story, no font change, no purple/gradient AI-slop. The dark + deep-blue + Space Grotesk system stays.
- No fabricated testimonials, client logos, or press mentions. Every number that ships must be one you can defend — I'll flag anything I can't source from the project and ask you for it.
- No backend, schema, or route changes. Presentation, layout, and content composition only.

## Technical notes
- Shared `<Section>` / container primitive in `src/components/` replacing per-section ad-hoc `max-w`/`px` classes across `HeroSection`, `StorySection`, `ProductsSection`, `FlagshipSection`, `BlogSection`, `ContactSection`, `Footer`.
- Spacing and the fluid type scale move to tokens in `src/index.css` / `tailwind.config.ts`; no hardcoded color utilities.
- Stat provenance and the build-log entries are static content in `src/data/` — no new tables.
- Verification: Playwright element screenshots per section at 1280 / 1024 / 820 / 751 / 390, plus a left-edge alignment probe asserting every section's content box starts at the same x.

## Open question
The build log and sourced stats need facts only you have — dates and one-line outcomes for the shipped systems. I can ship the layout with the numbers already on the site and leave clearly marked slots for the rest, or wait for your list. Say which.
