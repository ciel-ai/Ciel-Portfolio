export type MediaKind = 'Production (Films)' | 'Podcasts';

export interface MediaProject {
  id: string;
  title: string;
  kind: MediaKind;
  embedUrl?: string;
}

export const productionProjects: MediaProject[] = [
  { id: 'confession', title: 'Confession', kind: 'Production (Films)' },
  { id: 'tow-kaadhal', title: 'Tow Kaadhal', kind: 'Production (Films)' },
  { id: 'unblock-me', title: 'Unblock Me', kind: 'Production (Films)' },
  { id: 'kaadhal-overdose', title: 'Kaadhal Overdose', kind: 'Production (Films)' }
];

export const podcastProjects: MediaProject[] = [
  { id: 'ticket-9', title: 'Ticket 9', kind: 'Podcasts' },
  { id: '9-skin', title: '9 Skin', kind: 'Podcasts' },
  { id: 'office-team', title: 'Office Team', kind: 'Podcasts' },
  { id: 'twisty-tails', title: 'Twisty Tails', kind: 'Podcasts' },
  { id: 'prashant-varma', title: 'Prashant Varma', kind: 'Podcasts' }
];
