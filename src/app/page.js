import NavBar from "../components/NavBar";
import Profile from "../components/Body/Profile";
import About from "../components/Body/About";
import StickyFooter from "../components/StickyFooter";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }} >
      <NavBar />
      <Profile />
      <About />
      <StickyFooter />
    </Box>
  );
}
