import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Container
      sx={{
        padding: 8,
        backgroundColor: (theme) => theme.custom.colors.navy,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          color: (theme) => theme.custom.colors.gold,
          fontWeight: "bold",
        }}
      >
        Projects
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* FalGenie */}
        <ProjectCard
          title="FalGenie"
          description="FalGenie is a full-stack, AI-assisted tarot fortune-telling application. Users draw a card, receive a concise four-part reading (General, Love, Career, Health), and continue a chat that is constrained strictly to that card’s symbolism. The UI features an animated hero, a “mystic draw” interaction, and a dark, brand-consistent theme."
          techStack={[
            "Frontend: React, Vite, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui",
            "Backend: Bun + Express, OpenAI (GPT-4o-mini)",
            "Deployment: Frontend at falgenie.com on AWS S3 + CloudFront; Backend API on Render",
          ]}
          imageSrc="/falgenie.png"
          deployedLink="https://www.falgenie.com/"
          githubLink="https://github.com/Ellie-Aghajani/falgenie"
        />

        {/* Munchie Master */}
        <ProjectCard
          title="Munchie Master"
          description="Munchie Master is a full-stack web application that provides healthy and delicious recipes for toddler food. This project helps parents and caregivers find easy-to-make, nutritious meals that their toddlers will love."
          techStack={[
            "Frontend: React, Material-UI (MUI)",
            "Backend: Node.js, Express.js",
            "Database: MongoDB with Mongoose",
            "File Upload: Multer",
            "Deployment: Digital Ocean Server",
          ]}
          imageSrc="/munchie.png"
          deployedLink="https://munchiemaster.online/"
          githubLink="https://github.com/Ellie-Aghajani/munchieMaster"
        />

        {/* Gamepedia */}
        <ProjectCard
          title="Gamepedia"
          description="Gamepedia is a React single-page application designed for discovering and exploring video games. Users can search based on various criteria such as platform, genre, and more, making it easy to find new games."
          techStack={["React, TypeScript, Chakra UI"]}
          imageSrc="/game.png"
          deployedLink="https://gamepedia-eight.vercel.app/"
          githubLink="https://github.com/Ellie-Aghajani/gamepedia"
        />
      </Box>
    </Container>
  );
}

export default Projects;
