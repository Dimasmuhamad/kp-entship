module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Volkhov", "serif"],
      },
      colors: {
        ascent: "#8b5cf6 ",
        primary: "#F65E21",
        accent_1: "E6A559",
      },
      // safelist: [
      //   "animate-[fade-in_1s_ease-in-out]",
      //   "animate-[fade-in-down_1s_ease-in-out]",
      // ],
    },
  },
  plugins: [],
};
