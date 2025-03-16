"use client"

import { Box, Typography, Paper, useTheme } from "@mui/material"

function CollectionCard({ collection }) {
  const theme = useTheme()

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        bgcolor: theme.palette.mode === "dark" ? "#2A2A2A" : "#f9f9f9",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 120,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "2rem",
          mb: 1,
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
        }}
      >
        {collection.icon}
      </Box>
      <Typography variant="body2" sx={{ fontWeight: "medium", textAlign: "center" }}>
        {collection.name}
      </Typography>
    </Paper>
  )
}

export default CollectionCard

