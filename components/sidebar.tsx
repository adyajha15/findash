"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { BarChart, TrendingUp, Bookmark, AccountBalance, Settings, Explore } from "@mui/icons-material"

const drawerWidth = 240

export default function Sidebar() {
  const theme = useTheme()
  const pathname = usePathname()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [open, setOpen] = useState(!isMobile)

  const menuItems = [
    { text: "Explore", icon: <Explore />, path: "/" },
    { text: "Stocks", icon: <TrendingUp />, path: "/stocks" },
    { text: "Mutual Funds", icon: <BarChart />, path: "/funds" },
    { text: "Watchlist", icon: <Bookmark />, path: "/watchlist" },
    { text: "Investments", icon: <AccountBalance />, path: "/investments" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ]

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: theme.palette.mode === "dark" ? "#1A1A1A" : "#f9f9f9",
          borderRight: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
        },
      }}
    >
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            bgcolor: "transparent",
            width: 40,
            height: 40,
            mr: 1,
            background: "linear-gradient(45deg, #8A2BE2 0%, #A020F0 100%)",
          }}
        >
          <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
            F
          </Typography>
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          FinVest
        </Typography>
      </Box>

      <List sx={{ px: 1, mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <Link href={item.path} style={{ textDecoration: "none", width: "100%", color: "inherit" }}>
              <ListItemButton
                selected={pathname === item.path}
                sx={{
                  borderRadius: 2,
                  "&.Mui-selected": {
                    bgcolor: theme.palette.mode === "dark" ? "rgba(138, 43, 226, 0.2)" : "rgba(138, 43, 226, 0.1)",
                    color: "#8A2BE2",
                    "&:hover": {
                      bgcolor: theme.palette.mode === "dark" ? "rgba(138, 43, 226, 0.3)" : "rgba(138, 43, 226, 0.2)",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "#8A2BE2",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color: pathname === item.path ? "#8A2BE2" : "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

