/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Blue shade
        background: '#0f172a', // Black-blue shade
        accent: '#38bdf8', // Cyan for highlights
      },
    },
  },
  plugins: [],
};
