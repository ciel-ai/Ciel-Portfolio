import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socials = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:hello@ciel.agency', label: 'Email', icon: Mail }
];

export default function Footer() {
  return (
    <footer className="border-t-[5px] border-ciel-ink bg-ciel-ink px-4 py-10 text-ciel-cream sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link to="/" className="brutal-focus inline-block font-display text-5xl uppercase leading-none text-ciel-cream">
            CIEL
          </Link>
          <p className="mt-4 max-w-2xl text-lg font-bold leading-snug">
            Digital marketing and tech work with visible structure, sharp execution, and no decorative fog.
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="brutal-button grid h-12 w-12 place-items-center bg-ciel-accent text-ciel-ink"
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
