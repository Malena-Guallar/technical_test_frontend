"use client";

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  palette: {
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  }
});
