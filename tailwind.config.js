/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c2d3ff',
          300: '#93b4ff',
          400: '#6090ff',
          500: '#3b6eff',
          600: '#2251f5',
          700: '#1a3de0',
          800: '#1b33b5',
          900: '#1c2f8e',
          950: '#131f5c',
        },
        slate: {
          850: '#172033',
          900: '#0f172a',
          950: '#060d1f',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #3b6eff 0%, #8b5cf6 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'count-up': 'countUp 1s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
