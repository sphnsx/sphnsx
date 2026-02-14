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
