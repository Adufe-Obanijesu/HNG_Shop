/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(11, 105, 255)",
        "ascent": "rgb(107, 56, 251)",
        "base-blue": "rgb(226, 242, 255)",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        "digital-numbers": ["digital-numbers", "sans"],
      },
    },
  },
  plugins: [],
};
