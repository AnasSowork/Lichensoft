/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',    // Dark blue
        secondary: '#4F46E5',  // Light purple
        grayLight: '#F3F4F6',
      },
    },
  },
  plugins: [],
}