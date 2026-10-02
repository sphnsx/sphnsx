import type { Project } from '../types';

/** Paths handled by their own <Route> — a project whose title slugifies to one of these would shadow the real page, so we reject that title at creation time. */
const RESERVED_SLUGS = new Set(['', 'about', 'contact', 'admin', 'a', 'project']);

/**
 * Convert a project title into a URL slug: lowercase, accents folded onto their
 * base letter ("Afurodīte" → "afurodite"), runs of anything that is not a letter
 * or digit collapsed to dashes, dashes trimmed. Stable across repeated calls.
 *
 * Letters are kept in EVERY script, so a title written in Japanese, Korean or
 * Cyrillic keeps its own characters instead of slugifying to nothing — browsers
 * percent-encode them in the address bar and decode them back for the router. A
 * title with no letters or digits at all (emoji, punctuation) still yields '',
 * and the caller falls back to the project id for the URL.
 */
export function slugify(title: string): string {
  return title
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // drop combining marks left by NFKD
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

export function isReservedSlug(slug: string): boolean {
  return RESERVED_SLUGS.has(slug);
}

/** Resolve a URL param to a project. Tries (1) slugified title match (new-style URLs), (2) raw string-id match, (3) case-insensitive id match — so old numeric-id links AND old alphabetic-id links ("twice") both resolve even if the jsonb payload stored the id as a number. */
export function findProjectBySlug(projects: Project[], slug: string | undefined): Project | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase();
  return (
    projects.find((p) => slugify(p.title) === target)
    ?? projects.find((p) => String(p.id) === slug)
    ?? projects.find((p) => String(p.id).toLowerCase() === target)
  );
}

/** Canonical URL path for a project. */
export function projectPath(project: Project): string {
  const slug = slugify(project.title) || project.id;
  return `/${slug}`;
}
