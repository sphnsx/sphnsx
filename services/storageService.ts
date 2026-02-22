
import { PortfolioData, Project } from '../types';
import { INITIAL_DATA } from '../constants';

export const STORAGE_KEY = 'silvia_jiang_portfolio_v1';

export const getPortfolioData = (): PortfolioData => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : INITIAL_DATA;
};

export const updateAboutMe = (text: string) => {
  const data = getPortfolioData();
  data.aboutMe = text;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addProject = (project: Project) => {
  const data = getPortfolioData();
  data.projects.unshift(project);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const updateProject = (id: string, project: Project) => {
  const data = getPortfolioData();
  const index = data.projects.findIndex(p => p.id === id);
  if (index === -1) return;
  data.projects[index] = { ...project, id };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const deleteProject = (id: string) => {
  const data = getPortfolioData();
  data.projects = data.projects.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

/** Reorder projects to match the order of projectIds. Missing ids are appended. */
export const reorderProjects = (projectIds: string[]) => {
  const data = getPortfolioData();
  const byId = new Map(data.projects.map(p => [p.id, p]));
  const ordered = projectIds.map(id => byId.get(id)).filter((p): p is Project => p != null);
  const rest = data.projects.filter(p => !projectIds.includes(p.id));
  data.projects = [...ordered, ...rest];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
