"use client"

import { useRef, useEffect } from "react"
import { Box, Typography, useTheme } from "@mui/material"

function PortfolioChart() {
  const theme = useTheme()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const values = [50, 80, 100, 120, 150, 180, 200, 250, 220, 280, 260, 300]

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid lines
    ctx.strokeStyle = theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
    ctx.lineWidth = 1

    // Horizontal grid lines
    for (let i = 0; i <= 6; i++) {
      const y = 30 + (i * (height - 60)) / 6
      ctx.beginPath()
      ctx.moveTo(50, y)
      ctx.lineTo(width - 20, y)
      ctx.stroke()
    }

    // Draw chart
    const maxValue = Math.max(...values)
    const dataPoints = values.map((value, index) => {
      const x = 50 + (index * (width - 70)) / (values.length - 1)
      const y = 30 + ((maxValue - value) * (height - 60)) / maxValue
      return { x, y }
    })

    // Draw area
    ctx.beginPath()
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y)
    dataPoints.forEach((point) => {
      ctx.lineTo(point.x, point.y)
    })

    // Complete the area path
    ctx.lineTo(dataPoints[dataPoints.length - 1].x, height - 30)
    ctx.lineTo(dataPoints[0].x, height - 30)
    ctx.closePath()

    // Fill area with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(138, 43, 226, 0.8)")
    gradient.addColorStop(1, "rgba(138, 43, 226, 0.1)")
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw line
    ctx.beginPath()
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y)
    dataPoints.forEach((point) => {
      ctx.lineTo(point.x, point.y)
    })
    ctx.strokeStyle = "#8A2BE2"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw current point
    const currentPoint = dataPoints[7] // Example current point
    ctx.beginPath()
    ctx.arc(currentPoint.x, currentPoint.y, 6, 0, Math.PI * 2)
    ctx.fillStyle = "#8A2BE2"
    ctx.fill()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw Y-axis labels
    ctx.fillStyle = theme.palette.text.secondary
    ctx.font = "10px Arial"
    ctx.textAlign = "right"
    for (let i = 0; i <= 6; i++) {
      const value = Math.round((maxValue / 6) * (6 - i))
      const y = 30 + (i * (height - 60)) / 6
      ctx.fillText(`$${value}`, 45, y + 4)
    }

    // Draw X-axis labels
    ctx.textAlign = "center"
    months.forEach((month, index) => {
      const x = 50 + (index * (width - 70)) / (months.length - 1)
      ctx.fillText(month, x, height - 10)
    })
  }, [theme])

  return (
    <Box sx={{ height: 300, position: "relative", mt: 2 }}>
      <canvas ref={canvasRef} width={800} height={300} style={{ width: "100%", height: "100%" }} />

      {/* Data points legend */}
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
  )
}

export default PortfolioChart

