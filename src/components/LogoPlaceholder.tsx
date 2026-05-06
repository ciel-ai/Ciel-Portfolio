import type { CSSProperties } from 'react';

interface LogoPlaceholderProps {
  name: string;
  accent?: string;
}

export default function LogoPlaceholder({ name, accent = 'var(--ciel-logo-blue)' }: LogoPlaceholderProps) {
  return (
    <div
      className="grid h-16 w-16 shrink-0 place-items-center border-[4px] border-ciel-ink bg-ciel-primary text-ciel-cream shadow-[5px_5px_0_var(--ciel-logo-purple)]"
      style={{ '--logo-accent': accent } as CSSProperties}
      aria-label={`${name} logo placeholder`}
      title={`${name} logo placeholder`}
    >
      <div className="grid h-9 w-9 place-items-center border-[3px] border-ciel-ink bg-[var(--logo-accent)] text-ciel-ink">
        <span className="font-display text-[0.46rem] uppercase leading-none">Logo</span>
      </div>
    </div>
  );
}
