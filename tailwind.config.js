/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', '../../layouts/**/*.html'],
  darkMode: 'class',
  safelist: [
    'dark:bg-gray-800',
    'dark:text-gray-100',
    'dark:text-gray-300',
    'dark:border-gray-600',
    'dark:bg-gray-700',
    'dark:text-gray-200',
  ],
  plugins: [],
};
