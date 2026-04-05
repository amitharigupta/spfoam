/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#016A78',
          'teal-light': '#017d8d',
          'teal-dark': '#015866',
          cognac: '#C4956A',
          'cognac-light': '#d4a87e',
        },
        cream: {
          DEFAULT: '#FAFAF7',
          warm: '#F5F3EE',
          card: '#FFFFFF',
        },
        stone: {
          850: '#2A2522',
          950: '#1A1614',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        'arch': '12rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(26, 22, 20, 0.06)',
        medium: '0 8px 40px rgba(26, 22, 20, 0.10)',
        strong: '0 20px 60px rgba(26, 22, 20, 0.15)',
        teal: '0 8px 24px rgba(1, 106, 120, 0.3)',
        cognac: '0 8px 24px rgba(196, 149, 106, 0.3)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'rotate-slow': 'rotate-slow 14s linear infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};