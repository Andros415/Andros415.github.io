module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        handwriting: ["Shadows Into Light", "cursive"],
      },
      colors: {
        noir: "#182848",
        teal: "#3bbbaa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      maxWidth: {
        mobile: "85%",
      },
      width: {
        mobile: "85%",
      },
    },
    plugins: [],
  },
};
