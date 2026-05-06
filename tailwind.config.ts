import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ciel: {
          primary: 'var(--ciel-primary)',
          accent: 'var(--ciel-accent)',
          cream: 'var(--ciel-cream)',
          ink: 'var(--ciel-ink)',
          coral: 'var(--ciel-coral)',
          mint: 'var(--ciel-mint)',
          dark: 'var(--ciel-logo-dark)',
          cyan: 'var(--ciel-logo-cyan)',
          blue: 'var(--ciel-logo-blue)',
          violet: 'var(--ciel-logo-violet)',
          purple: 'var(--ciel-logo-purple)'
        }
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Arial Black"', 'Impact', 'sans-serif'],
        body: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        brutal: '8px 8px 0 var(--ciel-ink)',
        'brutal-sm': '4px 4px 0 var(--ciel-ink)'
      }
    }
  },
  plugins: []
} satisfies Config;
