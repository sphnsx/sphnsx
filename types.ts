
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  year: string;
  /** Width/height of cover image; used for default section height on home. */
  coverAspectRatio?: number;
  /** 1 = one column, 2 = two columns; default (undefined) = 1. */
  galleryColumns?: 1 | 2;
}

export interface PortfolioData {
  aboutMe: string;
  projects: Project[];
}
