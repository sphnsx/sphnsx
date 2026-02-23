# SPHNSX — Portfolio

A portfolio website for a London-based fine art photographer. Projects are shown in a modular three-column layout; visitors can browse work, read the biography, and get in touch. The site includes a private admin area for adding and editing projects, covers, and copy.

**Live:** [sphnsx.com](https://sphnsx.com)

## Tech

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** for layout and styling
- **React Router** (hash-based routing)
- **IndexedDB** and **localStorage** for persisting portfolio data
- **TipTap** for rich-text biography editing; **react-easy-crop** for cover crop/zoom

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
```

Output is in `docs/` for deployment (e.g. GitHub Pages).

## Project structure

- `App.tsx` — Router, admin bar, route definitions
- `components/` — Showcase (three-column home), project detail, about, contact, admin login, new/edit project, deployment
- `contexts/` — Admin auth
- `services/` — Data (IndexedDB / localStorage)
- `hooks/` — Media queries (e.g. mobile)
- `constants.ts` — Palette, copy, config

Admin: go to `/#/admin` (or `/admin` on the live domain) and sign in to add projects, edit covers and text, and manage deployment.
