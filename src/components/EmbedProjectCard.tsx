import { Link2, Play } from 'lucide-react';
import { m, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { MediaProject } from '../data/mediaProjects';

interface EmbedProjectCardProps {
  project: MediaProject;
  index: number;
  accent: string;
}

export default function EmbedProjectCard({ project, index, accent }: EmbedProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.article
      className="group flex h-full min-w-0 flex-col border-[5px] border-ciel-ink bg-ciel-cream p-4 text-ciel-ink shadow-brutal-sm sm:p-5 lg:p-6 lg:shadow-brutal"
      style={{ '--card-accent': accent } as CSSProperties}
      whileHover={reduceMotion ? undefined : { y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <div className="mb-4 flex min-h-[6.75rem] items-start gap-4 sm:min-h-[7.5rem]">
        <div className="min-w-0">
          <p className="mb-3 inline-block border-[3px] border-ciel-ink px-2 py-1 font-display text-[0.62rem] uppercase" style={{ backgroundColor: accent }}>
            {project.kind}
          </p>
          <h3 className="card-title font-display text-[clamp(1.9rem,3.2vw,3rem)] uppercase leading-[0.9]">{project.title}</h3>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden border-[4px] border-ciel-ink bg-ciel-primary" style={{ boxShadow: `4px 4px 0 ${accent}` }}>
        {project.embedUrl ? (
          <iframe
            className="h-full w-full"
            src={project.embedUrl}
            title={`${project.title} embed`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,var(--ciel-primary)_0_49%,var(--ciel-ink)_49%_51%,var(--ciel-logo-blue)_51%_100%)] p-4 text-center">
            <span className="grid h-14 w-14 place-items-center border-[4px] border-ciel-ink bg-ciel-accent text-ciel-ink shadow-[4px_4px_0_var(--ciel-logo-purple)]">
              <Play className="h-7 w-7 fill-current" />
            </span>
            <span className="inline-flex items-center gap-2 border-[3px] border-ciel-ink bg-ciel-cream px-3 py-2 font-display text-[0.68rem] uppercase text-ciel-ink">
              <Link2 className="h-4 w-4" />
              Embed Link Placeholder
            </span>
          </div>
        )}
      </div>
    </m.article>
  );
}