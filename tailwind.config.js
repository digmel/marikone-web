module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./icons/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F4F5F6",
        "dark-100": "#27272A",
        "dark-200": "#18181B",
        "accent-100": "#FCDED6",
        "accent-200": "#FFC3B2",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
