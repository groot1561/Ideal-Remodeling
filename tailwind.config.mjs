/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF8F5',   // Warm Ivory
          100: '#F4F0E8',  // Cream
          200: '#E6DEC',  // Light Sand
          300: '#E4DDD3',  // Sand
          400: '#D5CBC0',  // Beige
          500: '#958B80',  // Muted Taupe
          600: '#7E756B',  // Taupe
          700: '#5A5046',  // Muted Brown
          800: '#34302C',  // Dark Warm Gray
          900: '#1A1817',  // Charcoal
          950: '#121110',  // Deep Charcoal
        },
        bronze: {
          light: '#C4A27B',
          DEFAULT: '#A48259',
          dark: '#84643F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.15em',
        widest: '0.25em',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '16/10': '16 / 10',
      }
    },
  },
  plugins: [],
};
