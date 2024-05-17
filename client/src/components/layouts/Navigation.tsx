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
    navigate("@/app/(pages)/(auth)/signin/page");
  };

  const handleSignUpClick = () => {
    navigate("@/app/(pages)/(auth)/signup/page");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            Logo
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white", marginRight: 1 }}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
