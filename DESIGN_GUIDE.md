# SPHNSX Design Guide

Single source of truth for the SPHNSX site design. Add new rules as new sections or bullets; keep the same structure so the guide stays scannable and append-only.

---

## 1. Aesthetic

- Modern, clean, minimal, with a slight playful touch.
- **Modular design style** — imagine USM (universal/modular system) in web design: repeatable blocks, clear structure, divisible areas.

## 2. Linear elements and buttons

- Prefer linear elements (e.g. lines for section separation).
- **Default state:** Buttons use linear strokes/borders, sharp corners (no rounded).
- **Hover state only:** For primary/very important buttons, on hover they become filled colour blocks, still sharp corners. Other buttons stay stroked on hover or have a subtle stroke change.

## 3. Emphasis (Cursor-like, sparing)

- Use colour to differentiate content (similar to Cursor’s syntax/UI colour use), but use coloured text less often than Cursor does—reserve it for key info only.

## 4. Layout ratio (1/5 | 2/5 | 2/5) and modular division

- **Vertical split into three columns:**
  - **Left (1/5):** Navigation — “Home”, “About me”, “Contact”.
  - **Middle (2/5) + Right (2/5):** Content area for different art projects.
- Each column can be **further divided by horizontal lines** into sub-areas. Overall layout should feel modular (clearly defined blocks, dividers).
- **Independent column scrolling:** Each split column scrolls up and down **on its own** (left, middle, and right each have their own scroll), not one global page scroll.

## 5. Modular showcase (preview + hover reveal)

- Avoid “name only” sections that require a click to see content.
- **Default (not hovering):** Show only the section name and a small key preview (e.g. for “About me”: title + a photo of you).
- **On hover:** An animation (e.g. enlarging) and more info appears (e.g. for “About me”: first few words of your self-introduction pop up). The section feels like a larger preview area that expands on hover rather than hiding content behind a click.
- **Section frame stays fixed:** The section area **remains unchanged and stays within its frame** — it never exceeds the layout. The animation and extra content create the *effect* that the area has become bigger (e.g. zoom/enlarge or content reveal inside the same box), without the section actually growing past its bounds.
- **Example — About me:** Not hovering = “About me” + photo; hovering = enlarge + first few words of self-intro (all within the same section frame).

## 6. Typography (locked-in font names)

- **Primary (UI/body):** **Inter** (sans-serif). Use for headings, body text, and general UI.
- **Secondary (labels, captions, code-like):** **JetBrains Mono** (monospace). Use for labels, captions, and code-like emphasis.
- Use these font family names site-wide. Update this guide whenever the fonts change.

## 7. Fixed Home button

- **Position:** Fixed top-left, above all content; remains visible on scroll.
- **Colour:** One dedicated green only for this button (e.g. `#5EEAD4`). No other element uses this green.
- **Style:** Filled block, sharp corners; shade/offset to top and left edges only. Mono, uppercase, tracking.
- **No separate “Home” section** on the home page and no back buttons on detail pages — navigation home is this button only.

## 8. Detail pages (About me, Contact, every project)

- **Full-screen:** Detail view fills the viewport; no shared shell with the three-column home.
- **Split layout:** A single vertical divider at **2/5** of the width.
  - **Left (2/5):** Text only — page title, body copy, links (e.g. Contact: email, Instagram). For projects: year, title, description paragraphs.
  - **Right (3/5):** Images only — project gallery, or about/contact images (or placeholder if none).
- **Divider:** Vertical line (e.g. 1px black) between the two sides. Each side scrolls independently if content overflows.
- **About Me photo:** The About Me detail page image **may have a border** (e.g. `border-paletteBorder`). This is the only view-mode image where a border is allowed; project gallery photos are borderless.

## 9. Section hover and palette

- **No grey** for section backgrounds or section blocks; reserve grey only for neutral UI (e.g. placeholders, disabled).
- **On section hover:** Only the **section title** gets a coloured shade (sharp corners, behind the title text). The section area itself does not fill with colour.
- **Divider strip:** The horizontal divider between sections uses the same colour on hover (and while dragging), so the divider stays coloured for the whole drag.
- **One colour per section:** Each section (About me, Contact, each project) is assigned one colour from a fixed **section palette** of six colours. Assignment is random at load and consistent for the session (e.g. shuffled once). Palette: pink, lilac, yellow, teal, blush, purple (exact hexes live in code; see `SECTION_PALETTE` in ShowcaseView).

## 10. Spacing and alignment

- **Left column content:** Align all text and links to the same left margin as the Home button (e.g. 20px / `pl-5`). Section title block: same left padding, with padding around the title for the hover shade.
- **Vertical rhythm:** Blank row between section title and first line of text; blank row between paragraphs on detail pages (e.g. description split by `\n\n` with spacing between `<p>`s).
- **Column tops:** Middle and right columns start at the top border. Left column has a top spacer so content begins below the fixed Home button; vertical dividers still run to the top of the layout.

---

## 11. Phone viewport (mobile-only rules)

- **Breakpoint:** Viewport width &lt; 768px is treated as phone. Value in `constants.ts` as `MOBILE_BREAKPOINT_PX`; layout branches on `useIsMobile()` from `hooks/useMediaQuery.ts`.
- **Ignore column ratios on phone:** Do not use the 1/5 | 2/5 | 2/5 home layout or the 2/5 | 3/5 detail layout. Use only horizontally divided sections (single column, stacked blocks).
- **Home (phone):** One fixed top bar (hamburger + Home); left-column content (About me, Contact) is folded into a drawer opened by the hamburger. Main area is a single vertical list of project sections only, in **year order new to old** (by `project.year`, non-numeric/empty last). No “Add project”; no draggable reorder. Tapping a project navigates to its detail (hash + reload on phone for reliability).
- **Detail (phone):** Single column: **pictures/gallery first** (full width), **text below** (year, title, description). No 2/5–3/5 split; no Edit/Delete. About and Contact: same idea — one column, text then image area; no “Images” placeholder when there are no images.
- **Backgrounds on phone:** Use white (`bgMain`) for main and section backgrounds; no grey (`bgSidebar`) for project rows or detail image areas on phone.
- **Admin on phone:** Do not show AdminBar, Add project, Edit/Delete, or Edit biography when `useIsMobile()` is true. Admin routes can redirect to home on phone.

## 12. Mobile header (green bar + drawer)

- **When:** Only when viewport is phone; rendered by App, not inside ShowcaseView, so it appears on every route (home, about, contact, project detail).
- **Bar:** Single green block (same accent as Fixed Home: `PALETTE.accent` from `constants.ts`). Contains hamburger (three lines, left) + “Home” link (right). Compact: **max width ~1/3 of viewport** (`max-w-[33.333vw]`), `w-auto` so it can be narrower.
- **Alignment:** Bar left padding (`pl-4`) so the hamburger aligns with main content (pictures, text). Hamburger button is icon-width only (`w-6`); no extra space between icon and “Home”.
- **Equal gaps:** The gap between the hamburger and “Home” equals the gap between “Home” and the right edge of the green block. Achieved by giving the Home link equal horizontal padding (e.g. `px-4`) and no separate right spacer; bar has no right padding so the link’s padding defines the right gap.
- **Drawer:** Hamburger toggles a slide-over panel with “About me” and “Contact” links (same destinations as desktop). Close on link click or tap outside. No ResizableColumn or draggable dividers in the drawer.
- **Fixed Home button:** When `useIsMobile()` is true, do not render the desktop Fixed Home button; the mobile header is the only top bar.

## 13. Palette and tokens

- **Colours:** Single source in `constants.ts` — `PALETTE.accent` (green for Home/mobile bar), `PALETTE.backgroundMain`, `PALETTE.backgroundSidebar`, `PALETTE.border`, `PALETTE.textPrimary`, `PALETTE.textSecondary`, `PALETTE.destructive`. Use these tokens; do not hardcode hex for UI.
- **Section hover palette:** Section title hover uses a separate section palette (e.g. in ShowcaseView); grey is reserved for neutral UI only, not section blocks.

## 14. Project covers on showcase (home)

- **Original aspect ratio:** Every project cover on the home showcase is shown in its **original aspect ratio**. Row heights are derived from each project’s cover aspect ratio (width/height) so no cover is forced into a wrong shape (e.g. square). Each project must store `coverAspectRatio` when the cover is set or changed; existing projects without it should be backfilled so all rows look correct.

## 15. Project forms (New and Edit)

- **Parity:** New Project and Edit Project use the **same** options and layout. Do not offer fewer controls or a different structure in one mode.
- **Split layout:** Left panel = text only: Title, Year, Description, plus primary action (Create project / Save) and Cancel when editing. Right panel = media only: Cover, Gallery layout, Gallery.
- **Cover on the right:** The cover image and its control (“Change cover”) live on the **right** panel only. No cover file input on the left.
- **Gallery layout:** One, Two, or Three columns — same radio group in both New and Edit; choice is per project and persisted.
- **Gallery per-image actions:** For each gallery thumbnail, show a row of actions below the image (not hover-only): **Set as cover**, **Replace** (file input), **Remove**. Same order and style in New and Edit. Replace is required so users can change a single image without re-uploading the whole gallery.

## 16. Project detail gallery (view mode)

- **No borders or frames:** Gallery photos are curated and borderless. Do not add a border, stroke, or cell background around each photo; no Polaroid-style frame in view mode.
- **No gaps:** No gap between photos horizontally or vertically — photos touch (e.g. `gap-0` on the gallery grid).
- **Full width:** The gallery uses the full width of the right (3/5) column; do not cap it with a max-width so images stay small.
- **Vertical alignment with title:** The top of the first row of photos aligns with the top of the project title. Right column uses the same top padding as the left (`pt-pageTop`); add a spacer matching the left column’s year line + margin so the gallery starts level with the title.
- **Photo size:** Photos are large and impactful. Each image can use a substantial portion of the viewport height (e.g. `max-h-[70vh]`) so the gallery feels prominent, not small. Preserve aspect ratio (`object-contain`).

## 17. Mobile zigzag / wave dividers

- **Where:** Phone-only, between stacked content blocks (e.g. sections on the mobile home or detail views), rendered via `MobileSectionDivider` (`type: 'zigzag' | 'wave'`).
- **Full-bleed width:** Dividers span the full viewport width (`w-screen`, SVG `preserveAspectRatio="none"`), so both edges touch the screen sides on mobile.
- **Thickness:** Divider height is a slim strip (default ~8px); can be adjusted via the `height` prop but should stay visually light and unobtrusive.
- **Role:** Purely decorative linear separators; they do not carry meaning or interaction states and should not be reused as buttons or controls.
