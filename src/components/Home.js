import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <Container sx={{ backgroundColor: "#cad2c5", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          gap: 4,
          marginBottom: 4,
        }}
      >
        {/* Profile Image */}
        <Box
          component="img"
          src="/profileImage.jpeg"
          alt="Ellie Aghajani"
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
        />
        {/* Introduction Text */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            sx={{
              color: "#003049",
              marginBottom: "16px",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            I am
            <br />
            Ellie Aghajani
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#003049",
              marginBottom: "16px",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            }}
          >
            A Full-Stack Web Developer based in Vancouver, B.C. <br />
            Transitioning from a background in education, coding has become both
            my passion and my professional focus. <br />I love building web
            applications and enjoy the creative process of turning ideas into
            functional, user-friendly solutions.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 4,
        }}
      >
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
          <IconButton
            href="mailto:aghajaniellie@gmail.com"
            sx={{ color: "white" }}
          >
            <Email fontSize="large" />
          </IconButton>
          <IconButton
            href="https://flowcv.com/resume/j87t0vsftt"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <Description fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* About Section */}
      <Box sx={{ marginY: 4 }}>
        <About />
      </Box>

      {/* Projects Section */}
      <Box sx={{ marginY: 4 }}>
        <Projects />
      </Box>

      {/* Contact Section */}
      <Box sx={{ marginY: 4 }}>
        <Contact />
      </Box>
    </Container>
  );
}

export default Home;
