// src/components/WavyDividerFooter.js
import React from "react";
import { Box } from "@mui/material";

function WavyDividerFooter() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        left: 0,
        overflow: "hidden",
        lineHeight: 0,
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fca311" // Ensure this color matches the footer color
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "auto" }}
      >
        <path d="M0,0L30,8.3C60,16,120,32,180,43.3C240,55,300,61,360,58.3C420,55,480,43,540,40C600,37,660,43,720,48C780,53,840,57,900,50.7C960,44,1020,16,1080,8.3L1140,0H1200V120H0Z" />
      </svg>
    </Box>
  );
}

export default WavyDividerFooter;
