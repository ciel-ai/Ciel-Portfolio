import { useState, type CSSProperties } from 'react';

interface LogoPlaceholderProps {
  name: string;
  accent?: string;
  logo?: string;
  website?: string;
}

export default function LogoPlaceholder({ name, accent = 'var(--ciel-logo-blue)', logo, website }: LogoPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('');

  const inner = logo && !hasError ? (
    <div
      className="grid h-20 w-20 shrink-0 place-items-center border-[4px] border-ciel-ink bg-ciel-cream shadow-[5px_5px_0_var(--ciel-logo-purple)]"
      aria-label={`${name} logo`}
      title={name}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-full w-full object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  ) : (
    <div
      className="grid h-20 w-20 shrink-0 place-items-center border-[4px] border-ciel-ink bg-ciel-primary text-ciel-cream shadow-[5px_5px_0_var(--ciel-logo-purple)]"
      style={{ '--logo-accent': accent } as CSSProperties}
      aria-label={`${name} logo placeholder`}
      title={`${name} logo placeholder`}
    >
      <div className="grid h-14 w-14 place-items-center border-[3px] border-ciel-ink bg-[var(--logo-accent)] text-ciel-ink">
        <span className="font-display text-xl font-bold uppercase leading-none tracking-tight">{initials}</span>
      </div>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} website`}
        className="shrink-0 transition-opacity hover:opacity-75"
        onClick={(e) => e.stopPropagation()}
      >
        {inner}
      </a>
    );
  }

  return inner;
}