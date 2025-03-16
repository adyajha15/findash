"use client"

import { Card, CardContent, Typography, Box, useTheme } from "@mui/material"
import { Calendar } from "lucide-react"

type NewsCardProps = {
  title: string
  date: string
  summary: string
}

export default function NewsCard({ title, date, summary }: NewsCardProps) {
  const theme = useTheme()

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        },
        background: theme.palette.mode === "dark" ? "linear-gradient(45deg, #1A1A1A 30%, #2C2C2C 90%)" : "white",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "#D4AF37" : "#8B7500",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Calendar size={14} />
          <Typography variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
            {date}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  )
}

