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
        // Default body type — Sukhumvit Set (Apple-bundled Thai/Latin sans).
        sans: ['Sukhumvit Set', '-apple-system', 'BlinkMacSystemFont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Display opt-in — Source Serif 4 variable (Subhead opsz pinned via index.css).
        serif: ['Source Serif 4', 'ui-serif', 'Georgia', 'serif'],
        // Alias for legacy `font-mono` utility — same sans stack.
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
