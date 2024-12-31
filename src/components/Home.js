import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <Container sx={{ backgroundColor: "#cad2c5", padding: 2 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ padding: 2, borderRadius: 2 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#003049",
              marginBottom: "16px",
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
            }}
          >
            <br />
            I'm Ellie Aghajani, a Full-Stack Web Developer based in Vancouver,
            B.C. I have a background in Education, and coding has become both my
            passion and my professional focus. I love building web applications
            and enjoy the creative process of turning ideas into functional,
            user-friendly solutions.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box
            component="img"
            src="/profileImage.jpeg"
            alt="Ellie Aghajani"
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              // Optional margin to adjust position
              marginRight: { md: 4 },
            }}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        sx={{
          color: "#003049",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <Button
          component="a"
          href="/about"
          target="_blank"
          sx={{
            fontSize: "1rem",
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
          Read more about me ...
        </Button>
        <Button
          component="a"
          href="/projects"
          target="_blank"
          sx={{
            fontSize: "1rem",
            textDecoration: "none",
            backgroundColor: "#fcbf49",
            color: "#003049",
            "&:hover": {
              color: "#ffd60a",
              backgroundColor: "#003049",
              textDecoration: "none",
            },
            mr: 1,
          }}
        >
          My Projects
        </Button>

        <Button
          component="a"
          href="https://flowcv.com/resume/j87t0vsftt"
          target="_blank"
          sx={{
            fontSize: "1rem",
            textDecoration: "none",
            backgroundColor: "#fcbf49",
            color: "#003049",
            "&:hover": {
              color: "#ffd60a",
              backgroundColor: "#003049",
              textDecoration: "none",
            },
            mr: 1,
          }}
        >
          My resume
        </Button>
      </Typography>
      {/* About Section */}
      <Box sx={{ marginY: 4 }}>
        <Typography
          variant="h4"
          sx={{ color: "#003049", textAlign: "center", marginBottom: 2 }}
        >
          About Me
        </Typography>
        <About />
      </Box>

      {/* Projects Section */}
      <Box sx={{ marginY: 4 }}>
        <Typography
          variant="h4"
          sx={{ color: "#003049", textAlign: "center", marginBottom: 2 }}
        >
          My Projects
        </Typography>
        <Projects />
      </Box>

      {/* Contact Section */}
      <Box sx={{ marginY: 4 }}>
        <Typography
          variant="h4"
          sx={{ color: "#003049", textAlign: "center", marginBottom: 2 }}
        >
          Contact Me
        </Typography>
        <Contact />
      </Box>
    </Container>
  );
}

export default Home;
