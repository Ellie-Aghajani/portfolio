import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import WavyDividerFooter from "./WavyDividerFooter";
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#003049", // Retain the existing background color
        color: "white",
        pt: 4,
        pb: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <IconButton
            href="https://github.com/Ellie-Aghajani"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/ellie-aghajani/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="h6" align="center">
          &copy; {new Date().getFullYear()} Ellie Aghajani. All rights reserved.
        </Typography>
      </Container>
      <WavyDividerFooter />
    </Box>
  );
}

export default Footer;
