/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        glitch: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        // custom off-white background color
        offwhite: "rgba(246, 247, 249, 1)",
        ivory: "#FFFFF0",
        cream:  "#F6F1EB",

      },
    },
  },
  plugins: [],
}
