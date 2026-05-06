export type Service = 'SMM' | 'Influencer' | 'Performance' | 'FMCG' | 'Tech';

export interface Client {
  id: string;
  name: string;
  services: Service[];
  videos: [string?, string?];
  description?: string;
  caseStudyUrl?: string;
}

export const clients: Client[] = [
  { id: 'naturals-salon', name: 'Naturals Salon', services: ['SMM', 'Influencer'], videos: ['', ''] },
  { id: 'nails-beyond', name: 'Nails & Beyond', services: ['SMM', 'Influencer'], videos: ['', ''] },
  { id: 'star-secrets', name: 'Star Secrets', services: ['SMM', 'Influencer'], videos: ['', ''] },
  { id: 'zenderma', name: 'Zenderma Aesthetic Clinic', services: ['SMM', 'Influencer'], videos: ['', ''] },
  { id: 'zurls-salon', name: 'Zurls Salon', services: ['SMM', 'Influencer'], videos: ['', ''] },
  {
    id: 'thambi-shopping',
    name: 'Thambi Shopping',
    services: ['SMM', 'Influencer', 'Performance'],
    videos: ['', '']
  },
  { id: 'superior-cars', name: 'Superior Cars', services: ['SMM', 'Performance'], videos: ['', ''] },
  { id: 'chennai-pest', name: 'Chennai Pest Control Services', services: ['SMM'], videos: ['', ''] },
  { id: 'kwality-plywood', name: 'Kwality Plywood', services: ['SMM', 'Performance'], videos: ['', ''] },
  { id: 'osera-living', name: 'Osera Living', services: ['SMM', 'Performance'], videos: ['', ''] },
  { id: 'inti-bhojanam', name: 'IntiBhojanam', services: ['SMM', 'Influencer'], videos: ['', ''] },
  { id: 'dion-ev', name: 'Dion EV', services: ['Influencer', 'Performance'], videos: ['', ''] },
  { id: 'justdetox', name: 'Justdetox', services: ['Influencer', 'Performance'], videos: ['', ''] },
  { id: 'aviation-academy', name: 'Aviation Academy', services: ['Influencer', 'Performance'], videos: ['', ''] },
  { id: 'newtus', name: 'Newtus Services', services: ['Influencer'], videos: ['', ''] },
  { id: 'moto-modz', name: 'Moto Modz', services: ['Performance'], videos: ['', ''] },
  { id: 'hitha-wellness', name: 'Hitha Wellness', services: ['Performance'], videos: ['', ''] },
  { id: 'cookscape', name: 'Cookscape Interiors', services: ['Performance'], videos: ['', ''] },
  { id: 'dentobac', name: 'Dentobac', services: ['FMCG'], videos: ['', ''] },
  { id: 'lakahfay', name: 'LakahFay', services: ['FMCG'], videos: ['', ''] },
  { id: 'president', name: 'President', services: ['FMCG'], videos: ['', ''] }
];

export const serviceMeta: Record<
  Service,
  {
    label: string;
    shortLabel: string;
    cssVar: string;
    textOnAccent: 'ink' | 'cream';
  }
> = {
  SMM: {
    label: 'Social Media Management',
    shortLabel: 'SMM',
    cssVar: 'var(--ciel-logo-cyan)',
    textOnAccent: 'ink'
  },
  Influencer: {
    label: 'Influencer Marketing',
    shortLabel: 'INFLUENCER',
    cssVar: 'var(--ciel-logo-blue)',
    textOnAccent: 'ink'
  },
  Performance: {
    label: 'Performance Marketing',
    shortLabel: 'PERFORMANCE',
    cssVar: 'var(--ciel-logo-purple)',
    textOnAccent: 'ink'
  },
  FMCG: {
    label: 'FMCG',
    shortLabel: 'FMCG',
    cssVar: 'var(--ciel-logo-violet)',
    textOnAccent: 'ink'
  },
  Tech: {
    label: 'Tech',
    shortLabel: 'TECH',
    cssVar: 'var(--ciel-logo-violet)',
    textOnAccent: 'ink'
  }
};
