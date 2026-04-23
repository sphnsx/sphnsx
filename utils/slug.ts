import type { Project } from '../types';

/** Paths handled by their own <Route> — a project whose title slugifies to one of these would shadow the real page, so we reject that title at creation time. */
const RESERVED_SLUGS = new Set(['', 'about', 'contact', 'admin', 'a', 'project']);

/** Convert a project title into a URL slug: lowercase, non-alphanumerics → dashes, trim dashes. Stable across repeated calls. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function isReservedSlug(slug: string): boolean {
  return RESERVED_SLUGS.has(slug);
}

/** Resolve a URL param to a project. Prefers slugified title match (new-style URLs); falls back to raw id match so old numeric-id links keep working. */
export function findProjectBySlug(projects: Project[], slug: string | undefined): Project | undefined {
  if (!slug) return undefined;
  const target = slug.toLowerCase();
  return projects.find((p) => slugify(p.title) === target) ?? projects.find((p) => p.id === slug);
}

/** Canonical URL path for a project. */
export function projectPath(project: Project): string {
  const slug = slugify(project.title) || project.id;
  return `/${slug}`;
}
