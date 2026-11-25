# Identity schema, typographic polish, alias layout, pillar pages

## 1. Person structured data with aliases

The homepage Person JSON-LD already carries `alternateName`, but it is a hardcoded English-only list and it is not repeated on the alias routes in a consistent form.

- Move the identity graph into one shared source (`src/lib/identity.ts`): canonical name, full alias list (English + Bangla — সজিব আহমেদ, মোঃ সজিব, সজীব আহম্মেদ, etc.), `sameAs` profiles, `jobTitle`, `knowsAbout`, `nationality`, affiliations.
- Homepage, all 7 alias pages, `/about`, and `/ecosystem` emit the same Person node with `mainEntityOfPage` pointing at their own URL, so each route self-references while the alias set stays identical.
- Each alias page also gets a `ProfilePage` wrapper node linking `about` → the Person, which is what Google reads for "also known as" resolution.
- No route, canonical, or sitemap changes.

## 2. Responsive typography and rhythm

- Add a fluid type scale using `clamp()` tokens in `index.css` (display, h1, h2, lead, body, mono-eyebrow) and expose them as Tailwind font-size utilities, so the hero headline scales continuously from 390px to 1920px instead of jumping at `md:`.
- Tighten tracking as size grows (display gets negative tracking, body stays neutral), set explicit line-heights per step, and apply `text-wrap: balance` to headings / `pretty` to lead paragraphs.
- Normalise section vertical rhythm to one spacing scale so hero → story → manifesto → products → blog → newsletter → contact share the same top/bottom cadence at every breakpoint.
- Hero: cap measure at ~62ch, fix the stat row to wrap 2×2 on mobile with hairline dividers that don't collapse.

## 3. Alias pill/card layout

- New `AliasGrid` component driven by the existing `name_variants` data, replacing both the homepage chip row and the ad-hoc list on alias pages.
- Each alias renders as a card-pill: primary label, Bangla script line beneath it, and a small arrow affordance — uniform height, consistent gap, real hover state (border ignition + lift), focus-visible ring.
- Layout: single column on mobile, 2 columns at sm, 3 at lg, so nothing is ever orphaned on a row.
- `AuthorBioCard` and the alias pages' "Other profile pages" block both reuse it, with a `compact` variant for inline use.

## 4. Fix the "Also known as" section

- One section on the homepage, retitled to a plain human heading ("Also known as") with a one-line explanatory sentence so it reads as context, not keyword filler.
- Replace the run-together `·`-joined name string on alias pages with the same `AliasGrid` cards, and drop the duplicate "Also known as" text block.
- Add proper section padding, a hairline top rule, and a `max-w` container so it no longer looks cramped or broken between the contact section and footer.

## 5. Pillar pages

Three hub pages that aggregate existing posts and rank for the head terms, each with `CollectionPage` + `BreadcrumbList` schema, an intro thesis, a linked table of contents, and cards pulling live posts from the database by category:

- `/pillar/ai-in-bangladesh` — AI, agents, assistant.bd, LLM posts.
- `/pillar/digital-commerce-bangladesh` — resale.bd, merchant.bd, dropshop.bd, 1shop.bd, checkout and matching posts.
- `/pillar/cybersecurity-and-trust` — cyber.bd, kyc.bd, trust infrastructure posts.

Each pillar links down to its articles and up to `/ecosystem`; articles get a "part of" link back to their pillar. Added to `public/sitemap-pages.xml` and the footer.

## 6. New articles: dropshop.bd and 1shop.bd

Two long-form posts inserted into the blog database (not hardcoded pages), matching the existing ecosystem-post template — problem, how it works, who it serves, integration with the wider stack, market opportunity, FAQ — with bilingual keyword arrays:

- **dropshop.bd** — dropshipping infrastructure for Bangladesh: supplier catalogue, one-click storefront, fulfilment and COD reconciliation, ticrupay settlement, kyc.bd seller verification.
- **1shop.bd** — one-link commerce for social sellers: single storefront link for Facebook/WhatsApp sellers, inventory, checkout, delivery and payments in one flow.

Both are cross-linked from the commerce pillar, `/ecosystem`, and each other.

## Technical notes

- New: `src/lib/identity.ts`, `src/components/AliasGrid.tsx`, `src/components/PersonSchema.tsx`, `src/pages/pillars/*.tsx`.
- Edited: `src/index.css`, `tailwind.config.ts`, `src/components/HeroSection.tsx`, `src/pages/Index.tsx`, `src/pages/variants/NameVariantPage.tsx`, `src/components/AuthorBioCard.tsx`, `src/components/Footer.tsx`, `src/App.tsx`, `public/sitemap-pages.xml`.
- Blog posts go in via a database insert; `keywords` array carries Bangla + English terms.
- Visual identity unchanged (pure black, deep blue accent, Space Grotesk, glassmorphism) — this is scale/rhythm/schema work, not a restyle.
- Verification: Playwright screenshots at 390 / 777 / 1440px plus a JSON-LD dump per route to confirm alias parity and self-referencing canonicals.
