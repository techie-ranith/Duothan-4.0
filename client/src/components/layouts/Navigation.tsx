"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginRight: 1 }}
            onClick={handleSignInClick}
          >
            Login as Admin
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginRight: 1 }}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ marginRight: 1 }}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
