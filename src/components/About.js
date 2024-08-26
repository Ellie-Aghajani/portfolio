// src/components/About.js
import React from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1">
              I am a web developer with a passion for learning new things
              everyday.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
