import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  label: string;
  title: string;
  accent: string;
  featured?: boolean;
  portrait?: boolean;
}

export default function ImagePlaceholder({ src, label, title, accent, featured = false, portrait = false }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden border-[4px] border-ciel-ink bg-ciel-primary ${portrait ? 'aspect-[9/19.5]' : featured ? 'aspect-[16/10]' : 'aspect-video'}`}
      style={{ boxShadow: `4px 4px 0 ${accent}` }}
    >
      {src ? (
        <img className="h-full w-full object-cover object-top" src={src} alt={`${title} ${label}`} loading="lazy" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--ciel-primary)_0_49%,var(--ciel-ink)_49%_51%,var(--ciel-logo-blue)_51%_100%)] p-3 text-center">
          <span className="grid h-12 w-12 place-items-center border-[4px] border-ciel-ink bg-ciel-accent text-ciel-ink shadow-[4px_4px_0_var(--ciel-logo-purple)]">
            <ImageIcon className="h-6 w-6" />
          </span>
          <span className="border-[3px] border-ciel-ink bg-ciel-cream px-2 py-1 font-display text-[0.68rem] uppercase text-ciel-ink">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}