import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

function Projects() {
  return (
    <Container sx={{ padding: 4, backgroundColor: "#cad2c5" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Box
        sx={{
          backgroundColor: "#f4f1de",
          padding: 3,
          mb: 3,
          boxShadow: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">Munchie Master</Typography>
        <Typography variant="body2">
          Munchie Master is a full-stack web application that provides healthy
          and delicious recipes for toddler food. This project is designed to
          help parents and caregivers find easy-to-make, nutritious meals that
          their toddlers will love.
        </Typography>
        <br />
        <Typography variant="body2">
          Tech stack: <br />
          Frontend: React, Material-UI (MUI) <br />
          Backend: Node.js, Express.js <br />
          Database: MongoDB with Mongoose
        </Typography>
        <br />
        <Button
          component="a"
          href=""
          target="_blank"
          sx={{
            color: "#003049",
            fontSize: "0.5rem",
            backgroundColor: "#caffbf",
            textDecoration: "none",
            "&:hover": { textDecoration: "none", backgroundColor: "#ffd60a" },
            mr: 1,
          }}
        >
          Deployed Application
        </Button>

        <Button
          component="a"
          href="https://github.com/Ellie-Aghajani/munchieMaster"
          target="_blank"
          sx={{
            color: "#003049",
            fontSize: "0.5rem",
            backgroundColor: "#fdffb6",
            textDecoration: "none",
            mr: 1,
            "&:hover": { textDecoration: "none", backgroundColor: "#ffd60a" },
          }}
        >
          GitHub Repo
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f4f1de",
          padding: 3,
          mb: 3,
          boxShadow: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">Gamepedia</Typography>
        <Typography variant="body2">
          Gamepedia is a React single-page web application designed for
          discovering video games, enabling users to explore and uncover new
          games to play. By utilizing Gamepedia, you can effortlessly search for
          games based on various criteria such as platform, genre, and more.
        </Typography>
        <br />
        <Typography variant="body2">
          Tech stack: React, TypeScript, vanilla CSS, CSS modules and CSS-in-JS
        </Typography>
        <br />
        <Button
          component="a"
          href="https://gamepedia-wimt.onrender.com/"
          target="_blank"
          sx={{
            mr: 1,
            fontSize: "0.5rem",
            backgroundColor: "#caffbf",
            color: "#003049",
            textDecoration: "none",
            "&:hover": { textDecoration: "none", backgroundColor: "#ffd60a" },
          }}
        >
          Deployed Application
        </Button>
        <Button
          component="a"
          href="https://github.com/Ellie-Aghajani/gamepedia"
          target="_blank"
          sx={{
            mr: 1,
            color: "#003049",
            fontSize: "0.5rem",
            backgroundColor: "#fdffb6",
            textDecoration: "none",
            "&:hover": { textDecoration: "none", backgroundColor: "#ffd60a" },
          }}
        >
          GitHub Repo
        </Button>
      </Box>
    </Container>
  );
}

export default Projects;
