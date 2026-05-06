export type TechCategory = 'Website Development' | 'App Development & UI/UX';

export interface TechProject {
  id: string;
  name: string;
  category: TechCategory;
  images: [string?, string?, string?];
}

export const techProjects: TechProject[] = [
  { id: 'greentree-enviro-energy', name: 'Greentree Enviro Energy', category: 'Website Development', images: ['', '', ''] },
  { id: 'fixit-web', name: 'Fixit', category: 'Website Development', images: ['', '', ''] },
  { id: 'astrodate-web', name: 'Astrodate', category: 'Website Development', images: ['', '', ''] },
  { id: 'bell-needles', name: 'Bell Needles', category: 'Website Development', images: ['', '', ''] },
  { id: 'sukumar-balakrishnan', name: 'Sukumar Balakrishnan', category: 'Website Development', images: ['', '', ''] },
  { id: 'ciel-media', name: 'Ciel Media', category: 'Website Development', images: ['', '', ''] },
  { id: 'ciel-ai', name: 'Ciel AI', category: 'Website Development', images: ['', '', ''] },
  { id: 'moto-modz', name: 'Moto Modz', category: 'Website Development', images: ['', '', ''] },
  { id: 'justdetox-in', name: 'JustDetox.in', category: 'Website Development', images: ['', '', ''] },
  { id: 'fixit-app', name: 'Fixit', category: 'App Development & UI/UX', images: ['', '', ''] },
  { id: 'fixit-partner', name: 'Fixit Partner', category: 'App Development & UI/UX', images: ['', '', ''] },
  { id: 'feuhrer-nbfc', name: 'Feuhrer NBFC', category: 'App Development & UI/UX', images: ['', '', ''] },
  { id: 'astrodate-app', name: 'Astrodate', category: 'App Development & UI/UX', images: ['', '', ''] },
  { id: 'healthcare-app', name: 'Healthcare App', category: 'App Development & UI/UX', images: ['', '', ''] },
  { id: 'task-manager-app', name: 'Task Manager App', category: 'App Development & UI/UX', images: ['', '', ''] }
];

export const techCategories: TechCategory[] = ['Website Development', 'App Development & UI/UX'];
