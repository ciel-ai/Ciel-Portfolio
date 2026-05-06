import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface VideoPlaceholderProps {
  url?: string;
  label: string;
  accent: string;
  title: string;
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtu.be') {
      return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`;
    }

    if (host.includes('youtube.com')) {
      const id = parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : undefined;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

export default function VideoPlaceholder({ url, label, accent, title }: VideoPlaceholderProps) {
  const [canLoad, setCanLoad] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const embedUrl = url ? getYouTubeEmbedUrl(url) : undefined;

  useEffect(() => {
    const node = ref.current;

    if (!node || !url) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [url]);

  return (
    <div
      ref={ref}
      className="relative aspect-video overflow-hidden border-[4px] border-ciel-ink bg-ciel-primary text-ciel-cream"
      style={{ boxShadow: `4px 4px 0 ${accent}` }}
    >
      {url && canLoad && embedUrl ? (
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={`${title} ${label}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : null}

      {url && canLoad && !embedUrl && isVideoFile(url) ? (
        <video className="h-full w-full object-cover" src={url} controls preload="metadata" aria-label={`${title} ${label}`} />
      ) : null}

      {!url || !canLoad || (!embedUrl && !isVideoFile(url)) ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--ciel-primary)_0_49%,var(--ciel-ink)_49%_51%,var(--ciel-cream)_51%_100%)] p-3 text-center">
          <span
            className="grid h-12 w-12 place-items-center border-[4px] border-ciel-ink bg-ciel-accent text-ciel-ink shadow-[4px_4px_0_var(--ciel-ink)]"
            aria-hidden="true"
          >
            <Play className="h-6 w-6 fill-current" />
          </span>
          <span className="border-[3px] border-ciel-ink bg-ciel-cream px-2 py-1 font-display text-[0.7rem] uppercase text-ciel-ink sm:text-xs">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
