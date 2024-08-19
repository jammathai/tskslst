/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "outline-red-500",
    "outline-orange-500",
    "outline-yellow-500",
    "outline-green-500",
    "outline-cyan-500",
    "outline-blue-500",
    "outline-purple-500",
    "outline-pink-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
