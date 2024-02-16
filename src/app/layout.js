import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import NavBar from "@/components/NavBar";
import StickyFooter from "@/components/StickyFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryan's Brew-cessities",
  description: "Ryan Meneses' personal website and portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <AppRouterCacheProvider>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <NavBar />
              {children}
              <StickyFooter />
            </Box>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
