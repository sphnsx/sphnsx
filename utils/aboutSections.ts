import type { AboutSectionSort } from '../types';
import { HUES, hueForYear } from '../constants';

/** Minimum a section needs to be ordered: its name and its entries' years. */
export interface SortableSection {
  label: string;
  entries: { year: string }[];
}

/**
 * Newest year in a section, as a number. Sections with no entries — or none with
 * a usable year — sort last under the 'recent' rule rather than jumping to the
 * top on a NaN comparison.
 */
export function newestYear(entries: { year: string }[]): number {
  let newest = Number.NEGATIVE_INFINITY;
  for (const e of entries) {
    const n = parseInt(String(e.year).trim(), 10);
    if (!Number.isNaN(n) && n > newest) newest = n;
  }
  return newest;
}

/**
 * Order the About page's list sections.
 *
 *   'recent' — by each section's newest entry, top to bottom = new to old.
 *   'alpha'  — by section name, A–Z.
 *
 * 'recent' falls back to A–Z for sections whose newest entry is the same year
 * (and for empty ones), so the order is total and never shuffles between renders.
 */
export function sortAboutSections<T extends SortableSection>(sections: T[], sort: AboutSectionSort): T[] {
  const byName = (a: T, b: T) => a.label.localeCompare(b.label);
  if (sort === 'alpha') return [...sections].sort(byName);
  return [...sections].sort((a, b) => {
    const diff = newestYear(b.entries) - newestYear(a.entries);
    if (diff !== 0 && !Number.isNaN(diff)) return diff;
    return byName(a, b);
  });
}

/**
 * The hue a section wears on its tag pill: the hue of its newest entry, so the
 * chip tracks the section's most recent year as entries are added. A section
 * with no usable year falls back to the neutral yellow.
 */
export function sectionHue(entries: { year: string }[]): string {
  const newest = newestYear(entries);
  return Number.isFinite(newest) ? hueForYear(newest) : HUES.yellow;
}
