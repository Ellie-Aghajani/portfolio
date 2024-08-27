import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

function Projects() {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          mb: 3,
          boxShadow: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">Munchie Master</Typography>
        <Typography variant="body1">
          A single-page web application designed for toddler moms to find
          healthy and delicious recipes.
        </Typography>
        <Button
          component="a"
          href="https://github.com/Ellie-Aghajani/munchieMaster"
          target="_blank"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View Project
        </Button>
      </Box>
    </Container>
  );
}

export default Projects;
