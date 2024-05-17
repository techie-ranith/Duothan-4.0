"use client"

import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("@/app/(pages)/(auth)/signin/page");
  };

  const handleSignUpClick = () => {
    navigate("@/app/(pages)/(auth)/signup/page");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button variant="outlined" color="inherit" sx={{ marginRight: 1 }} onClick={handleSignInClick}>
            Sign In
          </Button>
          <Button variant="outlined" color="inherit" sx={{ marginRight: 1 }} onClick={handleSignUpClick}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}