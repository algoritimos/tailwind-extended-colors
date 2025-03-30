import { colors } from "./colors";

// Exporta um preset do TailwindCSS
const tailwindColors = {
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
};

export default tailwindColors;