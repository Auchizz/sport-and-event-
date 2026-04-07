/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17324d',
        sportgreen: '#2f7a6b',
        accent: '#d88c4f',
        danger: '#b55246',
        pagebg: '#f3ede2'
      }
    }
  },
  plugins: []
}
