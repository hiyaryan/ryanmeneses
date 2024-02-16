"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.850)",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: "0.2em",
      fontVariant: "small-caps",
    },
    h2: {
      fontSize: "1.8rem",
      letterSpacing: "0.1em",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 450,
      letterSpacing: "0.05em",
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 300,
      letterSpacing: "0.04em",
    },
    body1: {
      fontSize: "0.9rem",
      fontWeight: 385,
      letterSpacing: "0.03em",
    },
  },
});

export default theme;
