import { createTheme } from "@mui/material/styles";

const colors = {
  navy: "#003049",
  gold: "#fcbf49",
  cream: "#cad2c5",
  darkGold: "#ffd60a",
  lightText: "#f4f1de",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.navy,
      contrastText: colors.lightText,
    },
    secondary: {
      main: colors.gold,
      contrastText: colors.navy,
    },
    background: {
      default: colors.cream,
      paper: "#ffffff",
    },
    text: {
      primary: colors.navy,
      secondary: colors.cream,
    },
  },

  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontWeight: 700,
      color: colors.navy,
    },
    body1: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontWeight: 400,
      color: colors.navy,
    },
  },

  custom: {
    colors,
  },
});

export default theme;
