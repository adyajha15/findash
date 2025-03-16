"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import CssBaseline from "@mui/material/CssBaseline";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>FinVest AI</title>
        <meta name="description" content="Your AI-powered investment assistant" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
