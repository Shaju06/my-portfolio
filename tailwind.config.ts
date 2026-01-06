import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // Custom keyframe for a curve animation
        curves: {
          '0%': { borderWidth: '2px' },
          '25%': { borderWidth: '6px' },
          '50%': { borderWidth: '10px' },
          '75%': { borderWidth: '6px' },
          '100%': { borderWidth: '2px' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        curve: 'curves 4s infinite',
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
        },
      },
      colors: {
        primary: '#6366f1',
        'hover-primary': '#4f46e5',
        light: {
          background: '#f8fafc',
          Primary: '#6366f1',
          Secondary: '#475569',
          Accent: '#0f172a',
          'text-color': '#4338ca',
        },
        dark: {
          background: '#0f172a',
          Primary: '#818cf8',
          Secondary: '#94a3b8',
          Accent: '#f1f5f9',
        },
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
