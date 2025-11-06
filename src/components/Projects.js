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
        <Typography variant="h6">FalGenie</Typography>
        <Typography variant="body2">
          FalGenie is a full-stack, AI-assisted tarot fortune-telling
          application. Users draw a card, receive a concise four-part reading
          (General, Love, Career, Health), and continue a chat that is
          constrained strictly to that card’s symbolism. The UI features an
          animated hero, a “mystic draw” interaction, and a dark,
          brand-consistent theme.
        </Typography>
        <br />
        <Typography variant="body2">
          Tech stack: <br />
          Frontend: React, Vite, TypeScript, Tailwind CSS, Framer Motion,
          shadcn/ui <br />
          Backend: Bun + Express, OpenAI (GPT-4o-mini) <br />
          Deployment: Frontend at falgenie.com on AWS S3 + CloudFront; Backend
          API on Render
        </Typography>
        <br />
        <Button
          component="a"
          href="https://www.falgenie.com/"
          target="_blank"
          sx={{
            fontSize: "0.5rem",
            backgroundColor: "#fcbf49",
            color: "#003049",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "#ffd60a",
              backgroundColor: "#003049",
            },
            mr: 1,
          }}
        >
          Deployed Application
        </Button>

        <Button
          component="a"
          href="https://github.com/Ellie-Aghajani/falgenie"
          target="_blank"
          sx={{
            fontSize: "0.5rem",
            backgroundColor: "#fcbf49",
            color: "#003049",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "#ffd60a",
              backgroundColor: "#003049",
            },
            mr: 1,
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
          href="http://munchiemaster.online/"
          target="_blank"
          sx={{
            fontSize: "0.5rem",
            backgroundColor: "#fcbf49",
            color: "#003049",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "#ffd60a",
              backgroundColor: "#003049",
            },
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
            fontSize: "0.5rem",
            backgroundColor: "#fcbf49",
            color: "#003049",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "#ffd60a",
              backgroundColor: "#003049",
            },
            mr: 1,
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
          href="https://gamepedia-eight.vercel.app/"
          target="_blank"
          sx={{
            fontSize: "0.5rem",
            backgroundColor: "#fcbf49",
            color: "#003049",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "#ffd60a",
              backgroundColor: "#003049",
            },
            mr: 1,
          }}
        >
          Deployed Application
        </Button>
        <Button
          component="a"
          href="https://github.com/Ellie-Aghajani/gamepedia"
          target="_blank"
          sx={{
            fontSize: "0.5rem",
            backgroundColor: "#fcbf49",
            color: "#003049",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
              color: "#ffd60a",
              backgroundColor: "#003049",
            },
            mr: 1,
          }}
        >
          GitHub Repo
        </Button>
      </Box>
    </Container>
  );
}

export default Projects;
