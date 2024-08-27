import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import WavyDivider from "./WavyDivider";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="header" sx={{ position: "relative", zIndex: 10 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#fcbf49" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#003049" }}>
            Ellie Aghajani
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
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
            <Button
              component={Link}
              to="/contact"
              sx={{ color: "white", mx: 1 }}
            >
              Contact
            </Button>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/projects" onClick={handleMenuClose}>
              Projects
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
              Contact
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <WavyDivider />
    </Box>
  );
}

export default Header;
