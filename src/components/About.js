import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
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
        About Me
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.6, textAlign: "center" }}>
        Hi, I'm Ellie Aghajani. I am a Full Stack Web Developer with a
        background in language teaching. I have experience in building and
        deploying web applications, with skills in JavaScript, Node.js, React,
        and more. I’m passionate about creating dynamic and user-centric
        applications.
      </Typography>
    </Container>
  );
}

export default About;
