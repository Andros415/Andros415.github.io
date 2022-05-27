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
        lightBase: "#f7f0d9",
      },
      backgroundImage: {
        lightScheme: `radial-gradient(at 39% 22%, hsla(36,66%,91%,1) 0, transparent 41%), 
         radial-gradient(at 72% 61%, hsla(350,78%,93%,1) 0, transparent 56%), 
         radial-gradient(at 4% 85%, hsla(163,68%,89%,1) 0, transparent 57%),  
         radial-gradient(at 27% 83%, hsla(45,100%,88%,1) 0, transparent 57%)`,
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
