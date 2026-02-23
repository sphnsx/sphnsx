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
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        pageTop: '48px',
      },
      colors: {
        accent: '#66FFCC',
        bgMain: '#FAFAFA',
        bgSidebar: '#EBEBEB',
        paletteBorder: '#333333',
        textPrimary: '#1a1a1a',
        textSecondary: '#737373',
        destructive: '#b91c1c',
      },
    },
  },
  plugins: [],
};
