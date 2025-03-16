"use client"

import { useTheme } from "@mui/material/styles"
import { Box, Typography, useMediaQuery } from "@mui/material"

export default function PortfolioChart() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // In a real application, you would use a charting library like recharts, chart.js, or d3.js
  // For this example, we'll create a simple SVG chart

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const values = [50, 80, 100, 120, 150, 180, 200, 250, 220, 280, 260, 300]
  const maxValue = Math.max(...values)

  // Chart dimensions
  const width = 100
  const height = 100
  const padding = 10

  // Scale values to fit chart
  const scaledValues = values.map((value) => (value / maxValue) * (height - padding * 2) + padding)

  // Create path data
  const pathData = scaledValues
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width
      const y = height - value
      return `${index === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

  // Create area path data
  const areaPathData = `${pathData} L ${width} ${height} L 0 ${height} Z`

  return (
    <Box sx={{ height: 300, position: "relative", mt: 2 }}>
      {/* Y-axis labels */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 50,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {["$300", "$250", "$200", "$150", "$100", "$50", "$0"].map((label, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              color: "text.secondary",
              fontSize: "0.7rem",
            }}
          >
            {label}
          </Typography>
        ))}
      </Box>

      {/* Chart area */}
      <Box sx={{ position: "absolute", left: 50, right: 0, top: 0, bottom: 30 }}>
        {/* Horizontal grid lines */}
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${index * (100 / 6)}%`,
              height: 1,
              borderTop: `1px dashed ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            }}
          />
        ))}

        {/* Chart */}
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          {/* Area */}
          <path d={areaPathData} fill="url(#purpleGradient)" opacity="0.5" />

          {/* Line */}
          <path d={pathData} stroke="#8A2BE2" strokeWidth="2" fill="none" />

          {/* Current point */}
          <circle cx={width * 0.7} cy={height - scaledValues[7]} r="4" fill="#8A2BE2" stroke="white" strokeWidth="2" />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Data points */}
        <Box sx={{ position: "absolute", top: "30%", left: "70%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#8A2BE2" }} />
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Money Market : $18,000
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#4D96FF" }} />
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Stocks : $8,000
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#6BCB77" }} />
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Bonds : $26,000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* X-axis labels */}
      <Box
        sx={{
          position: "absolute",
          left: 50,
          right: 0,
          bottom: 0,
          height: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {months.map((month, index) => (
          <Typography
            key={index}
            variant="caption"
            sx={{
              color: "text.secondary",
              fontSize: "0.7rem",
            }}
          >
            {month}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

