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
  { id: 'sukumar-balakrishnan', name: 'Sukumar Balakrishnan', category: 'Website Development', images: ['/images/sukumarbalakrishnan1.jpeg', '/images/sukumarbalakrishnan2.jpeg', '/images/sukumarbalakrishnan3.jpeg'], url: 'https://sukumar-balakrishnan.vercel.app/' },
  { id: 'ciel-media', name: 'Ciel Media', category: 'Website Development', images: ['/images/cielmedia1.jpeg', '/images/cielmedia2.jpeg', '/images/cielmedia3.jpeg'], url: 'https://www.cielmedia.in' },
  { id: 'ciel-ai', name: 'Ciel AI', category: 'Website Development', images: ['/images/cielai1.png', '/images/cielai2.png', '/images/cielai3.png'], url: 'https://www.cielinfitech.com/' },
  { id: 'moto-modz', name: 'Moto Modz', category: 'Website Development', images: ['/images/motomodz1.png', '/images/motomodz2.png', '/images/motomodz3.png'], url: 'https://www.motomodz.com/' },
  { id: 'justdetox-in', name: 'JustDetox.in', category: 'Website Development', images: ['/images/justdetox.png', '/images/justdetox2.png', '/images/justdetox3.png'], url: 'https://justdetox.in/' },
  { id: 'star-turmerics', name: 'Star Turmerics', category: 'Website Development', images: ['/images/starturmerics1.png', '/images/starturmerics2.png', '/images/starturmerics3.png'], url: 'https://www.starturmerics.com/' },
  { id: 'kora-exports', name: 'Kora Exports', category: 'Website Development', images: ['/images/koraexports1.png', '/images/koraexports2.png', '/images/koraexports3.png'], url: 'https://www.koraexports.com/' },
  { id: 'coloured-interiors', name: 'Coloured Interiors', category: 'Website Development', images: ['/images/coloredinteriors1.png', '/images/coloredinteriors2.png', '/images/coloredinteriors3.png'], url: 'https://www.coloredinteriordesign.com/' },
  { id: 'fixit-app', name: 'Fixit', category: 'App Development & UI/UX', images: ['/images/fixitapp3.jpeg', '/images/fixitapp1.jpeg', '/images/fixitapp2.png'], url: 'https://www.thefixit.in/' },
  { id: 'fixit-partner', name: 'Fixit Partner', category: 'App Development & UI/UX', images: ['/images/fixitpartner3.jpeg', '/images/fixitpartner2.jpeg', '/images/fixitpartner1.jpeg'], url: 'https://www.thefixit.in' },
  { id: 'astrodate-app', name: 'Astrodate', category: 'App Development & UI/UX', images: ['/images/astrodateapp1.jpeg', '/images/astrodateapp2.jpeg', '/images/astrodateapp3.jpeg'], url: 'https://www.astrodate.in/' },
];

export const techCategories: TechCategory[] = ['Website Development', 'App Development & UI/UX'];