/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './services/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Default body type — Abril Text (reading).
        sans: ['abril-text', 'ui-serif', 'Georgia', 'serif'],
        // Same as `sans` for any explicit `font-serif` Tailwind references.
        serif: ['abril-text', 'ui-serif', 'Georgia', 'serif'],
        // Large editorial display headings — Abril Display optical size.
        display: ['abril-display', 'ui-serif', 'Georgia', 'serif'],
        // UI / caps-label stack — Sukhumvit Set (Apple-bundled, system fallback elsewhere).
        mono: ['Sukhumvit Set', '-apple-system', 'BlinkMacSystemFont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        pageTop: '48px',
      },
      colors: {
        accent: '#EC6777',
        bgMain: '#FAFAFA',
        bgSidebar: '#EBEBEB',
        greySoft: '#E7E8EB',
        greyHair: '#dcdcdc',
        paletteBorder: '#333333',
        textPrimary: '#1a1a1a',
        textSecondary: '#737373',
        destructive: '#b91c1c',
        // Pastel palette (Option C).
        hueCoral: '#EC6777',
        hueMint: '#7FE2C1',
        hueYellow: '#FFF89C',
      },
    },
  },
  plugins: [],
};
