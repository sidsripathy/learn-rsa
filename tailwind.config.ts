import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff6ad5',
          cyan: '#6ad5ff',
          purple: '#8a2be2',
          yellow: '#ffe66a'
        },
        midnight: '#090014',
        circuitry: '#1f1b2e'
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 106, 213, 0.35)',
        cyan: '0 0 20px rgba(106, 213, 255, 0.35)'
      },
      backgroundImage: {
        grid: 'linear-gradient(90deg, rgba(106,213,255,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(255,106,213,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
