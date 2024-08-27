import React from "react";
import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#e9c46a",
        color: "#fff",
        textAlign: "center",
        padding: "16px",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <Typography variant="body2">
          &copy; 2024 Ellie Aghajani. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
