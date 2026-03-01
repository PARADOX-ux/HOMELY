/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "homely-bg": "#FDFBD4",
        "homely-primary": "#8D5A2B",
        "homely-primary-hover": "#744820",
        "homely-accent": "#D47E30",
        "homely-wood": "#825E34",
        "primary-light": "#fff8e6",
        "background-dark": "#221910",
        "surface-light": "#ffffff",
        "surface-dark": "#2d241b",
        "background-cream": "#FDFBD4"
      },
    },
  },
  plugins: [],
}

