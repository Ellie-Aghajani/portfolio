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
    fontFamily: "Roboto, Arial", // Customize this to your preferred font family
  },
});

export default theme;
