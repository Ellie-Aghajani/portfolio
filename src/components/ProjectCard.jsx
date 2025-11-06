import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function ProjectCard({
  title,
  description,
  techStack,
  imageSrc,
  deployedLink,
  githubLink,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.custom?.colors?.navy || "#003049",
        color: theme.palette.background.default,
        gap: 2,
        padding: 3,
        mb: 3,
        border: `2px solid ${theme.custom?.colors?.gold || "#FCBF49"}`,
        boxShadow: 2,
        borderRadius: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {/* === Left section: text === */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.custom?.colors?.darkGold || "#FFC75C",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 2, textAlign: "justify", color: theme.palette.text.secondary }}
        >
          {description}
        </Typography>

        <Typography variant="body1">
          <Typography
            component="span"
            sx={{
              color: theme.custom?.colors?.darkGold || "#FFC75C",
              fontWeight: 600,
            }}
          >
            Tech stack:
          </Typography>{" "}
          <Typography
            variant="body1"
            sx={{ color: (theme) => theme.palette.text.secondary }}
            >
                {techStack.map((tech, index) => (
                <Typography key={index} variant="body1" sx={{ color: (theme) => theme.palette.text.secondary }}>
                    {tech}
                </Typography>
                ))}
            </Typography>
       
        </Typography>
      </Box>

      {/* === Right section: image + buttons === */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mt: { xs: 3, sm: 0 },
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            width: 200,
            height: 200,
            borderRadius: "8px",
            objectFit: "cover",
            boxShadow: 1,
          }}
        />

        {deployedLink && (
          <Button
            component="a"
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              backgroundColor: theme.custom?.colors?.gold || "#fcbf49",
              color: theme.custom?.colors?.navy || "#003049",
              "&:hover": {
                color: theme.custom?.colors?.darkGold || "#ffd60a",
                backgroundColor: theme.custom?.colors?.navy || "#003049",
              },
              textDecoration: "none",
              width: "100%",
            }}
          >
            Deployed Application
          </Button>
        )}

        {githubLink && (
          <Button
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              backgroundColor: theme.custom?.colors?.gold || "#fcbf49",
              color: theme.custom?.colors?.navy || "#003049",
              "&:hover": {
                color: theme.custom?.colors?.darkGold || "#ffd60a",
                backgroundColor: theme.custom?.colors?.navy || "#003049",
              },
              textDecoration: "none",
              width: "100%",
            }}
          >
            GitHub Repo
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ProjectCard;
