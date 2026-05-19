import { PortfolioData } from './types';

/**
 * Single source of truth for UI colours.
 *
 * SPHNSX Option C — pastel accents (Accessible Brand Colors) used as field
 * fills (chips, year bars, highlighter washes, tag pills) rather than as text
 * colour. Black ink type sits on top.
 */
export const HUES = {
  /** 2025 / current / "action" */
  coral: '#EC6777',
  /** 2024 / recent / "live / verified" */
  mint: '#7FE2C1',
  /** 2023 & older / archive / "pending or draft" */
  yellow: '#FFF89C',
  // ── Back-compat aliases. New code should reach for coral / mint / yellow. ──
  /** @deprecated → coral */
  magenta: '#EC6777',
  /** @deprecated → mint */
  indigo: '#7FE2C1',
  /** @deprecated → yellow */
  green: '#FFF89C',
} as const;

export const PALETTE = {
  /** Default accent (was green in trio palette; now coral). */
  accent: HUES.coral,
  backgroundMain: '#FAFAFA',
  backgroundSidebar: '#EBEBEB',
  /** Cool indigo-tinted soft grey, used on Contact strips and grey footers. */
  greySoft: '#E7E8EB',
  /** Hairline divider grey (Option C). */
  greyHair: '#dcdcdc',
  /** Mid grey reserved for heavier accent surfaces. */
  greyMid: '#C8C8C8',
  border: '#333333',
  textPrimary: '#1a1a1a',
  textSecondary: '#737373',
  destructive: '#b91c1c',
  /** Re-exposed for convenience. */
  hues: HUES,
} as const;

/** Status semantic mapping (admin dots, deployment indicators). */
export const STATUS_HUE = {
  live: HUES.mint,
  pending: HUES.yellow,
  draft: HUES.yellow,
  action: HUES.coral,
} as const;

/**
 * Resolve a project year to its accent hue. Single source of truth used
 * everywhere a year is depicted (catalogue, exhibitions, awards, project page).
 *
 *   2025 → coral  (current / active edition)
 *   2024 → mint   (recent)
 *   anything else (2023 & older, 2026 & future, non-numeric) → yellow
 */
export function hueForYear(year: string | number | undefined | null): string {
  if (year == null) return HUES.yellow;
  const n = typeof year === 'number' ? year : parseInt(String(year).trim(), 10);
  if (Number.isNaN(n)) return HUES.yellow;
  if (n === 2025) return HUES.coral;
  if (n === 2024) return HUES.mint;
  return HUES.yellow;
}

/** Viewport width below this (px) is treated as phone for layout. */
export const MOBILE_BREAKPOINT_PX = 768;

/** @deprecated Home plinth is now ink-black. */
export const HOME_BUTTON_GREEN = HUES.coral;

export const INITIAL_DATA: PortfolioData = {
  aboutMe: "Silvia (b 1999) is a London-based fine art photographer whose work interrogates the fluid boundaries between the tangible and the perceived. A graduate of Central Saint Martins, she has pivoted from the structural rigour of fashion towards a more ephemeral exploration of the 'shifted concept' — capturing the weight of a glance within a fleeting moment.\n\nHer practice is deeply rooted in travel and the quiet observation of nature and still life. By isolating objects from their traditional contexts, Silvia creates unreal spaces where philosophical enquiry and visual subtlety converge. For her, the camera is not a tool for documentation, but a medium for leaping between states of being.",
  aboutImage: '',
  contactMethods: [
    { label: 'Email', value: 'sphnsx@aol.com' },
    { label: 'Instagram', value: 'https://www.instagram.com/sphnsx/' },
  ],
  // Defaults sourced from the artist's CV (overridable via admin save).
  exhibitions: [
    { year: '2026', venue: 'Arxipelag', kind: 'Digital feature' },
    { year: '2025', venue: 'Capture at Kew, IGPOTY 18 — Kew Gardens, UK', kind: 'Group' },
    { year: '2024', venue: 'Texture — The Glasgow Gallery of Photography, UK', kind: 'Group' },
  ],
  awards: [
    { year: '2025', title: 'International Photography Awards', kind: 'Honourable Mention & Official Selection' },
    { year: '2024', title: 'International Garden Photographer of the Year', kind: 'Finalist' },
  ],
  projects: [
    {
      id: 'twice',
      title: 'TWICE',
      description: `Twice is a series of diptych film photographs exploring the fragility of memory and the quiet dissonances embedded in everyday life.

Heraclitus observed that no one steps into the same river twice — not because the river changes, but because both the river and the person are always becoming something else. Memory operates similarly. We return to it expecting repetition and find instead a thing subtly altered, a detail misplaced, a feeling that no longer quite fits the image it belongs to.

Each photograph in this series pairs two frames that appear, at first glance, identical. They are not. The differences between them — sometimes stark, sometimes barely perceptible — enact the unreliability of recollection itself. Within individual images, too, there are misfits: objects and moments that resist the coherence of the scenes they inhabit, held in place by some invisible thread rather than any clear logic.

Shot on film, the series embraces the medium's own relationship with time and imperfection — its grain, its slight unpredictability — as formal extensions of the theme. Memory, like film, is a chemical process. It changes with exposure.`,
      imageUrl: '',
      gallery: [],
      year: '2025'
    }
  ]
};

export const ADMIN_PASSWORD = "silvia_admin";
