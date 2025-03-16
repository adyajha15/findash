"use client"

import { Box, Typography, useTheme } from "@mui/material"

export default function AssetAllocation() {
  const theme = useTheme()

  const assets = [
    { name: "Money Market", value: 71590, percentage: 40, color: "#8A2BE2" },
    { name: "Stocks", value: 50113, percentage: 28, color: "#4D96FF" },
    { name: "Bonds", value: 57272, percentage: 32, color: "#6BCB77" },
  ]

  return (
    <Box>
      {/* Progress bar */}
      <Box sx={{ display: "flex", mb: 3, height: 12, borderRadius: 6, overflow: "hidden" }}>
        {assets.map((asset, index) => (
          <Box
            key={index}
            sx={{
              width: `${asset.percentage}%`,
              bgcolor: asset.color,
            }}
          />
        ))}
      </Box>

      {/* Asset details */}
      {assets.map((asset, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: asset.color,
                  mr: 1,
                }}
              />
              <Typography variant="body2">{asset.name}</Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              ${asset.value.toLocaleString()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <Box
              sx={{
                px: 1,
                py: 0.25,
                borderRadius: 1,
                bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                fontSize: "0.75rem",
              }}
            >
              {asset.percentage}%
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

