/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBF9F5',
          100: '#F5EFE8',
          200: '#ECE4DA',
          300: '#DDD3C5',
          400: '#C2B5A3',
          500: '#A49682',
        },
        obsidian: {
          900: '#141312',
          800: '#1D1B1A',
          700: '#2A2725',
          600: '#3D3936',
          500: '#5C5651',
          400: '#7E7770',
        },
        bronze: {
          DEFAULT: '#9E7A52',
          light: '#BA946B',
          dark: '#7D5F3D',
          muted: '#8E7356',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      }
    },
  },
  plugins: [],
}
