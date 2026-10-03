
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  year: string;
  /** Width/height of cover image; used for default section height on home. */
  coverAspectRatio?: number;
  /** 1 = one column, 2 = two columns, 3 = three columns; default (undefined) = 1. */
  galleryColumns?: 1 | 2 | 3;
  /** Plain-text location labels shown alongside year on the project detail page. */
  locations?: string[];
  /** Plain-text medium, e.g. "silver gelatin", "medium format". Threaded into slash captions when present. */
  medium?: string;
}

/** Single exhibition entry shown on the About page when populated. */
export interface Exhibition {
  /** 4-digit year, e.g. "2024". */
  year: string;
  /** Venue + city, e.g. "Soft Opening, London". */
  venue: string;
  /** Solo, group, etc. */
  kind?: string;
}

/** Single contact method: user-editable label (e.g. "Email", "Instagram") and value (URL or address). */
export interface ContactMethod {
  label: string;
  value: string;
}

/** Award / recognition entry shown on the About page when populated. */
export interface Award {
  /** Year string, e.g. "2025". */
  year: string;
  /** Award title, e.g. "International Photography Awards". */
  title: string;
  /** Kind / status, e.g. "Honourable Mention & Official Selection", "Finalist". */
  kind?: string;
}

/** Publication entry (press, print feature, zine) shown on the About page when populated. */
export interface Publication {
  /** Year string, e.g. "2026". */
  year: string;
  /** Publication or piece title, e.g. "Arxipelag — Issue 4". */
  title: string;
  /** Kind / format, e.g. "Print feature", "Interview". */
  kind?: string;
}

/** Recognition entry (selection, nomination, listing) shown on the About page when populated. */
export interface Recognition {
  /** Year string, e.g. "2026". */
  year: string;
  /** What the recognition was for. */
  title: string;
  /** Kind / status, e.g. "Shortlisted", "Selected". */
  kind?: string;
}

/**
 * Rule that orders the four list sections on the About page.
 * 'recent' = newest entry first (top to bottom, new to old); 'alpha' = by section name.
 */
export type AboutSectionSort = 'recent' | 'alpha';

export interface PortfolioData {
  aboutMe: string;
  projects: Project[];
  /** Data URL for About page right-side photo. */
  aboutImage?: string;
  /** Flexible list of contact methods (label + value). Replaces contact for new data. */
  contactMethods?: ContactMethod[];
  /** Exhibitions list (year/venue/kind). Renders on the About page only when populated. */
  exhibitions?: Exhibition[];
  /** Awards list. Renders on the About page only when populated. */
  awards?: Award[];
  /** Publications list. Renders on the About page only when populated. */
  publications?: Publication[];
  /** Recognition entries. Renders on the About page only when populated. */
  recognition?: Recognition[];
  /** How the About page orders its list sections. Defaults to 'recent'. */
  aboutSectionSort?: AboutSectionSort;
  /** @deprecated Use contactMethods. Kept for backward compatibility; migrate at read time. */
  contact?: { email: string; instagramUrl?: string };
  /** @deprecated Use recognition. Rows saved before the rename; migrated at read time. */
  recognitions?: Recognition[];
}
