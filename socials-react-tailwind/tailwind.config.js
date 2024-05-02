/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "card": "hsl(0, 0%, 12%)",
        "black": "hsl(0, 0%, 8%)",
        "location": "hsl(75, 94%, 57%)",
        "experience": "hsl(0, 0%, 50%)",
        "button": "hsl(0, 0%, 20%)"
      }
    },
  },
  plugins: [],
}