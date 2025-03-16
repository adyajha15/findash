"use client"

import { useState } from "react"
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  Snackbar,
  Avatar,
  useTheme,
} from "@mui/material"
import { Chat, Dashboard, Save, DarkMode, LightMode, Edit, Person } from "@mui/icons-material"
import Link from "next/link"
import { useTheme as useNextTheme } from "next-themes"

export default function SettingsPage() {
  const theme = useTheme()
  const { theme: currentTheme, setTheme } = useNextTheme()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [currency, setCurrency] = useState("INR")
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [editingProfile, setEditingProfile] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: "Arthur Sjorgen",
    email: "arthur.sjorgen@example.com",
    phone: "+91 98765 43210",
    plan: "Meinvest Plus",
  })

  const handleSaveSettings = () => {
    setSnackbarOpen(true)
    setEditingProfile(false)
    // In a real app, you would save these settings to a backend
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Top Navigation */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Settings
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
            <Link href="/dashboard" style={{ color: "inherit", textDecoration: "none" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <IconButton>
                  <Dashboard />
                </IconButton>
                <Typography variant="caption">Dashboard</Typography>
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
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          Settings
        </Typography>

        <Grid container spacing={3}>
          {/* User Profile */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                background:
                  theme.palette.mode === "dark" ? "linear-gradient(45deg, #1A1A1A 30%, #2C2C2C 90%)" : "white",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h6">User Profile</Typography>
                <IconButton onClick={() => setEditingProfile(!editingProfile)}>
                  <Edit />
                </IconButton>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    bgcolor: theme.palette.primary.main,
                  }}
                >
                  <Person sx={{ fontSize: 50 }} />
                </Avatar>

                {!editingProfile ? (
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {userProfile.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userProfile.plan}
                    </Typography>
                  </Box>
                ) : (
                  <Button variant="outlined" component="label" sx={{ mb: 2 }}>
                    Change Photo
                    <input type="file" hidden />
                  </Button>
                )}
              </Box>

              <Divider sx={{ my: 3 }} />

              {editingProfile ? (
                <Box>
                  <TextField
                    fullWidth
                    label="Full Name"
                    defaultValue={userProfile.name}
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    defaultValue={userProfile.email}
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    defaultValue={userProfile.phone}
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />

                  <Button
                    variant="contained"
                    startIcon={<Save />}
                    onClick={handleSaveSettings}
                    sx={{
                      mt: 2,
                      bgcolor: theme.palette.primary.main,
                    }}
                  >
                    Save Profile
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">{userProfile.email}</Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1">{userProfile.phone}</Typography>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Appearance */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                background:
                  theme.palette.mode === "dark" ? "linear-gradient(45deg, #1A1A1A 30%, #2C2C2C 90%)" : "white",
              }}
            >
              <Typography variant="h6" sx={{ mb: 3 }}>
                Appearance
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    p: 2,
                    borderRadius: 1,
                    bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {theme.palette.mode === "dark" ? <DarkMode sx={{ fontSize: 20 }} /> : <LightMode sx={{ fontSize: 20 }} />}
                    <Typography variant="body1" sx={{ ml: 2 }}>
                      Theme Mode
                    </Typography>
                  </Box>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={theme.palette.mode === "dark"}
                        onChange={() => setTheme(theme.palette.mode === "dark" ? "light" : "dark")}
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: theme.palette.primary.main,
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                            backgroundColor: theme.palette.primary.main,
                          },
                        }}
                      />
                    }
                    label={theme.palette.mode === "dark" ? "Dark" : "Light"}
                    labelPlacement="end"
                  />
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ mb: 3 }}>
                Notifications
              </Typography>

              <Box sx={{ mb: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notificationsEnabled}
                      onChange={(e) => setNotificationsEnabled(e.target.checked)}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label="Enable Notifications"
                />
              </Box>

              <Box sx={{ ml: 4, mb: 2 }}>
                <FormControlLabel
                  disabled={!notificationsEnabled}
                  control={
                    <Switch
                      checked={emailNotifications && notificationsEnabled}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label="Email Notifications"
                />
              </Box>

              <Box sx={{ ml: 4, mb: 2 }}>
                <FormControlLabel
                  disabled={!notificationsEnabled}
                  control={
                    <Switch
                      checked={pushNotifications && notificationsEnabled}
                      onChange={(e) => setPushNotifications(e.target.checked)}
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                          backgroundColor: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label="Push Notifications"
                />
              </Box>
            </Paper>
          </Grid>

          {/* Preferences */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 2,
                background:
                  theme.palette.mode === "dark" ? "linear-gradient(45deg, #1A1A1A 30%, #2C2C2C 90%)" : "white",
              }}
            >
              <Typography variant="h6" sx={{ mb: 3 }}>
                Preferences
              </Typography>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                  labelId="currency-label"
                  value={currency}
                  label="Currency"
                  onChange={(e) => setCurrency(e.target.value)}
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <MenuItem value="INR">Indian Rupee (₹)</MenuItem>
                  <MenuItem value="USD">US Dollar ($)</MenuItem>
                  <MenuItem value="EUR">Euro (€)</MenuItem>
                  <MenuItem value="GBP">British Pound (£)</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="contained"
                startIcon={<Save />}
                onClick={handleSaveSettings}
                sx={{
                  mt: 2,
                  bgcolor: theme.palette.primary.main,
                }}
              >
                Save Preferences
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
            Settings saved successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}

