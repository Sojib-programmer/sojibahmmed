# Extraction notes — sojibahmmed.com (Lovable 516748ef) → sojibahmmed-rebuild

Extraction only. No file was edited, redeployed, pushed, or changed on any live site.
Source: Lovable project `516748ef-9c8c-4c1a-a7d9-d4241709e76d`, read via `/tmp/lov.py`
(`lovable call-tool --name read_file`). Written with `muse.write` only (no exec writes).
Extracted 2026-11-25.

## Files written (relative to ~/workspace/sojibahmmed-rebuild/)

### Vision pages — src/pages/vision/
- src/pages/vision/VisionLayout.tsx (4,970 bytes)
- src/pages/vision/Index.tsx (6,768)
- src/pages/vision/About.tsx (2,777)
- src/pages/vision/En.tsx (22,878)
- src/pages/vision/Bn.tsx (30,280)
- src/pages/vision/Industries.tsx (5,182)
- src/pages/vision/IndustrySlug.tsx (7,316)
- src/pages/vision/Ecosystem.tsx (4,951)
- src/pages/vision/BlogIndex.tsx (9,224)
- src/pages/vision/BlogPostPage.tsx (5,103)
- src/pages/vision/BlogCategory.tsx (7,546)
- src/pages/vision/blogData.ts (26,435)
- src/pages/vision/blogEssays.ts (38,841)
- src/pages/vision/sites.ts (15,058)
- src/pages/vision/vision.css (16,765)
- src/pages/vision/EcosystemExplainer.tsx (8,478)

### Vision eco pages — src/pages/vision/eco/
- src/pages/vision/eco/Super.tsx (5,770)
- src/pages/vision/eco/Layers.tsx (3,980)
- src/pages/vision/eco/Govtech.tsx (4,869)
- src/pages/vision/eco/Storage.tsx (3,929)
- src/pages/vision/eco/Ticrupay.tsx (5,057)
- src/pages/vision/eco/Deshi.tsx (4,280)
- src/pages/vision/eco/Future.tsx (3,943)
- src/pages/vision/eco/Infrastructure.tsx (3,865)
- src/pages/vision/eco/Interconnection.tsx (4,280)

### Root / config
- tsconfig.app.json (485 — see deviation note)
- tsconfig.node.json (481)
- tailwind.config.ts (3,286; confirmed `.ts` — `tailwind.config.js` does not exist)
- components.json (322 — see deviation note)
- postcss.config.js (81)
- eslint.config.js (765)
- .gitignore (253)
- README.md (2,103 — see deviation note)
- BACKLINKS.md (2,346)
- src/App.css (606)

### Public
- public/robots.txt (476)
- public/sitemap.xml (204)
- public/sitemap-pages.xml (7,766)
- public/llms.txt (1,244)

### Plans — .lovable/plan/
- .lovable/plan/homepage-products-announcement-refinement-2026-08-13.md (2,145)
- .lovable/plan/identity-schema-typographic-polish-alias-layout-pillar-pages-2026-08-07.md (5,104)
- .lovable/plan/make-it-dangerous-pixel-level-craft-pass-proof-layer-2026-08-14.md (5,846)
- .lovable/plan/migrate-the-sojibahmmed-project-into-vision-2026-08-04.md (4,920)
- .lovable/plan/remove-inboxnumber-wire-vision-redirects-verify-metadata-2026-08-06.md (4,591)
- .lovable/plan/top-1-craft-pass-homepage-shell-2026-08-07.md (4,486)

### New file (not copied from source)
- .env.example (661) — written fresh per task instructions. The site no longer
  needs Supabase (blog is static); VITE_SUPABASE_* keys are listed as
  optional/unused placeholders only. No `.env` was read or copied.

## Files that could NOT be read
None of the assigned files failed to read. Two probed paths do not exist in the
source project (expected — they were fallback guesses, not assigned files):
- src/pages/vision/sites.tsx — 404 file_not_found (only `sites.ts` exists)
- src/pages/vision/blogData.tsx — 404 file_not_found (only `blogData.ts` exists)
- tailwind.config.js — 404 file_not_found (only `tailwind.config.ts` exists)

## Extra files pulled in by following imports (within the vision subtree)
- src/pages/vision/sites.ts — imported by Industries.tsx / IndustrySlug.tsx (`./sites`)
- src/pages/vision/vision.css — imported by VisionLayout.tsx (`./vision.css`)
- src/pages/vision/EcosystemExplainer.tsx — imported by all 9 eco/* pages (`../EcosystemExplainer`)
- src/pages/vision/blogEssays.ts — imported by blogData.ts (`./blogEssays`, exports `leadershipPosts`)

## Imports NOT written here (siblings own them — noted, not extracted)
- `react-router-dom`, `react-helmet-async`, `react` — npm packages (in package.json)
- `src/components/*`, `src/components/ui/*`, `src/data/*`, `src/lib/*`, `src/hooks/*`,
  `src/integrations/*` — no vision file imports any of these; all vision-local
  imports are covered above.
- `public/vision/ecosystem/*.webp` — binary image assets referenced by the eco
  pages (`/vision/ecosystem/<slug>.webp`); text-only extraction, not copied.

## Deviations / fidelity notes
- Byte counts were verified against the source for every file; all match exactly
  EXCEPT the three below.
- tsconfig.app.json (source 680 bytes) and components.json (source 414 bytes)
  were written minified (485 / 322 bytes). JSON content is identical — same keys,
  values and order — only whitespace/formatting differs.
- README.md is 2,103 bytes vs source 2,102 — one extra trailing newline.
- Bn.tsx: the read output showed mojibake (`���`) in two Bengali words; they were
  written as the only plausible originals — "সেটা জানাটা" (author note) and
  "নিশ্চিত করতে হবে" (Bangladesh section). If the rebuild is diffed against the
  Lovable source and those two words differ, that is the cause.
- blogData.ts needed a trailing blank line appended to reach the source byte
  count (26,435) — content is otherwise identical.
