module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        handwriting: ["Shadows Into Light", "cursive"],
      },
      colors: {
        noir: "#182848",
      },
      maxWidth: {
        mobile: "85%",
      },
    },
    plugins: [],
  },
};
