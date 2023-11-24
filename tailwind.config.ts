import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem', // Adjust this value as needed
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px', // Set the minimum width for lg and above screens
          // xl: '1280px',
        },
      },
      colors: {
        light: {
          Primary: '#ff9966',
          Secondary: '#fff8e7',
          Accent: "#333333"
        },
        dark: {
          Primary: '#008080',
          Secondary: '#2c3e50',
          Accent: '#ecf0f1 '
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
