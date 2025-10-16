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
       typography: {
         DEFAULT: {
           css: {
             color: 'hsl(var(--bc))',
             fontFamily: 'Roboto, sans-serif',
             h1: {
               color: 'hsl(var(--bc))',
               fontFamily: 'Poppins, sans-serif',
             },
             h2: {
               color: 'hsl(var(--bc))',
               fontFamily: 'Poppins, sans-serif',
             },
             h3: {
               color: 'hsl(var(--bc))',
               fontFamily: 'Poppins, sans-serif',
             },
             h4: {
               color: 'hsl(var(--bc))',
               fontFamily: 'Poppins, sans-serif',
             },
             h5: {
               color: 'hsl(var(--bc))',
               fontFamily: 'Poppins, sans-serif',
             },
             h6: {
               color: 'hsl(var(--bc))',
               fontFamily: 'Poppins, sans-serif',
             },
             strong: {
               color: 'hsl(var(--bc))',
             },
             a: {
               color: 'hsl(var(--p))',
               '&:hover': {
                 color: 'hsl(var(--pf))',
               },
             },
             blockquote: {
               color: 'hsl(var(--bc))',
               borderLeftColor: 'hsl(var(--b3))',
             },
             code: {
               color: 'hsl(var(--bc))',
               backgroundColor: 'hsl(var(--b3))',
             },
             'code::before': {
               content: 'none',
             },
             'code::after': {
               content: 'none',
             },
             pre: {
               backgroundColor: 'hsl(var(--b2))',
               color: 'hsl(var(--bc))',
             },
           },
         },
       },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['light', 'dark', 'retro', 'cyberpunk', 'halloween'],
  },
};
