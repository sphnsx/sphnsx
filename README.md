# SPHNSX — Portfolio

A portfolio website for a London-based fine art photographer. Work is listed as a catalogue grouped by year; visitors can browse projects, read the biography, and get in touch. The site includes a private admin area for adding and editing projects, covers, and copy.

**Live:** [sphnsx.com](https://sphnsx.com)

## Tech

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** for layout and styling
- **React Router** (path-based routing; legacy `#/` links are redirected on load)
- **Supabase** (Postgres + Storage) as the authoritative store, with **IndexedDB**, **localStorage**, **sessionStorage** and a cookie as local caches, plus an optional static **remote JSON** fallback
- **TipTap** for rich-text biography editing; **react-easy-crop** for cover crop/zoom

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (`http://localhost:3000`, set in `vite.config.ts`).

## Build

```bash
npm run build
```

Output is in `docs/` for deployment (e.g. GitHub Pages).

**Automatic live publish (recommended):** use Supabase so every save in Admin updates the live site—no download or file steps.

1. Create a free project at [supabase.com](https://supabase.com). In Dashboard → SQL Editor, run the contents of **`supabase-setup.sql`** in this repo.
2. In Supabase: Settings → API copy **Project URL** and **anon public** key. Add to `.env` and `.env.production`:  
   `VITE_SUPABASE_URL=https://xxx.supabase.co` and `VITE_SUPABASE_ANON_KEY=your_anon_key`.
3. In Supabase: Authentication → Users → Add a user (email + password). Use that email/password to **Sign in to enable live publish** on Admin → Deployment.
4. Build and deploy as usual. Viewers load from Supabase; when you save in Admin you’re signed in, so every save publishes automatically.

**Optional manual publish:** if you don’t use Supabase, you can still use a static `portfolio.json` and `VITE_PORTFOLIO_URL` (see `.env.production`); then you download the file and add it to `docs/` when you want to publish.

## Deploy (GitHub Actions)

Push to `main` runs the workflow in `.github/workflows/deploy.yml`: it builds with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from the repo’s **Settings → Secrets and variables → Actions**, then deploys to GitHub Pages. In the repo **Settings → Pages**, set **Source** to **GitHub Actions** so the workflow deploys the site. If the **Live publish** (Supabase sign-in) section is missing on the live domain, add those two secrets in **Settings → Secrets and variables → Actions** (same values as in `.env`), then re-run the workflow or push to `main` to rebuild.

**If the live site is on Cloudflare Pages** (e.g. custom domain points to Cloudflare): Cloudflare runs its own build and does **not** use GitHub Actions secrets. Add the same env vars in **Cloudflare Dashboard → Workers & Pages → your project (sphnsx) → Settings → Environment variables**: create **Production** (and optionally Preview) variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` with the same values as in `.env`. Then trigger a new deployment (Deployments → … on latest → Retry deployment, or push a commit) so the build runs with the vars. Until then, the **Live publish** section will not appear on the Cloudflare-served site.

## Project structure

- `App.tsx` — Router, admin bar, route definitions
- `components/` — Showcase (home catalogue), project detail, about, contact, admin login, new/edit project, deployment
- `contexts/` — Admin auth
- `services/` — Supabase client and the portfolio store (Supabase + local caches)
- `hooks/` — Media queries (e.g. mobile)
- `constants.ts` — Palette, year hue cycle, leading scale, initial copy, config
- `utils/` — Slugs, About section ordering, image helpers

Admin: go to `/admin` and sign in to add projects, edit covers and text, and manage deployment.
