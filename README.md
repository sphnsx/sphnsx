# SPHNSX — Portfolio

A portfolio website for a London-based fine art photographer. Projects are shown in a modular three-column layout; visitors can browse work, read the biography, and get in touch. The site includes a private admin area for adding and editing projects, covers, and copy.

**Live:** [sphnsx.com](https://sphnsx.com)

## Tech

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** for layout and styling
- **React Router** (hash-based routing)
- **IndexedDB**, **localStorage**, **sessionStorage**, and optional **remote JSON** for persisting portfolio data
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

**So viewers always see your latest content (including after hard refresh):** set a published portfolio URL when building, and put that file on your site:

1. In Admin → Deployment, click **Download portfolio.json** and add the file to `docs/` (next to `index.html`).
2. Run **`npm run build:production`** (or `VITE_PORTFOLIO_URL=https://yoursite.com/portfolio.json npm run build` for a different URL).
3. Deploy. The app will load portfolio data from that URL first, then fall back to local storage.

## Project structure

- `App.tsx` — Router, admin bar, route definitions
- `components/` — Showcase (three-column home), project detail, about, contact, admin login, new/edit project, deployment
- `contexts/` — Admin auth
- `services/` — Data (IndexedDB / localStorage)
- `hooks/` — Media queries (e.g. mobile)
- `constants.ts` — Palette, copy, config

Admin: go to `/#/admin` (or `/admin` on the live domain) and sign in to add projects, edit covers and text, and manage deployment.
