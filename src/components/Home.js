import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Box, Typography, Container, Button } from "@mui/material";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <Container sx={{ backgroundColor: "#003049", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          gap: 4,
          marginBottom: 4,
          padding: 5,
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
        {/* Header Section */}

        {/* Introduction Text */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h1"
            sx={{
              color: "#FCBF49",
              marginBottom: "16px",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: "bold",
            }}
          >
            Ellie Aghajani
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "#cad2c5",
              marginBottom: "16px",
              fontSize: { xs: "0.9rem", sm: "1.3rem", md: "1.5rem" },
              // fontWeight: "bold",
            }}
          >
            Software Developer • Vancouver, B.C.{" "}
          </Typography>
          <Box className="mt-8 mb-8 flex items-center justify-center gap-4 text-amber-300">
            <a
              href="mailto:aghajaniellie@gmail.com"
              aria-label="Email Ellie"
              className="icon-link p-2 rounded-lg border border-[#B5835A]/40 hover:border-amber-300/80 hover:scale-105 transition"
              style={{ marginLeft: 8, marginRight: 8 }}
            >
              <MdEmail className="w-5 h-5 icon" style={{ color: "#cad2c5" }} />
            </a>
            <a
              href="https://github.com/Ellie-Aghajani"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-link p-2 rounded-lg border border-[#B5835A]/40 hover:border-amber-300/80 hover:scale-105 transition"
              style={{ marginLeft: 8, marginRight: 8 }}
            >
              <FaGithub className="w-5 h-5 icon" style={{ color: "#cad2c5" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/ellie-aghajani/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-link p-2 rounded-lg border border-[#B5835A]/40 hover:border-amber-300/80 hover:scale-105 transition"
              style={{ marginLeft: 8, marginRight: 8 }}
            >
              <FaLinkedin
                className="w-5 h-5 icon"
                style={{ color: "#cad2c5" }}
              />
            </a>
            <a
              href="https://flowcv.com/resume/j87t0vsftt"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="icon-link p-2 rounded-lg border border-[#B5835A]/40 hover:border-amber-300/80 hover:scale-105 transition"
              style={{ marginLeft: 8, marginRight: 8 }}
            >
              <FaFileAlt
                className="w-5 h-5 icon"
                style={{ color: "#cad2c5" }}
              />
            </a>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#cad2c5",
              marginBottom: "16px",
              marginTop: "16px",
              textAlign: "justify",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            }}
          >
            I'm Ellie Aghajani, a Software Developer based in Vancouver, B.C. I
            have a degree in education, and coding has become both my passion
            and my professional career focus. I love building web applications
            and enjoy the creative process of turning ideas into functional,
            user-friendly solutions.
          </Typography>
                <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 6,
        }}
      >
        <Button
          component="a"
          href="/projects"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
            textDecoration: "none",
            backgroundColor: "#fcbf49",
            color: "#003049",
            "&:hover": {
              color: "#ffd60a",
              backgroundColor: "#003049",
              textDecoration: "none",
            },
          }}
        >
          My Projects
        </Button>
        <Button
          component="a"
          href="https://flowcv.com/resume/j87t0vsftt"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
            textDecoration: "none",
            backgroundColor: "#fcbf49",
            color: "#003049",
            "&:hover": {
              color: "#ffd60a",
              backgroundColor: "#003049",
              textDecoration: "none",
            },
          }}
        >
          See My Resume
        </Button>
      </Box>
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

// Add gold hover effect for icons
const iconHoverStyle = `
.icon-link:hover .icon {
  color: #ffd700 !important;
}
`;

// Inject style into document head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = iconHoverStyle;
  document.head.appendChild(style);
}

export default Home;
