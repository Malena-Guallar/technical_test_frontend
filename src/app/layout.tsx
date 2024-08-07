import type { Metadata } from "next";
import "./globals.css";
import { theme } from "../app/theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Djob technical test",
  description: "Developped by Malena Guallar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className="bg-white inline text-black" >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
