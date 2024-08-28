import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";

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
            <br />A passionate Full-Stack Web Developer
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
            src="https://media.licdn.com/dms/image/v2/D5603AQGdLFTqxxcYCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724730498735?e=1730332800&v=beta&t=0kL9Ks86drtcPgWR_4B6U7zz074XYtsattYZtO7hF5U"
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
          See my resume
        </Button>
      </Typography>
    </Container>
  );
}

export default Home;