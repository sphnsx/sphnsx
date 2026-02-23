---
name: ""
overview: ""
todos: []
isProject: false
---

# Edit mode parity, three columns, and cover aspect ratio

## 1. Add "Three columns" gallery layout option

**Current state:** Gallery layout only supports One column and Two columns (`galleryColumns?: 1 | 2` in [types.ts](types.ts)); [ProjectDetailPage.tsx](components/ProjectDetailPage.tsx) has two radios and a grid that only handles 1 or 2 columns.

**Changes:**

- **[types.ts](types.ts):** Change `galleryColumns?: 1 | 2` to `galleryColumns?: 1 | 2 | 3`.
- **[ProjectDetailPage.tsx](components/ProjectDetailPage.tsx):** Add a third radio "Three columns" for `galleryColumns === 3`. In the gallery grid (view and edit), add the three-column case: e.g. `grid-cols-1 sm:grid-cols-2` for 2, and `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (or `sm:grid-cols-3`) for 3.
- **[NewProjectPage.tsx](components/NewProjectPage.tsx):** Once New Project has Gallery layout (see below), add the same three options including "Three columns" and pass `galleryColumns` (1, 2, or 3) into `addProject()`.

---

## 2. All covers on showcase shown in original aspect ratio

**Current state:** [ShowcaseView.tsx](components/ShowcaseView.tsx) uses `heightsFromAspectRatios(projects.map(p => p.coverAspectRatio ?? 1), ...)` so row heights follow each project’s `coverAspectRatio`. Projects **without** `coverAspectRatio` (e.g. older projects or if it wasn’t saved) default to `1` (square), so their row height is wrong and only projects like TWICE (which have the ratio saved) look correct.

**Changes:**

- **Ensure coverAspectRatio is always saved:** In [ProjectDetailPage.tsx](components/ProjectDetailPage.tsx), when saving in edit mode, keep/persist `coverAspectRatio` (already on `editProject`). In [NewProjectPage.tsx](components/NewProjectPage.tsx), ensure we compute and save `coverAspectRatio` on create (already done in `handleSubmit`).
- **Backfill existing projects:** For projects that have `imageUrl` but no `coverAspectRatio`, compute the ratio from the cover image and update the project. Options:
  - **Option A (recommended):** In [storageService.ts](services/storageService.ts), after loading portfolio data (e.g. in `getPortfolioDataAsync`), run a one-time or conditional backfill: for each project with `imageUrl` and no `coverAspectRatio`, create an Image, set src to the data URL, on load read `naturalWidth/naturalHeight`, compute ratio, update the project object, and call `writePortfolioData` once with all backfilled projects. Return the (possibly updated) data so the UI sees correct ratios on next render or refresh.
  - **Option B:** Lazy backfill when a project is opened for edit: if `initialProject.imageUrl` exists and `!initialProject.coverAspectRatio`, compute from image, update project via `updateProject`, then `onRefresh()`. Simpler but backfill happens gradually.

Result: Every project used for row height has a correct `coverAspectRatio`, so all covers on the showcase are shown in their original ratio like TWICE.

---

## 3. New Project same as Edit Project (cover on right, Replace, Gallery layout)

**Current state:** New Project has Cover (file input) on the **left**, and on the right only "Cover preview" and Gallery with hover-only Remove/Set as cover—**no** Gallery layout and **no** Replace. Edit Project (4th screenshot) has Cover + "Change cover" on the **right**, Gallery layout (One/Two columns), and per-image Set as cover, **Replace**, Remove.

**Changes in [NewProjectPage.tsx](components/NewProjectPage.tsx):**

- **Layout:** Move Cover to the **right** panel. Left panel: only Title, Year, Description, "Create project" button. Right panel: (1) **Cover** — show current cover image or "No cover" placeholder + "Change cover" label/button (same as Edit). (2) **Gallery layout** — One column / Two columns / **Three columns** (same as Edit + new option). (3) **Gallery** — "Choose files" + list of thumbnails with a **row below each**: Set as cover, **Replace** (hidden file input), Remove (same order/style as Edit).
- **Replace:** Add `replaceGalleryImage(index, file)` that replaces the image at that index, compresses, updates gallery state and cover if the replaced image was the current cover.
- **Gallery columns:** Add state `galleryColumns: 1 | 2 | 3` (default 1). Add the three radios. Pass `galleryColumns` into `addProject()` instead of hardcoding `1`.
- **Cover aspect ratio:** When user sets or changes cover (via "Change cover" or "Set as cover"), compute and store aspect ratio so it can be saved with the project on submit (same as Edit).

Result: New Project has the same options and layout as the 4th screenshot (Edit): cover on right, Gallery layout with one/two/three columns, and Replace on every gallery image.

---

## 4. Intermittent "no images" when editing (existing plan item)

**Cause:** `editProject` is only set from `initialProject` on mount and when clicking "Edit". If data loads after mount or user navigates, `editProject` can be stale or from a project with no gallery.

**Change in [ProjectDetailPage.tsx](components/ProjectDetailPage.tsx):**

- Sync `editProject` with `initialProject`: (1) when `initialProject?.id` changes, always `setEditProject(initialProject)`; (2) when `!isEditing` and `initialProject` changes, `setEditProject(initialProject)` so after async load or refresh the form shows correct data when they click Edit.

---

## Files to touch (summary)


| File                                                                 | Changes                                                                                                                                 |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [types.ts](types.ts)                                                 | `galleryColumns?: 1                                                                                                                     |
| [components/ProjectDetailPage.tsx](components/ProjectDetailPage.tsx) | Three-column radio and grid; sync `editProject` with `initialProject` (two useEffects).                                                 |
| [components/NewProjectPage.tsx](components/NewProjectPage.tsx)       | Cover on right (Change cover); Gallery layout (1/2/3 columns); Replace per image; `galleryColumns` state and in `addProject`.           |
| [components/ShowcaseView.tsx](components/ShowcaseView.tsx)           | No code change if backfill is in storage; otherwise ensure heights use `coverAspectRatio` (already do).                                 |
| [services/storageService.ts](services/storageService.ts)             | Optional: backfill `coverAspectRatio` for projects that have `imageUrl` but no ratio (in `getPortfolioDataAsync` or a small migration). |


