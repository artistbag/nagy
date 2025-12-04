export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ExhibitionItem {
  id: string;
  title: string;
  gallery: string;
  date: string;
  location: string;
  type: 'Solo' | 'Group' | 'Project';
}

export enum RoutePath {
  HOME = '/',
  ABOUT = '/about',
  WORKS = '/works',
  BOOKS = '/books',
  PROJECTS = '/projects',
  EXHIBITIONS = '/exhibitions',
  CONTACT = '/contact',
}

export interface NavLink {
  label: string;
  path: RoutePath;
}