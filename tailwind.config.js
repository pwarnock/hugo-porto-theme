/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', '../../layouts/**/*.html'],
  darkMode: 'class',
  safelist: [
    'bg-gray-100', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-100', 'text-gray-600', 'dark:text-gray-300',
    'border-gray-300', 'dark:border-gray-600', 'bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-gray-100',
    'text-blue-600', 'hover:text-blue-800', 'text-blue-500', 'hover:text-blue-700',
    'text-2xl', 'md:text-3xl', 'lg:text-4xl', 'text-center', 'font-medium', 'font-poppins', 'text-gray-400', 'mb-12',
    'grid', 'grid-cols-2', 'gap-8', 'rounded-lg', 'p-6', 'shadow-lg', 'mb-2', 'mb-4',
    'max-w-md', 'mx-auto', 'flex', 'px-4', 'py-2', 'rounded-l-md', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500',
    'rounded-r-md', 'hover:bg-blue-600', 'bg-blue-500', 'text-white'
  ],
  plugins: [],
};
