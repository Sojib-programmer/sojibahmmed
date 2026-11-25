# Remove InboxNumber, wire /vision redirects, verify metadata

## 1. Remove inboxnumber.com everywhere

Delete the product and every mention of it:

- Delete `src/pages/InboxNumber.tsx`; drop its import and `/inboxnumber` route from `src/App.tsx`.
- Remove the "InboxNumber" item from `src/components/Navbar.tsx` product links and from `src/components/ProductsSection.tsx`.
- Strip the brand from copy and structured data: `src/pages/Index.tsx` (Person description + `Brand` entry in JSON-LD), `src/pages/variants/variantsData.ts` (2 mentions), `src/pages/MidnightLogic.tsx` (security bullet), `src/data/ecosystem.ts`, `public/llms.txt` (summary line + link entry), `index.html` (summary meta, noscript paragraph, noscript link).
- Remove both `/inboxnumber` URLs from `public/sitemap-pages.xml` (the page and the `inboxnumber-virtual-phone-numbers-for-the-world` blog URL).
- Remove the InboxNumber blog post row from the `blog_posts` table so the site no longer serves it.
- Add `/inboxnumber` and `/blog/inboxnumber-virtual-phone-numbers-for-the-world` to the redirect map pointing at `/ecosystem`, so old inbound links land somewhere useful instead of a 404.

## 2. Redirects from old sojibahmmed URLs to /vision/*

Extend the existing `REDIRECTS` map in `src/App.tsx` (client-side `<Navigate replace>`, same pattern as the name-variant redirects) with the migrated project's original top-level paths that do not collide with the main site:

- `/en` → `/vision/en`, `/bn` → `/vision/bn`
- `/industries` → `/vision/industries`, plus a wildcard route `/industries/:slug` → `/vision/industries/:slug`
- `/ecosystem/super|layers|govtech|storage|ticrupay|deshi|future|infrastructure|interconnection` → the matching `/vision/ecosystem/*` page
- `/field-notes` → `/vision/blog`

Colliding paths (`/`, `/about`, `/blog`, `/ecosystem`) stay owned by the main site — no redirect.

## 3. Verify and fix canonical / OG / JSON-LD across /vision and /blog

Confirmed issues to fix:

- `VisionLayout` emits a canonical for every `/vision/*` route while several child pages emit their own. `<link>` tags do not dedupe, so those routes ship two canonicals. Fix: remove the canonical from `VisionLayout` and make each child route own exactly one self-referencing canonical (add one where a child currently has none: `Index`, `About`, `Ecosystem`, `Industries`, `IndustrySlug`, `En`, `Bn`, the 9 `eco/*` pages via `EcosystemExplainer`).
- `src/pages/vision/BlogPostPage.tsx` sets `canonical` to `/blog/<slug>` (the DB copy) but `og:url` to `/vision/blog/<slug>`. Mismatched signals mean crawlers attribute the page to a different URL than the OG tags describe. Fix: make `canonical` and `og:url` both point at the canonical `/blog/<slug>`, and keep `Article` JSON-LD `mainEntityOfPage`/`url` on the same URL.
- Add missing `og:type`, `og:title`, `og:description` and `twitter:card` on the `/vision` pages that only set `og:url`.
- Audit `/blog/:slug` (`src/pages/BlogPost.tsx`) and the `og-meta` edge function so the crawler-served tags for the 16 migrated essays match the in-app Helmet tags and the `Article` JSON-LD.
- Add the `/vision/*` routes and the 5 category pages to `public/sitemap-pages.xml` where missing.

## 4. Clear "Vision" entry in the main navigation

- `src/components/Navbar.tsx`: promote Vision out of the "Products" list into its own labelled group with two entries — "Vision" (`/vision`) and "Field Notes" (`/vision/blog`) — so it reads as a section, not a product.
- `src/components/Footer.tsx`: add the same two links (currently the footer has no Vision link at all).

## 5. Test /vision/blog search, tags, categories, pagination

- `BlogIndex` currently filters by `?q=` and `?tag=` but renders every match with no pagination. Add pagination (9 posts per page) driven by a `?page=` param, with prev/next controls hidden at the boundaries, preserving `q` and `tag`; apply the same to `BlogCategory`.
- Drive the running app with Playwright to verify: empty search state, a query that matches, a query that matches nothing, each tag filter, all 5 category pages, page 2 navigation, and that `q`/`tag`/`page` survive reload. Capture screenshots and check the console for errors.

## Technical notes

- All redirects are client-side React Router `Navigate replace` (Lovable hosting serves the SPA fallback; no server 301s available). Existing links keep working, and the canonical tag on the destination consolidates ranking signals.
- Removing the InboxNumber blog row is a data change against `blog_posts`; the sitemap edge function output follows automatically.
