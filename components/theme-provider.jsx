"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const ThemeContext = createContext({ toggleTheme: () => {} })

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark") // Default to dark mode

  useEffect(() => {
    // Check for user preference in localStorage
    const savedMode = localStorage.getItem("theme-mode")
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Check for system preference
      setMode("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
    localStorage.setItem("theme-mode", newMode)
  }

  // Create a theme instance
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#8A2BE2", // Purple color
      },
      secondary: {
        main: "#121212", // Black
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
        paper: mode === "dark" ? "#1A1A1A" : "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

