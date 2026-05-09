export type Service = 'SMM' | 'Influencer' | 'Performance' | 'FMCG' | 'Tech';

export interface Client {
  id: string;
  name: string;
  services: Service[];
  videos: [string?, string?];
  logo?: string;
  website?: string;
  description?: string;
  caseStudyUrl?: string;
}

export const clients: Client[] = [
  { id: 'naturals-salon', name: 'Naturals Salon', services: ['SMM', 'Influencer'], logo: '/logos/naturals-salon1.jpg', website: 'https://www.naturalssalon.com', videos: ['https://www.youtube.com/shorts/ASa1q8K1WgY', 'https://www.youtube.com/shorts/chHAtSGghOw'] },
  { id: 'nails-beyond', name: 'Nails & Beyond', services: ['SMM', 'Influencer'], logo: '/logos/Nails&beyond.png', website: 'https://salons.nailsnbeyond.in/', videos: ['https://youtube.com/shorts/Dmig17AaVds?si=ITt5bd0_vuROvCVz', 'https://youtube.com/shorts/O9usYIMWfdk?si=zHpXKEhzzrxxDXO9'] },
  { id: 'star-secrets', name: 'Star Secrets', services: ['SMM', 'Influencer'], logo: '/logos/naturals-salon1.jpg', website: 'https://www.naturalssalon.com', videos: ['https://youtube.com/shorts/Qwwf-zmCjMw?si=IQb-qpJkLQq94u48', 'https://youtube.com/shorts/KaXgf3EBQTw?si=6-INctzVXLaoJq3n'] },
  { id: 'zenderma', name: 'Zenderma Aesthetic Clinic', services: ['SMM', 'Influencer'], logo: '/logos/zenderma.png', website: 'https://zenderma.clinic/', videos: ['https://youtube.com/shorts/Tz8stOLzarM?si=D4kc6yS3rx0aJWEo', 'https://youtube.com/shorts/gclK_424sYU?si=0yHWYZDdap1hmDLm'] },
  { id: 'zurls-salon', name: 'Zurls Salon', services: ['SMM', 'Influencer'], logo: '/logos/zurls-salon.png', website: 'https://www.zurlsthesalon.com/', videos: ['https://youtube.com/shorts/NxXyAUD7Mls?si=HiShrIlvBjsKMy26', 'https://youtube.com/shorts/9dghG-G_ZFg?si=1NnmBk-2kermLhQ0'] },
  {
    id: 'thambi-shopping',
    name: 'Thambi Shopping',
    services: ['SMM', 'Influencer', 'Performance'],
    logo: '/logos/thambi-shopping.png',
    website: '',
    videos: ['https://youtube.com/shorts/mohnVsfYO5s?si=s1cfhhjIjBD76Py9', 'https://youtube.com/shorts/USO1tIo8ZAI?si=6Goo1C8lUQ4j-kuw']
  },
  { id: 'superior-cars', name: 'Superior Cars', services: ['SMM', 'Performance'], logo: '/logos/superior-cars.png', website: '', videos: ['https://youtube.com/shorts/7XPSIlgZ0JY?si=ud1ow28u1jyxoG4E', 'https://youtube.com/shorts/1QCk10qMkqA?si=ipLug-qmJTWqNSID'] },
  { id: 'chennai-pest', name: 'Chennai Pest Control Services', services: ['SMM'], logo: '/logos/chennai-pest.png', website: '', videos: ['https://youtube.com/shorts/--4APQOmxLw?si=JDZNAmvEZDMACNTH', 'https://youtube.com/shorts/aKZZ3zWudFM?si=etRGmTbNoW9Og_iI'] },
  { id: 'kwality-plywood', name: 'Kwality Plywood', services: ['SMM', 'Performance'], logo: '/logos/kwality-plywood.png', website: '', videos: ['https://youtube.com/shorts/pbJpCEkJwEE?si=NGg7oOJjecvA_wkm', 'https://youtube.com/shorts/Sz3upKpH0Ac?si=xjm1ZEVJr9lAYchD'] },
  { id: 'osera-living', name: 'Osera Living', services: ['SMM', 'Performance'], logo: '/logos/osera-living.png', website: '', videos: ['https://youtube.com/shorts/16cLKB85AE0?si=o9NnVFb8EdaV2GB8', 'https://youtube.com/shorts/W3TawUjXW-s?si=GDxXTIZB9fXt-yUR'] },
  { id: 'inti-bhojanam', name: 'IntiBhojanam', services: ['SMM', 'Influencer'], logo: '/logos/inti-bhojanam.png', website: '', videos: ['https://youtube.com/shorts/hdAUJLuGuU8?si=XTYoyO-ox2utPTZQ', 'https://youtube.com/shorts/8Bp3iJHQBmE?si=SY36N3fZyzczNWqX'] },
  { id: 'dion-ev', name: 'Dion EV', services: ['Influencer', 'Performance'], logo: '/logos/dion-ev.jpg', website: 'https://www.dionpower.in/', videos: ['https://youtube.com/shorts/vbJtPofi5eQ?si=qbFwwiGbPjLQTADk', 'https://youtube.com/shorts/QBulVykGL-g?si=QO8Swm75lbhjV3pS'] },
  { id: 'just detox', name: 'Just detox', services: ['Influencer', 'Performance'], logo: '/logos/justdetox.webp', website: 'https://justdetox.in/', videos: ['https://youtube.com/shorts/1ZHauJuj0WQ?si=3LQB4ZT95yrLqSFP', 'https://youtube.com/shorts/SqvzoE8DVRM?si=FETJJlAe9yknHBZA'] },
  { id: 'aviation-academy', name: 'Aviation Academy', services: ['Influencer', 'Performance'], logo: '/logos/aviation-academy.png', website: '', videos: ['https://youtube.com/shorts/qM3BdpGhFH0?si=pemcyGKse889qNlU', 'https://youtube.com/shorts/ydxPTXuyz7k?si=v-TUHpHpTLLUWVBL'] },
  { id: 'newtus', name: 'Newtus Services', services: ['Influencer'], logo: '/logos/newtus.png', website: '', videos: ['https://youtube.com/shorts/iES5Jl2snto?si=CkVSwJ_PAcD95cqB', 'https://youtube.com/shorts/y_dNvsx7sXk?si=mj40BIa_3vOdA8By'] },
  { id: 'moto-modz', name: 'Moto Modz', services: ['Performance'], logo: '/logos/moto-modz.png', website: '', videos: ['', ''] },
  { id: 'hitha-wellness', name: 'Hitha Wellness', services: ['Performance'], logo: '/logos/hitha-wellness.png', website: '', videos: ['', ''] },
  { id: 'cookscape', name: 'Cookscape Interiors', services: ['Performance'], logo: '/logos/cookscape.png', website: 'https://www.cookscape.com', videos: ['', ''] },
  { id: 'dentobac', name: 'Dentobac', services: ['FMCG'], logo: '/logos/dentobac.png', website: '', videos: ['', ''] },
  { id: 'lakahfay', name: 'LakahFay', services: ['FMCG'], logo: '/logos/lakahfay.png', website: '', videos: ['', ''] },
  { id: 'president', name: 'President', services: ['FMCG'], logo: '/logos/president.png', website: '', videos: ['', ''] }
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