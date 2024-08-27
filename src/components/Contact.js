import React from "react";
import { Container, Typography } from "@mui/material";

function Contact() {
  return (
    <Container
      sx={{
        padding: 4,
        backgroundColor: "#fff",
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Contact
      </Typography>
      <Typography variant="body1" align="center">
        You can reach me at: ellie@example.com
      </Typography>
    </Container>
  );
}

export default Contact;
