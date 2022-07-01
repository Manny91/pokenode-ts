const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};
const palette = {
  red: {
    background: "#e61515",
    gradient: "linear-gradient(to right, rgb(230, 21, 21), rgb(206, 0, 0))",
  },
  yellow: {
    gradient: "linear-gradient(to right, yellow, rgb(218, 218, 3))",
  },
  green: {
    background: "#A5CD53",
    backgroundHover: "#cbee84",
    gradient: "linear-gradient(to right, rgb(0, 128, 0), rgb(1, 99, 1))",
    border: "#9aa28b",
  },
  blue: {
    gradient: "linear-gradient(to right, rgb(111, 149, 255), rgb(60, 84, 166))",
  },
  black: {
    background: "#21262d",
    backgroundHover: "#30363d",
  },

  white: {
    background: "#FFFFFF",
  },
  pokemonTypes: {
    normal: "#bfbfbf",
    fighting: "#d87c58",
    flying: "#999ade",
    poison: "#925192",
    ground: "#dea761",
    rock: "#897864",
    bug: "#b1c967",
    ghost: "#c195dc",
    steel: "#49769c",
    fire: "#cf1414",
    water: "#1689de",
    grass: "#47a047",
    electric: "#e6b700",
    psychic: "#fa43b8",
    ice: "#98c3de",
    dragon: "#89315d",
    dark: "#282433",
    fairy: "#dca0ce",
    unknown: "#545454",
    shadow: "#364163",
  },
};
const theme = {
  palette,
  header: {
    height: 150,
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      "font-weight": "bold",
      "font-size": "68px",
    },
    h2: {
      "font-weight": "bold",
      "font-size": "50px",
    },
    h3: {
      "font-weight": "bold",
      "font-size": "38px",
    },
    h4: {
      "font-weight": "bold",
      "font-size": "28px",
    },
    h5: {
      "font-weight": "bold",
      "font-size": "22px",
    },
    h6: {
      "font-weight": "500",
      "font-size": "16px",
    },
    link: {
      "text-decoration": "none",
      color: "black",
    },
  },
  mobile: `@media (max-width: ${breakpointValues.md - 1}px)`,
  tablet: `@media (max-width: ${breakpointValues.lg - 1}px)`,
  desktop: `@media (min-width: ${breakpointValues.lg}px)`,
  input: `
  background-color: ${palette.green.background};
  width: 100%;
  height: 30px;
  font-size: 20px;
  flex: 1;
  border: 1px inset ${palette.green.border};`,
};

export default theme;
