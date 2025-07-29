export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  [category: string]: string[];
}

export interface Article {
  title: string;
  platform: string;
  url: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory;
  articles: Article[];
  clients: Client[];
}

export interface NavigationItem {
  id: string;
  label: string;
}
