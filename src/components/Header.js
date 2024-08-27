import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#2a9d8f" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Ellie Aghajani</Typography>
        <div>
          <Button component={Link} to="/about" sx={{ color: "white", mx: 1 }}>
            About
          </Button>
          <Button
            component={Link}
            to="/projects"
            sx={{ color: "white", mx: 1 }}
          >
            Projects
          </Button>
          <Button component={Link} to="/contact" sx={{ color: "white", mx: 1 }}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
