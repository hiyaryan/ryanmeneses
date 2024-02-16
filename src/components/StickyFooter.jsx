"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="white">
      {"Copyright © "}
      {new Date().getFullYear()}{" "}
      <CoffeeOutlinedIcon sx={{ fontSize: "medium", mb: "-0.2em" }} />{" "}
      <Link color="#ffffff" href="https://ryanmeneses.com/">
        Ryan&apos;s Brew-cessities
      </Link>
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: "auto",
        }}
        backgroundColor="primary.main"
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
