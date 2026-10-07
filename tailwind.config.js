/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Stake / Serene Investors Brand Tokens */
        stake: {
          green: '#00A663', // Primary Accent (Stake Emerald Green)
          forest: '#0B3528', // Primary Dark / Brand Forest
          mint: '#E8F8F0', // Secondary Mint Background
        },
        slate: {
          hero: '#0D1117', // Dark Slate / Hero Text 1
          dark: '#111827', // Dark Slate / Hero Text 2
        },
        muted: {
          dark: '#4B5563', // Subtitle & Muted Text 1
          light: '#64748B', // Subtitle & Muted Text 2
        },
        dark: {
          section: '#060D17', // Dark Sections
          footer: '#0B131F', // Dark Footer
        },
        border: {
          light: 'rgba(0, 0, 0, 0.08)',
          dark: 'rgba(255, 255, 255, 0.1)',
        },

        /* Semantic Mapping */
        primary: {
          DEFAULT: '#00A663',
          dark: '#0B3528',
          light: '#E8F8F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#0D1117',
          card: '#F8FAF9',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        heading: [
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.035em' }],
        'display-lg': ['3rem', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        'display-md': ['2.25rem', { lineHeight: '1.18', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 166, 99, 0.2)',
        glow: '0 0 25px -5px rgba(0, 166, 99, 0.3)',
        'glow-lg': '0 20px 45px -12px rgba(0, 166, 99, 0.35)',
        'card-soft': '0 8px 30px -6px rgba(11, 53, 40, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card-elevated': '0 20px 40px -12px rgba(11, 53, 40, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'phone-chassis': '0 30px 70px -15px rgba(13, 17, 23, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        phone: '48px',
        'phone-screen': '40px',
        island: '9999px',
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      zIndex: {
        35: '35',
      },
    },
  },
  plugins: [],
}
