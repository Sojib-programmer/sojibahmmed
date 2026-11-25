# Migrate the `sojibahmmed` project into `/vision/*`

## Current state (verified)

- `src/pages/vision/` already contains 18 ported files (Index, About, En, Bn, Industries, IndustrySlug, Ecosystem, EcosystemExplainer, VisionLayout, `sites.ts`, `vision.css`, and 9 `eco/*` pages).
- `src/App.tsx` registers **no** `/vision` route. The entire vision section is currently unreachable dead code.
- The source project is TanStack Start (file-based routes, SSR head config). It has 19 routes, including a blog section that is **not** present in the local port: `blog.index`, `blog.$slug`, and 5 category routes (`ai`, `ecommerce`, `leadership`, `matching`, `recommendation`), backed by hardcoded essays in `src/lib/blog.ts` + `src/lib/blog-essays.ts`.
- Local `blog_posts` table already has `slug, title, excerpt, content, category, keywords[], cover_image, published_at` — enough to hold the essays.

## 1. Wire up the existing vision section

Add a nested route block to `src/App.tsx` using `VisionLayout` as the layout element:

```text
/vision                      -> vision/Index
/vision/about                -> vision/About
/vision/en                   -> vision/En
/vision/bn                   -> vision/Bn
/vision/industries           -> vision/Industries
/vision/industries/:slug     -> vision/IndustrySlug
/vision/ecosystem            -> vision/Ecosystem
/vision/ecosystem/super | layers | govtech | storage | ticrupay
        | deshi | future | infrastructure | interconnection
```

Nested `<Route element={<VisionLayout />}>` so the vision header/footer and `vision.css` scope apply, and the main site's `Navbar`/`Footer` stay out.

Fix any remaining broken relative imports in `vision/eco/*` (the `EcosystemExplainer` path class of bug) and typecheck the whole section.

## 2. Port the blog section to `/vision/blog`

New files:

- `src/pages/vision/blog.ts` — port of `lib/blog.ts` + `lib/blog-essays.ts`: `BlogPost` type, all essays, `categories`, `allTags`, `getCategory`, `postsForCategory`, `getPost`. Content copied verbatim.
- `src/pages/vision/BlogIndex.tsx` — search + tag-filter list. TanStack `validateSearch`/`useNavigate` replaced with `useSearchParams` (`?q=`, `?tag=`), same UI and card styling.
- `src/pages/vision/BlogPost.tsx` — single essay: sections, `lang` attribute, per-post accent, prev/next, category backlink.
- `src/pages/vision/BlogCategory.tsx` — port of `CategoryPage.tsx`, driven by a `:category` param.

Routes (category routes declared before `:slug` so they win):

```text
/vision/blog                 -> BlogIndex
/vision/blog/ai | ecommerce | recommendation | matching | leadership -> BlogCategory
/vision/blog/:slug           -> BlogPost
```

Per-page `Helmet` blocks replace the TanStack `head()` config: title, description, canonical under `https://sojibahmmed.com/vision/...`, `og:*`, `twitter:*`, plus `BlogPosting` JSON-LD per essay. The stale `identitysphere-core.lovable.app` canonicals in the source are dropped.

## 3. Also publish the essays to the main DB blog

Insert every essay into `blog_posts` (upsert on `slug`) so they surface in the main `/blog` list and get the existing dynamic OG/meta treatment:

- `content` = essay sections flattened to markdown (`## heading` + paragraphs).
- `category` = source tag (AI, Recommendation, Matching Tech, E-commerce, Technology, Leadership).
- `published_at` = the essay's own date.
- `keywords` = bilingual (Bangla + English) terms per essay, matching the pattern used for the resale.bd posts.
- Slugs prefixed to avoid collision with existing posts only where a clash exists.

The `/vision/blog` category pages stay static and link to the canonical DB post at `/blog/<slug>` where a DB twin exists, so there is one canonical URL per essay and no duplicate-content penalty.

## 4. Discovery

- Add the `/vision/*` URLs and the new blog URLs to `public/sitemap-pages.xml` (no `lastmod` — there is no authoritative per-page timestamp).
- Add a single "Vision" entry to the main `Navbar` dropdown and the footer so `/vision` is crawlable from the main site.

## Out of scope

- No change to the main homepage, name-variant pages, `/ecosystem`, or existing product pages.
- No new images; the vision WebP assets already sit in `public/vision/ecosystem/`.
- No SSR — head tags stay client-side via Helmet, with the existing `og-meta` edge function covering crawlers for `/blog/*`.

## Technical notes

- TanStack → React Router conversions: `createFileRoute` removed, `Link to="/x/$slug" params={...}` becomes `Link to={`/vision/blog/${slug}`}`, `Route.useSearch()` becomes `useSearchParams`, `head()` becomes `<Helmet>`.
- Source `styles.css` tokens are not imported globally; vision pages keep their scoped `vision.css` plus literal hex values already used in the existing port, so the main dark design system is untouched.
- Essay text is long-form; `blog.ts` will land around 700-900 lines of pure data.
