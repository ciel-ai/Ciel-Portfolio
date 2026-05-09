export type TechCategory = 'Website Development' | 'App Development & UI/UX';

export interface TechProject {
  id: string;
  name: string;
  category: TechCategory;
  images: [string?, string?, string?];
  url?: string;
}

export const techProjects: TechProject[] = [
  { id: 'greentree-enviro-energy', name: 'Greentree Enviro Energy', category: 'Website Development', images: ['/images/greentreeenviro1.png', '/images/greentreeenviro2.png', '/images/greentreeenviro3.png'], url: 'https://greentreeenviro.com/' },
  { id: 'fixit-web', name: 'Fixit', category: 'Website Development', images: ['/images/fixit1.png', '/images/fixit2.png', '/images/fixit3.png'], url: 'https://www.thefixit.in' },
  { id: 'astrodate-web', name: 'Astrodate', category: 'Website Development', images: ['/images/astrodate1.png', '/images/astrodate2.png', '/images/astrodate3.png'], url: 'https://www.astrodate.in/' },
  { id: 'bell-needles', name: 'Bell Needles', category: 'Website Development', images: ['/images/bellneedles1.png', '/images/bellneedles2.png', '/images/bellneedles3.png'], url: 'https://www.bellneedles.com' },
  { id: 'sukumar-balakrishnan', name: 'Sukumar Balakrishnan', category: 'Website Development', images: ['/images/sukumarbalakrishnan1.png', '/images/sukumarbalakrishnan2.png', '/images/sukumarbalakrishnan3.png'], url: 'https://sukumarbalakrishnan.com/' },
  { id: 'ciel-media', name: 'Ciel Media', category: 'Website Development', images: ['', '', ''], url: '' },
  { id: 'ciel-ai', name: 'Ciel AI', category: 'Website Development', images: ['/images/cielai1.png', '/images/cielai2.png', '/images/cielai3.png'], url: 'https://www.cielinfitech.com/' },
  { id: 'moto-modz', name: 'Moto Modz', category: 'Website Development', images: ['', '', ''], url: '' },
  { id: 'justdetox-in', name: 'JustDetox.in', category: 'Website Development', images: ['/images/justdetox.png', '/images/justdetox2.png', '/images/justdetox3.png'], url: 'https://justdetox.in/' },
  { id: 'fixit-app', name: 'Fixit', category: 'App Development & UI/UX', images: ['/images/screenshot_01_1242x2688.png', '/images/screenshot_02_1242x2688.png', '/images/screenshot_03_1242x2688.png'], url: 'https://www.thefixit.in/' },
  { id: 'fixit-partner', name: 'Fixit Partner', category: 'App Development & UI/UX', images: ['/images/fixitpartner1.jpeg', '/images/fixitpartner2.jpeg', '/images/fixitpartner3.jpeg'], url: 'https://www.thefixit.in' },
  { id: 'astrodate-app', name: 'Astrodate', category: 'App Development & UI/UX', images: ['/images/astrodateapp1.jpeg', '/images/astrodateapp2.jpeg', '/images/astrodateapp3.jpeg'], url: 'https://www.astrodate.in/' },
  { id: 'healthcare-app', name: 'Healthcare App', category: 'App Development & UI/UX', images: ['', '', ''], url: '' },
  { id: 'task-manager-app', name: 'Task Manager App', category: 'App Development & UI/UX', images: ['', '', ''], url: '' },
];

export const techCategories: TechCategory[] = ['Website Development', 'App Development & UI/UX'];