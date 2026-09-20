import React from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";

function About() {
  return (
    <Container sx={{ backgroundColor: " #003049", padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          color: " #FCBF49",
          textAlign: "center",
          marginBottom: "16px",
          fontWeight: "bold",
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
        <Typography
          variant="h6"
          sx={{ textAlign: "justify", color: "#cad2c5" }}
        >
          {" "}
          I have 3+ years of professional experience as a full-stack engineer,
          including roles at Fiverr and North Arrow Research.
          <br />
          I've worked across the whole lifecycle of a product: designing APIs and
          data models, building the
          interfaces on top of them, and shipping and maintaining them in
          production. Software engineering was my goal from the start.  <br /> I chose
          math in high school with that in mind, but life took me into teaching
          first, and I earned a Master's in Education before making the switch
          into software.   <br /> These days I'm focused on backend and
          cloud engineering, and on bringing LLMs into real products.  <br /> I’m
          always learning, growing, and pushing myself to be better each day.
          This isn’t just a career for me, it’s the fulfillment of a dream I
          never gave up on.{" "}
        </Typography>
      </Stack>
      {/* <Typography
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
          Resume
        </Button>
      </Typography> */}
    </Container>
  );
}

export default About;
