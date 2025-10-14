/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', '../../layouts/**/*.html'],
  darkMode: 'class',
  safelist: [],
  theme: {
    extend: {
      colors: {
        'light-bg': 'white',
        'dark-bg': '#111827',
        'light-text-primary': '#1f2937',
        'dark-text-primary': '#f9fafb',
        'light-text-secondary': '#6b7280',
        'dark-text-secondary': '#9ca3af',
        'light-bg-secondary': '#f3f4f6',
        'dark-bg-secondary': '#1f2937',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.25rem',
      },
      fontWeight: {
        'h1': '400',
      },
    },
  },
  plugins: [],
};
