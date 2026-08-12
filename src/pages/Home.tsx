import { ArrowRight, Megaphone, Mic2, MonitorCog, Video } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  {
    to: '/digital-marketing',
    label: 'Digital Marketing',
    copy: 'Social, influencer, performance, and FMCG work arranged as hard proof.',
    icon: Megaphone,
    color: 'var(--ciel-logo-cyan)',
    rotate: '-1deg'
  },
  {
    to: '/tech',
    label: 'Tech',
    count: 'Future Stack',
    copy: 'A scaffold for digital products, platforms, automations, and experiments.',
    icon: MonitorCog,
    color: 'var(--ciel-logo-blue)',
    rotate: '1deg'
  },
  {
    to: '/production',
    label: 'Production',
    copy: 'Film projects reserved with embed slots for finished releases, trailers, and reels.',
    icon: Video,
    color: 'var(--ciel-logo-purple)',
    rotate: '1deg'
  },
  {
    to: '/podcasts',
    label: 'Podcasts',
    copy: 'Podcast properties structured for embedded episodes and show assets.',
    icon: Mic2,
    color: 'var(--ciel-logo-cyan)',
    rotate: '-1deg'
  }
];

export default function Home() {
  return (
    <main>
      <section className="noise-surface border-b-[5px] border-ciel-ink bg-ciel-primary px-4 py-12 text-ciel-cream sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 inline-block border-[4px] border-ciel-ink bg-ciel-purple px-3 py-2 font-display text-xs uppercase text-ciel-ink shadow-[4px_4px_0_var(--ciel-ink)]">
            Portfolio // Full Index
          </p>
          <h1 className="font-display text-[clamp(3.8rem,16vw,13rem)] uppercase leading-[0.78] tracking-normal">
            CIEL
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl">
            A bold client portfolio for a digital marketing and technology agency built to scale without losing its edge.
          </p>
        </div>
      </section>

      <section className="bg-ciel-primary px-4 py-12 text-ciel-cream sm:px-6 lg:px-8 lg:py-20" aria-labelledby="portfolio-paths">
        <div className="mx-auto max-w-[1400px]">
          <h2 id="portfolio-paths" className="sr-only">
            Portfolio paths
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {tiles.map(({ to, label, count, copy, icon: Icon, color, rotate }) => (
              <Link
                key={to}
                to={to}
                className="brutal-tile group min-h-[320px] min-w-0 bg-ciel-cream p-6 text-ciel-ink sm:p-8 lg:min-h-[430px]"
                style={{ '--tile-accent': color, '--tile-rotate': rotate } as CSSProperties}
              >
                <span className="mb-10 inline-grid h-16 w-16 place-items-center border-[4px] border-ciel-ink bg-[var(--tile-accent)] shadow-[5px_5px_0_var(--ciel-ink)]">
                  <Icon className="h-9 w-9" />
                </span>
                <span className="card-title block font-display text-[clamp(2.35rem,5vw,5.15rem)] uppercase leading-[0.86]">
                  {label}
                </span>
                <span className="mt-6 inline-flex border-[4px] border-ciel-ink bg-[var(--tile-accent)] px-3 py-2 font-display text-xs uppercase shadow-[4px_4px_0_var(--ciel-ink)]">
                  {count}
                </span>
                <span className="mt-6 block max-w-xl text-xl font-bold leading-snug">{copy}</span>
                <span className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase">
                  Open Section <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}