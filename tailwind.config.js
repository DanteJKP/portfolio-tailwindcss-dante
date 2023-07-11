/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        primary:'#14b8a6',
        dark:'#0f172a'
      }
    },
    container: {
      center: true,
      padding: '16px',
    },
  },
  plugins: [],
}

