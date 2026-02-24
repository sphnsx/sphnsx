
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
}

/** Single contact method: user-editable label (e.g. "Email", "Instagram") and value (URL or address). */
export interface ContactMethod {
  label: string;
  value: string;
}

export interface PortfolioData {
  aboutMe: string;
  projects: Project[];
  /** Data URL for About page right-side photo. */
  aboutImage?: string;
  /** Flexible list of contact methods (label + value). Replaces contact for new data. */
  contactMethods?: ContactMethod[];
  /** @deprecated Use contactMethods. Kept for backward compatibility; migrate at read time. */
  contact?: { email: string; instagramUrl?: string };
}
