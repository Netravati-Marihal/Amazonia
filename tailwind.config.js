/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.10)',
        lift: '0 20px 60px rgba(15, 23, 42, 0.16)',
      },
      colors: {
        amazon: {
          ink: '#111827',
          navy: '#131921',
          panel: '#232F3E',
          gold: '#F7B84B',
          orange: '#FF9900',
          mint: '#22C55E',
        },
      },
    },
  },
  plugins: [],
};
