/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        godofwar: ['GodOfWar', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
     },
      colors: {
        cyan: { neon: '#00f5ff' },
        magenta: { neon: '#ff00ff' },
        green: { neon: '#39ff14' },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}