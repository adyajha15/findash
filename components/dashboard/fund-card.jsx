"use client"

import { Box, Typography, Paper, useTheme } from "@mui/material"

export default function FundCard({ fund }) {
  const theme = useTheme()

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        bgcolor: theme.palette.mode === "dark" ? "#2A2A2A" : "#f9f9f9",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            bgcolor: fund.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
            {fund.name.charAt(0)}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
          {fund.name}
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        {fund.performance}
      </Typography>

      <Box
        sx={{
          height: 40,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, ${fund.color}50 0%, transparent 100%)`,
          },
        }}
      >
        <svg width="100%" height="40" viewBox="0 0 200 40">
          <path d="M0,30 Q25,15 50,25 T100,15 T150,25 T200,10" fill="none" stroke={fund.color} strokeWidth="2" />
        </svg>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Box>
          <Typography variant="caption" color="text.secondary">
            Investors
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            {fund.investors}
          </Typography>
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary">
            Risk
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            {fund.risk}
          </Typography>
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary">
            Term
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "medium" }}>
            {fund.term}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

