// src/components/Footer.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <AppBar position="static" component="footer" color="primary">
      <Toolbar>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          © 2024 Ellie Aghajani
        </Typography>
        <IconButton color="inherit" href="https://github.com/yourusername">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com/in/yourusername">
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
