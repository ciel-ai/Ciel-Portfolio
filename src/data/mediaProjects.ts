export type MediaKind = 'Production (Films)' | 'Podcasts';

export interface MediaProject {
  id: string;
  title: string;
  kind: MediaKind;
  embedUrl?: string;
  logo?: string;
}

export const productionProjects: MediaProject[] = [
  {
    id: 'confession', title: 'Confession', kind: 'Production (Films)',
    embedUrl: 'https://www.youtube.com/embed/m_pPnMxP0eU?si=bsYTSADq49JKLip2'
  },
  {
    id: 'tow-kaadhal', title: 'Tow Kaadhal', kind: 'Production (Films)',
    embedUrl: 'https://www.youtube.com/embed/p-c_Af2kBto?si=0q24cRf1LnAnjb04'
  },
  {
    id: 'unblock-me', title: 'Unblock Me', kind: 'Production (Films)',
    embedUrl: 'https://www.youtube.com/embed/OVeuWEXkwB4?si=ZoW6XW25jirGrBNK'
  },
  {
    id: 'kaadhal-overdose', title: 'Kaadhal Overdose', kind: 'Production (Films)',
    embedUrl: 'https://www.youtube.com/embed/Vf_WzrcWiP4?si=6oveQPyQoSYUmNMD'
  },
];

export const podcastProjects: MediaProject[] = [
  { id: 'ticket-9', title: 'Ticket 9', kind: 'Podcasts', embedUrl: 'https://www.youtube.com/embed/U4Xmxd2A4YM?si=w1FkA4myVuyocIP6' },
  { id: '9-skin', title: '9 Skin', kind: 'Podcasts', embedUrl: 'https://www.youtube.com/embed/q-M-tMMGTFw?si=B3iUb_P5MbVNTpZM' },
  { id: 'office-team', title: 'Office Team', kind: 'Podcasts', embedUrl: 'https://www.youtube.com/embed/2fv-eBPOoq0?si=TMp_FzlFh_P16sm6' },
  { id: 'twisty-tails', title: 'Twisty Tails', kind: 'Podcasts', embedUrl: 'https://www.youtube.com/embed/T_W15NViTl8?si=srEpHyj8B8kWuomR' },
  { id: 'prashant-varma', title: 'Prashant Varma', kind: 'Podcasts', embedUrl: 'https://www.youtube.com/embed/8G5PmvgQJiw?si=Of2ndw5qrgaMfWw1' },
];
