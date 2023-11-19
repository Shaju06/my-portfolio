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
        // primary: 'bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]',
        primary: 'radial-gradient(from 180deg at 50% 50%, #fbc2eb, #a6c1ee)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
