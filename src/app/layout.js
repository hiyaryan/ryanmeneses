import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

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
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
