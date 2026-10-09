import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        courier: ['"Courier Prime"', 'monospace'],
      },
      colors: {
        clavia: {
          purple: '#825fb8',
          'purple-dark': '#6a4b9a',
          'purple-deep': '#4f3673',
          lilac: '#d2b8fa',
          'lilac-soft': '#e7dafd',
          graphite: '#151515',
          'graphite-soft': '#1d1d1d',
          'graphite-line': '#2a2a2a',
          black: '#000000',
          offwhite: '#f2f1f2',
          'offwhite-deep': '#e9e8ea',
        },
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config