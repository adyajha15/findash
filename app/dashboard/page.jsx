"use client"

import { useState } from "react"
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
  Chip,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
} from "@mui/material"
import { TrendingUp, MoreVert, Download, Search, Notifications, Message, Chat, Settings } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import Link from "next/link"
import PortfolioChart from "@/components/dashboard/portfolio-chart"
import AssetAllocation from "@/components/dashboard/asset-allocation"
import FundCard from "@/components/dashboard/fund-card"
import RecommendedAssets from "@/components/dashboard/recommended-assets"
import CollectionCard from "@/components/dashboard/collection-card"

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  backgroundColor: theme.palette.mode === "dark" ? "#1A1A1A" : "#ffffff",
  padding: theme.spacing(3),
  height: "100%",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  position: "relative",
  overflow: "hidden",
}))

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #8A2BE2 0%, #A020F0 100%)",
  color: "white",
  borderRadius: 12,
  padding: "10px 20px",
  "&:hover": {
    background: "linear-gradient(90deg, #7B27CC 0%, #8A1CD9 100%)",
  },
}))

const SearchBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "dark" ? "#2A2A2A" : "#f5f5f5",
  borderRadius: 12,
  padding: "8px 16px",
  width: "300px",
}))

export default function Dashboard() {
  const theme = useTheme()
  const [tabValue, setTabValue] = useState(0)
  const [assetTabValue, setAssetTabValue] = useState(0)

  const popularFunds = [
    {
      name: "Blackrock Fund",
      performance: "36.4%",
      investors: "33.5k",
      risk: "High",
      term: "5Y",
      color: "#FF6B6B",
    },
    {
      name: "Schwab Index",
      performance: "36.4%",
      investors: "13.7k",
      risk: "High",
      term: "5Y",
      color: "#4D96FF",
    },
    {
      name: "Fidelity Total",
      performance: "36.4%",
      investors: "48.4k",
      risk: "High",
      term: "3Y",
      color: "#6BCB77",
    },
  ]

  const collections = [
    { name: "High Return", icon: "📈" },
    { name: "High Growth", icon: "🌱" },
    { name: "Tax Saving", icon: "🐷" },
    { name: "Large Cap", icon: "🏢" },
    { name: "Mid Cap", icon: "🏬" },
    { name: "Small Cap", icon: "🏠" },
  ]

  const credly = [
    {
      name: "Credly Total Market Index Fund",
      returns: "Total Returns",
      performance: "16.42%",
      period: "(3Y)",
      color: "#FF6B6B",
    },
    {
      name: "Credly Value Fund",
      returns: "Total Returns",
      performance: "17.41%",
      period: "(3Y)",
      color: "#4D96FF",
    },
    {
      name: "Credly EV & New Age Auto Fund",
      returns: "Total Returns",
      performance: "14.38%",
      period: "(3Y)",
      color: "#6BCB77",
    },
  ]

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleAssetTabChange = (event, newValue) => {
    setAssetTabValue(newValue)
  }

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            FinVest Dashboard
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <IconButton>
                  <Chat />
                </IconButton>
                <Typography variant="caption">Chatbot</Typography>
              </Box>
            </Link>
            <Link href="/jhunjhunwala" style={{ color: "inherit", textDecoration: "none" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <IconButton>
                  <Chat />
                </IconButton>
                <Typography variant="caption">Jhunjhunwala</Typography>
              </Box>
            </Link>
            <Link href="/settings" style={{ color: "inherit", textDecoration: "none" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <IconButton>
                  <Settings />
                </IconButton>
                <Typography variant="caption">Settings</Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Welcome To Your Home Saving Plan
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Happy to see you again, Get update of your asset today, good luck!!
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchBox>
            <Search sx={{ color: "text.secondary", mr: 1 }} />
            <input
              placeholder="Search Mutual Funds"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                color: theme.palette.text.primary,
                width: "100%",
              }}
            />
          </SearchBox>

          <IconButton sx={{ position: "relative" }}>
            <Notifications />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bgcolor: "#8A2BE2",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" sx={{ color: "white", fontSize: "0.6rem" }}>
                7
              </Typography>
            </Box>
          </IconButton>

          <IconButton sx={{ position: "relative" }}>
            <Message />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bgcolor: "#8A2BE2",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" sx={{ color: "white", fontSize: "0.6rem" }}>
                10
              </Typography>
            </Box>
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar alt="User" src="/placeholder.svg?height=40&width=40" />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Arthur Sjorgen
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Meinvest Plus
              </Typography>
            </Box>
          </Box>

          <GradientButton startIcon={<Download />}>Download Report</GradientButton>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Saving Profits */}
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography variant="h6">Saving Profits</Typography>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </Box>

            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
              $12,975
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Chip
                icon={<TrendingUp sx={{ color: "#4CAF50 !important" }} />}
                label="6.75%"
                sx={{
                  bgcolor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  borderRadius: "4px",
                  height: "24px",
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                This Month
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <GradientButton fullWidth>Top Up Assets</GradientButton>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: 12,
                  borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
                  color: theme.palette.text.primary,
                }}
              >
                Sell Assets
              </Button>
            </Box>
          </StyledPaper>
        </Grid>

        {/* Savings Allocation */}
        <Grid item xs={12} md={8}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="h6">Saving Growth Statistics</Typography>
                <Typography variant="body2" color="text.secondary">
                  Revealing risk, and growth in investments.
                </Typography>
              </Box>

              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#8A2BE2",
                  },
                  "& .MuiTab-root": {
                    minWidth: "auto",
                    px: 2,
                    borderRadius: "8px",
                    "&.Mui-selected": {
                      color: "#8A2BE2",
                    },
                  },
                  bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                  borderRadius: "12px",
                  p: 0.5,
                }}
              >
                <Tab label="All" />
                <Tab label="Money Market" />
                <Tab label="Stocks" />
                <Tab label="Bonds" />
              </Tabs>
            </Box>

            <PortfolioChart />
          </StyledPaper>
        </Grid>

        {/* Savings Allocation */}
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="h6">Savings Allocation</Typography>
                <Typography variant="body2" color="text.secondary">
                  Assets you have in your account
                </Typography>
              </Box>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </Box>

            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
              $178,975
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Chip
                icon={<TrendingUp sx={{ color: "#4CAF50 !important" }} />}
                label="6.75%"
                sx={{
                  bgcolor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  borderRadius: "4px",
                  height: "24px",
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                This Month
              </Typography>
            </Box>

            <AssetAllocation />
          </StyledPaper>
        </Grid>

        {/* Popular Funds */}
        <Grid item xs={12} md={8}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h6">Popular Funds</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#8A2BE2",
                  cursor: "pointer",
                  fontWeight: "medium",
                }}
              >
                All mutual funds
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {popularFunds.map((fund, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FundCard fund={fund} />
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </Grid>

        {/* Collections */}
        <Grid item xs={12}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h6">Collections</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#8A2BE2",
                  cursor: "pointer",
                  fontWeight: "medium",
                }}
              >
                See more
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {collections.map((collection, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <CollectionCard collection={collection} />
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </Grid>

        {/* Funds by Credly */}
        <Grid item xs={12}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h6">Funds by Credly</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#8A2BE2",
                  cursor: "pointer",
                  fontWeight: "medium",
                }}
              >
                See more
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {credly.map((fund, index) => (
                <Grid item xs={12} md={4} key={index}>
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
                          C
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {fund.name}
                      </Typography>
                    </Box>

                    <Typography variant="caption" color="text.secondary">
                      {fund.returns}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "flex-end", mt: 0.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mr: 1 }}>
                        {fund.performance}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {fund.period}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        mt: 2,
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
                        <path
                          d="M0,30 Q25,20 50,25 T100,20 T150,25 T200,15"
                          fill="none"
                          stroke={fund.color}
                          strokeWidth="2"
                        />
                      </svg>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </Grid>

        {/* Other Recommended Assets */}
        <Grid item xs={12}>
          <StyledPaper>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="h6">Other Recommended Assets</Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore another prospected asset around you
                </Typography>
              </Box>

              <Tabs
                value={assetTabValue}
                onChange={handleAssetTabChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#8A2BE2",
                  },
                  "& .MuiTab-root": {
                    minWidth: "auto",
                    px: 2,
                    borderRadius: "8px",
                    "&.Mui-selected": {
                      color: "#8A2BE2",
                    },
                  },
                  bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                  borderRadius: "12px",
                  p: 0.5,
                }}
              >
                <Tab label="All" />
                <Tab label="Money Market" />
                <Tab label="Stocks" />
                <Tab label="Bonds" />
              </Tabs>
            </Box>

            <RecommendedAssets />
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  )
}

