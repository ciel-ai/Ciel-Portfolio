import { m, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { Client, Service } from '../data/clients';
import LogoPlaceholder from './LogoPlaceholder';
import ServiceTag from './ServiceTag';
import VideoPlaceholder from './VideoPlaceholder';

interface BrandCardProps {
  name: string;
  services: Service[];
  videos: Client['videos'];
  accent: string;
  logo?: string;
  website?: string;
}

export default function BrandCard({ name, services, videos, accent, logo, website }: BrandCardProps) {
  const reduceMotion = useReducedMotion();
  const slots: [string | undefined, string | undefined] = [videos[0], videos[1]];

  return (
    <m.article
      className="group flex h-full min-w-0 flex-col border-[4px] border-ciel-ink bg-ciel-cream p-4 shadow-brutal-sm transition-shadow duration-150 sm:p-5 lg:p-6 lg:shadow-brutal"
      style={{ '--card-accent': accent } as CSSProperties}
      whileHover={reduceMotion ? undefined : { y: -6, rotate: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <div className="mb-5 flex min-h-[6rem] items-start justify-between gap-4 sm:min-h-[7rem]">
        <div className="min-w-0">
          <h3 className="card-title font-display text-[clamp(1.55rem,3.1vw,2.45rem)] uppercase leading-[0.93] text-ciel-ink">
            {name}
          </h3>
          <div className="mt-4 h-[5px] w-24 bg-ciel-ink" />
        </div>
        <LogoPlaceholder name={name} accent={accent} logo={logo} website={website} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {slots.map((videoUrl, index) => (
          <VideoPlaceholder
            key={`${name}-video-${index + 1}`}
            url={videoUrl}
            label={`Video ${index + 1}`}
            accent={accent}
            title={name}
          />
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {services.map((service) => (
          <ServiceTag key={service} service={service} />
        ))}
      </div>
    </m.article>
  );
}