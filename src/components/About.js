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
        sx={{ backgroundColor: "#d8e2dc", padding: 2, borderRadius: 2 }}
      >
        <Box
          component="img"
          src="https://media.licdn.com/dms/image/v2/D5603AQGdLFTqxxcYCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724730498735?e=1730332800&v=beta&t=0kL9Ks86drtcPgWR_4B6U7zz074XYtsattYZtO7hF5U"
          alt="Ellie Aghajani"
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          {" "}
          I’m a Full Stack Web Developer transitioning from a background in
          education. I’m proficient in JavaScript, Node.js, Express, React.js,
          and TypeScript, with practical experience in building and deploying
          web applications. I completed the Lighthouse Labs web development
          bootcamp and earned a diploma. <br /> <br /> I have a strong desire to
          create software and online experiences that are both visually
          appealing and intuitive for users.
          <br /> <br /> One of the things I love about software development is
          that it’s a never-ending learning journey, and I'm always looking for
          ways to expand my skills and knowledge. I'm always curious to learn
          more! <br />
          <br />
          Teamwork, empathy, and kindness are values I prioritize and
          incorporate into all my interactions.{" "}
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
