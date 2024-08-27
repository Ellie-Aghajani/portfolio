// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize this to your preferred primary color
    },
    secondary: {
      main: "#f50057", // Customize this to your preferred secondary color
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontWeight: 700, // Example weight for headers
    },
    body1: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontWeight: 400, // Example weight for body text
    },
  },
});

export default theme;
