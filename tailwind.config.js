const colors = require("./dist").default;

module.exports = {
  content: ["./src/**/*.{html,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: colors.theme.extend.colors,
    },
  },
  plugins: [],
};