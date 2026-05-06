import type { Service } from '../data/clients';
import { serviceMeta } from '../data/clients';

interface ServiceTagProps {
  service: Service;
  compact?: boolean;
  label?: 'full' | 'short';
}

export default function ServiceTag({ service, compact = false, label = 'full' }: ServiceTagProps) {
  const meta = serviceMeta[service];
  const displayLabel = label === 'short' ? meta.shortLabel : meta.label;

  return (
    <span
      className={`inline-flex max-w-full items-center break-words border-[3px] border-ciel-ink font-display uppercase leading-none tracking-normal ${
        compact ? 'px-2 py-1.5 text-[0.64rem] sm:text-[0.68rem]' : 'px-3 py-2 text-[0.68rem] sm:text-xs'
      } ${meta.textOnAccent === 'cream' ? 'text-ciel-cream' : 'text-ciel-ink'}`}
      style={{ backgroundColor: meta.cssVar }}
    >
      {displayLabel}
    </span>
  );
}
