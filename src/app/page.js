import NavBar from "../components/NavBar";
import StickyFooter from "../components/StickyFooter";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }} >
          <NavBar />
          <StickyFooter />
        </Box>
      </ThemeProvider>
    </>
  );
}
