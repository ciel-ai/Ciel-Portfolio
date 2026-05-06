import { m, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { TechProject } from '../data/techProjects';
import ImagePlaceholder from './ImagePlaceholder';
import LogoPlaceholder from './LogoPlaceholder';

interface TechProjectCardProps {
  project: TechProject;
  index: number;
}

export default function TechProjectCard({ project, index }: TechProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const accent = project.category === 'Website Development' ? 'var(--ciel-logo-cyan)' : 'var(--ciel-logo-purple)';

  return (
    <m.article
      className="group flex h-full min-w-0 flex-col border-[5px] border-ciel-ink bg-ciel-cream p-4 text-ciel-ink shadow-brutal-sm sm:p-5 lg:p-6 lg:shadow-brutal"
      style={{ '--card-accent': accent } as CSSProperties}
      whileHover={reduceMotion ? undefined : { y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
    >
      <div className="mb-4 flex min-h-[7rem] items-start justify-between gap-4 sm:min-h-[7.75rem]">
        <div className="min-w-0">
          <p className="mb-3 inline-block border-[3px] border-ciel-ink px-2 py-1 font-display text-[0.62rem] uppercase" style={{ backgroundColor: accent }}>
            {project.category}
          </p>
          <h3 className="card-title font-display text-[clamp(1.75rem,3vw,2.65rem)] uppercase leading-[0.9]">{project.name}</h3>
        </div>
        <LogoPlaceholder name={project.name} accent={accent} />
      </div>

      <div className="grid gap-4">
        <ImagePlaceholder src={project.images[0]} label="Image 1" title={project.name} accent={accent} featured />
        <div className="grid gap-4 sm:grid-cols-2">
          <ImagePlaceholder src={project.images[1]} label="Image 2" title={project.name} accent={accent} />
          <ImagePlaceholder src={project.images[2]} label="Image 3" title={project.name} accent={accent} />
        </div>
      </div>
    </m.article>
  );
}
