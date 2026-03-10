import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'cursive'],
      },
      colors: {
        'dark-charcoal': '#383B42',
        'gold': '#A4906F',
        'cream': '#F5F2EF',
        'off-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};

export default config;
