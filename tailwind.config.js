/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'retro', 'cyberpunk', 'halloween'],
  },
};
