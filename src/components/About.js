import React from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";

function About() {
  return (
    <Container sx={{ backgroundColor: "#cad2c5", padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#003049",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        About Me
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row-reverse" }}
        spacing={2}
        alignItems="center"
        sx={{ padding: 2, borderRadius: 2 }}
      >
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          {" "}
          Becoming a software engineer has been my dream ever since high school.
          I chose math as my focus back then, as the first step toward my future
          in tech. But life had other plans, and I found myself on a completely
          different path—as a teacher. <br /> <br />
          Fast forward to when I moved to Canada, everything changed. I saw this
          as my chance to finally chase the dream I’d been holding onto for so
          long. The first big step? Enrolling in the Lighthouse Labs Web
          Development Bootcamp, where I rediscovered my passion for building and
          creating. <br /> <br />
          Now, I’m more excited than ever about my career in software
          engineering. I’m always learning, growing, and pushing myself to be
          better each day. This isn’t just a career for me—it’s the fulfillment
          of a dream I never gave up on.{" "}
        </Typography>
      </Stack>
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
          href="/contact"
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
          Contact Me
        </Button>

        <Button
          component="a"
          href="https://resume.creddle.io/resume/gsecwddv3cq"
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
          Resume
        </Button>
      </Typography>
    </Container>
  );
}

export default About;
