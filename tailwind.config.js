/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-red': '#DC2626',
        'warm-yellow': '#F59E0B',
        'warm-brown': '#A16207',
        'warm-orange': '#EA580C',
        'cream': '#FEF7ED'
      },
      fontFamily: {
        'marathi': ['Noto Sans Devanagari', 'sans-serif'],
      }
    },
  },
  plugins: [],
}