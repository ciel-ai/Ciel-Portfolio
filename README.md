# CIEL Portfolio

Production-grade React + Vite portfolio site for CIEL, a digital marketing and tech agency. The interface commits to a Neo Brutalism system: thick ink borders, hard offset shadows, oversized display type, visible structure, and high-contrast blocks based on the CIEL logo colors.

## Brand Palette

- Primary Cyan: `#12E6E6`
- Primary Blue: `#1E7BFF`
- Primary Purple: `#7B2CFF`
- Accent Purple: `#A145FF`
- Black: `#000000`

## Stack

- React 18 + Vite
- TypeScript strict mode
- Tailwind CSS with CIEL logo color CSS variables
- React Router v6 with lazy route chunks
- Framer Motion for restrained section/card motion
- lucide-react icons
- Local component state only

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Add A New Client

Edit `src/data/clients.ts` and append one object to `clients`.

```ts
{
  id: 'new-brand',
  name: 'New Brand',
  services: ['SMM', 'Performance'],
  videos: ['https://youtu.be/example-one', 'https://youtu.be/example-two']
}
```

The Digital Marketing page renders every brand once. Service tags inside each card come directly from `client.services`, so no page component update is needed when adding a brand to an existing service.

## Add A New Service

1. Extend the `Service` union in `src/data/clients.ts`.
2. Add a matching entry to `serviceMeta` with label, short label, accent CSS variable, and text contrast.
3. Add the new service key to any client that should display that service tag.
4. If the service should appear in the Digital Marketing service key, add it to `digitalServices` in `src/pages/DigitalMarketing.tsx`.

Service tags and brand cards render from the same data, so brands that appear in multiple segments automatically show every applicable tag.

## Swap Placeholders For Real Videos

Each client supports exactly two reserved video slots:

```ts
videos: ['https://youtu.be/video-id', '/videos/local-case-study.mp4']
```

`VideoPlaceholder` lazy-loads YouTube embeds and direct video files with IntersectionObserver. Empty strings keep the brutalist placeholder while preserving a 16:9 box to prevent layout shift.

## Content Files

- `src/data/clients.ts`: clients, service types, service labels, and service colors
- `src/components/BrandCard.tsx`: reusable portfolio card
- `src/components/ServiceTag.tsx`: reusable service label pills
- `src/components/VideoPlaceholder.tsx`: lazy media slot
- `src/data/techProjects.ts`: tech portfolio project cards with three image slots
- `src/data/mediaProjects.ts`: production and podcast cards with embed placeholders
- `src/styles/globals.css`: CIEL logo color variables and brutalist primitives

## Performance Notes

- Routes are code-split with `React.lazy` and `Suspense`.
- Media boxes reserve aspect ratio before embeds load.
- Tailwind scans `index.html` and `src/**/*.{ts,tsx}` for unused class removal.
- Font packages load local WOFF2 assets with `font-display: swap`.
- Motion respects `prefers-reduced-motion`.
