
import { PortfolioData, Project } from '../types';
import { INITIAL_DATA } from '../constants';

const STORAGE_KEY = 'silvia_jiang_portfolio_v1';

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

export const deleteProject = (id: string) => {
  const data = getPortfolioData();
  data.projects = data.projects.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
