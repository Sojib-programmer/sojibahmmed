# Homepage Products & Announcement Refinement

Reframe the products block so cyber.bd leads as the reputational asset, trim the copy to a minimal editorial tone, relocate the resale.bd announcement to a calmer slot, and add three new minimal asset chips.

## 1. Products block (`ProductsSection`)

New order and copy:

1. **cyber.bd** — lead card, visually emphasised (larger card spanning both columns on desktop, primary-tinted border).
   Label: "The core reputational asset."
   One line: "Zero Trust architecture, penetration testing and security audits."
2. **ticru** — renamed from "ticru pay & ticru voice".
   One line: "AI voice calling and multicurrency payments."
3. **companysetup.io** — minimal.
   One line: "US LLC formation, EIN and banking — 10,000+ founders."

"Learn more →" stays on hover for each card.

## 2. Minimal asset row

Below the three cards, a hairline row of quiet chips (no icons, no descriptions, muted text, subtle border):

`telecom.bd · trips.bd · outfits.bd`

Labelled "Also held" so they read as assets, not products. Non-clickable (no pages exist yet).

## 3. Resale.bd announcement relocation

Remove the fixed top announcement bar (it competes with the nav and pushes the hero down). Move the same message into a single minimal "Latest" line directly above the blog section heading:

```text
Latest — resale.bd is live: Bangladesh's first escrow-protected
secondhand marketplace.  Read the launch →
```

One line, muted text, primary link, no dismiss button, no layout offset.

## Technical notes

- Edit `src/components/ProductsSection.tsx`: reorder/rewrite the `products` array, add a `featured` flag for cyber.bd, add the asset chip row.
- Delete `src/components/AnnouncementBar.tsx` and its import/usage in `src/pages/Index.tsx`; drop the `--announce-h` offset consumption in `Navbar.tsx` (falls back to 0).
- Add the Latest line inside `src/components/BlogSection.tsx`, linking to `/blog/resale-bd-launch-escrow-secondhand-bangladesh`.
- Semantic tokens only; no hardcoded colors. Existing framer-motion stagger patterns reused.
- Verify at `/` with a screenshot after the change.
