const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        cyan: colors.cyan,
        slate: colors.coolGray,
        silver: "#ecebff",
        green: {
          700: "#0DAC5C",
        },
        black: {
          900: "#0C0E0D",
        },
      },
    },
  },
};
