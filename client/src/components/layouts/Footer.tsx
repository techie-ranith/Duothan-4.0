"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ py: 3, backgroundColor: "#1976d2", color: "white" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" component="p">
          © 2024 Quadzilla. All rights reserved.
        </Typography>
        <Box>
          <IconButton aria-label="facebook" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="twitter" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="instagram" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="linkedin" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
