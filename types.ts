
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; 
  gallery: string[]; 
  year: string;
}

export interface PortfolioData {
  aboutMe: string;
  projects: Project[];
}
