# SPHNSX Design Guide

Single source of truth for the SPHNSX site design. Add new rules as new sections or bullets; keep the same structure so the guide stays scannable. When a rule here and the code disagree, fix one of them — a guide describing a site that no longer exists is worse than no guide.

---

## 1. Aesthetic

- Editorial and typographic: large serif display type, hairline rules, generous but disciplined density, almost no decoration.
- The page reads as **one continuous sheet** divided by full-bleed horizontal rules — not as cards or panels.
- Colour is used as **field fill** (chips, year bars, highlighter washes, tag pills), never as body text colour. Black ink sits on top.
- Sharp corners everywhere. Buttons and inputs set `borderRadius: 0` explicitly; nothing else introduces a radius.

## 2. Layout

- **Single column.** Each page is a stack of full-width sections separated by a 1px rule in `PALETTE.textPrimary`.
- **Page container:** `position: fixed; inset: 0` with `overflow-y: auto`, so each route owns its own scroll and starts at the top.
- **Gutter:** 32px desktop, 16px phone. Held in a `padX` constant per page; never hardcode a different side padding.
- **Section header:** the tag pill sits alone on its own row, right-aligned, above the section's content.
- **Vertical rhythm:** section headers ~16px, section feet ~22–24px, list rows ~12–18px. Values under 20px are control padding and inline rhythm — leave them alone when tightening.
- **Bottom of page:** a Works ⁄ Contact nav row, then the black footer plinth, glued together. The nav owns `marginTop: auto` so short pages push both to the viewport bottom; the footer must not also claim it.

## 3. Typography

- **Display — `abril-display`:** hero titles, year marks, project titles, section headlines. Weight 700, tight tracking (−0.04 to −0.055em), line-height 0.9–1.05.
- **Text — `abril-text`:** body paragraphs, list entries, meta values, the `sphnsx.com` wordmark (italic).
- **Lead / pull quote — `sarvatrik-latin-variable`:** italic, weight 400, for the Statement sentence only.
- **Labels — Sukhumvit Set:** uppercase, 9–11px, letter-spacing 0.14–0.16em, via `CapV2`. Used for every small label, button and caption. Bundled with Apple OSes; falls back to a system sans elsewhere.
- Abril and Sarvatrik load from Adobe Fonts (`use.typekit.net`). Sukhumvit Set is not a web font and is never loaded.
- **Leading:** paragraphs take `LEADING` from `constants.ts` — 1.45 at 16px and up, 1.5 at 13–14px, 1.3 for meta rows. Display type sets its own tighter value inline. Do not invent a new paragraph leading per component.
- **Figures differ between the two Abrils.** `abril-text` sets old-style figures (2 and 0 on the body band, 6 and 8 ascending, 4/5/7/9 descending); `abril-display` sets lining figures. Anything aligned to a year must account for which one it sits next to — see §5.

## 4. Colour

- **Palette** (`constants.ts`, single source — never hardcode a hex in a component): `backgroundMain` #FAFAFA, `textPrimary` #1a1a1a, `textSecondary` #737373, `destructive` #b91c1c, plus the greys.
- **Three hues:** coral #EC6777, mint #7FE2C1, yellow #FFF89C.
- **Year hue cycle.** Hues repeat on a three-year cycle anchored at 2024: 2024 mint, 2025 coral, 2026 yellow, 2027 mint, 2028 coral, 2029 yellow, and so on forward and backward. One function owns this — `hueForYear()`. A year must never fall through to a catch-all colour.
- **Section chips take the hue of their newest entry** (`sectionHue()`), so a chip always agrees with the rows beneath it and changes on its own as entries are added.

## 5. Motifs

- **Year mark `> YYYY ▬`** (`YearMarkV2`): chevron, year, colour bar. The bar is centred on the **digits**, not on their line box, which `align-items: center` would otherwise use. The offsets are published by the component (`yearDigitsOffset`, `yearChipOffset`) so rows beneath can line up with its parts instead of hardcoding pixels.
- **List rows** (`AboutListSection`): year · hue bar · entry · kind. The bar centres on the old-style figures' body band, a fixed fraction of the year's size, so bars stay level from row to row even though "2026" and "2024" have different ink boxes.
- **Highlighter wash** (`MarkerTitleV2`): a thick baseline-anchored underline, not a positioned block — so it repeats on every line of a wrapped title and stops at each line's last glyph.
- **Tag pill** (`TagPillV2`): bordered rectangle, colour chip plus caps label. Marks what a section is.
- **Statement lead** (`FitOneLine`): on desktop the sentence always sits on one line, shrinking to fit and wrapping only below 18px. On phones it wraps normally — a phone column would drive the lead below the size of the body text under it.

## 6. Catalogue (home)

- Work is grouped by year, newest first. Each group is a year mark followed by its projects.
- **Phone:** project titles start at the year's **digits**, clearing the chevron.
- **Desktop:** project titles start at the year's **colour chip**.
- No counters. A count like "01 / 01" tells the reader nothing.
- Captions prefer locations over a plate count; when a count is shown it agrees with its number ("01 plate", "02 plates") via `countLabel()`.

## 7. About page

- Sections: Biography, Practice, then four list sections — **Exhibitions, Awards, Publications, Recognition**. Recognition is singular: it is a mass noun.
- The four list sections share one component. Their order is a stored rule, not a hand-sorted list: **newest entry first** (top to bottom, new to old) or **A–Z by section**. Empty sections sort last; ties fall back to A–Z so the order is total.
- An empty section is invisible to visitors and only appears in admin.

## 8. Admin

- Admin is the public site with editing chrome added in place, not a separate skin: same type, same spacing, same rules. A change to the public density applies to admin too.
- **Chrome:** `AdminBtn` (bordered caps button, `primary` filled, `danger` red), `AdminTop` (breadcrumb + log out), inline editors that open where the content sits.
- **List editors** offer add, remove, ↑/↓ reorder, save and cancel. Order is part of the data; saving writes the array as shown.
- Admin routes are desktop-only; phones are redirected home.
- Two separate credentials: a client-side password for the admin UI, and a Supabase sign-in (Admin → Deployment) that authorises publishing and image upload.

## 9. Images

- Plate images live in Supabase Storage; the portfolio row stores only their public URLs, keeping the JSON small enough to save inside the statement timeout.
- Right-click and drag are disabled on artwork (`onContextMenu` / `onDragStart`), as a courtesy rather than real protection.

## 10. Phone

- Breakpoint: viewport width < 768px (`MOBILE_BREAKPOINT_PX`, via `useIsMobile()`), branched in the component, not in CSS.
- Phone is not a scaled-down desktop: display sizes, gutters and some layouts have their own values.
- **Top ribbon:** wordmark plus a hamburger that toggles a drop-down panel. Desktop shows inline pills instead.

## 11. Rules that keep the design honest

- **Derive, don't hardcode.** Any measurement that depends on another element (a bar's position against digits, a title's indent under a year mark, a chip's colour) is computed from that element's own values. Hardcoded pixels drift the moment a size changes, and have.
- **Measure, don't estimate.** Optical offsets come from the live font via canvas metrics, not from guessing.
- **One source per rule.** The year cycle, the leading scale, the palette, the mark geometry each live in exactly one place.
- **Fail visibly, never blank.** An uncaught render error shows a readable message; a stale cached bundle reloads itself once rather than leaving a white page.
