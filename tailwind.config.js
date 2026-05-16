/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['attribute', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'Arial', 'sans-serif'],
      },

      /* ── Brand palette ─────────────────────────────────── */
      colors: {
        brand: {
          primary:   '#2e8b57',
          secondary: '#f4a261',
          third:     '#264653',
          fourth:    '#e9c46a',
          accent:    '#e76f51',
        },

        /* ── CSS-variable tokens → Tailwind classes ─────────
           bg-main, bg-card, text-primary, text-secondary,
           text-muted, border-muted, border-focus
           These read the CSS custom properties at runtime so
           dark-mode switching works without any inline styles. */
        main:      'var(--bg-main)',
        card:      'var(--bg-card)',
        primary:   'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted:     'var(--text-muted)',
        'border-token':  'var(--border-muted)',
        'focus-token':   'var(--border-focus)',
      },

      screens: {
        'max-sm': { max: '767px' },
      },
    },
  },
  plugins: [],
}
