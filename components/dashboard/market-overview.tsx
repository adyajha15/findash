"use client"

import { Box, Grid, Typography, Paper, useTheme } from "@mui/material"
import { TrendingUp, TrendingDown } from "lucide-react"

type IndexData = {
  name: string
  value: number
  change: number
  changePercent: number
}

const marketData: IndexData[] = [
  { name: "NIFTY 50", value: 18245.32, change: 123.45, changePercent: 0.68 },
  { name: "SENSEX", value: 61475.15, change: 387.65, changePercent: 0.63 },
  { name: "NIFTY BANK", value: 43567.89, change: -156.78, changePercent: -0.36 },
  { name: "NIFTY IT", value: 28976.54, change: 234.56, changePercent: 0.82 },
]

export default function MarketOverview() {
  const theme = useTheme()

  return (
    <Grid container spacing={2}>
      {marketData.map((index) => (
        <Grid item xs={12} sm={6} md={3} key={index.name}>
          <Paper
            elevation={1}
            sx={{
              p: 2,
              height: "100%",
              bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
              {index.name}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {index.value.toFixed(2)}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {index.change >= 0 ? <TrendingUp size={16} color="green" /> : <TrendingDown size={16} color="red" />}
              <Typography
                variant="body2"
                sx={{
                  ml: 0.5,
                  color: index.change >= 0 ? "success.main" : "error.main",
                }}
              >
                {index.change >= 0 ? "+" : ""}
                {index.change.toFixed(2)} ({index.changePercent >= 0 ? "+" : ""}
                {index.changePercent.toFixed(2)}%)
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

