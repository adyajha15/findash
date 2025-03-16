"use client"

import { useState, useRef, useEffect } from "react"
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Drawer,
  AppBar,
  Toolbar,
  useTheme,
} from "@mui/material"
import { Send, Mic, Dashboard, Settings, Chat, Menu as MenuIcon, Close } from "@mui/icons-material"
import Link from "next/link"

// Particle effect component
const ParticleEffect = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const particles = []

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize particles
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        angle: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random(),
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(138, 43, 226, 0.5)"

      particles.forEach((particle) => {
        particle.x += Math.cos(particle.angle) * particle.speed
        particle.y += Math.sin(particle.angle) * particle.speed

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.3,
      }}
    />
  )
}

const personas = [
  {
    id: "advisor",
    name: "Investment Advisor",
    description: "Professional financial advisor with deep market knowledge",
    avatar: "👨‍💼",
  },
  {
    id: "jhunjhunwala",
    name: "Rakesh Jhunjhunwala",
    description: "The Warren Buffett of India",
    avatar: "🐂",
  },
  {
    id: "analyst",
    name: "Technical Analyst",
    description: "Expert in technical analysis and chart patterns",
    avatar: "📊",
  },
  {
    id: "economist",
    name: "Economist",
    description: "Macro-economic perspective on markets",
    avatar: "📈",
  },
]

export default function ChatbotPage() {
  const theme = useTheme()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI investment assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [selectedPersona, setSelectedPersona] = useState(personas[0])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: `As ${selectedPersona.name}, I would suggest looking into diversified mutual funds that match your risk profile. What's your investment horizon?`,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleVoice = () => {
    setIsRecording(!isRecording)
    // Implement voice recording logic here
    if (isRecording) {
      // Simulate voice recognition result
      setTimeout(() => {
        setInput("What are the best mutual funds to invest in right now?")
        setIsRecording(false)
      }, 2000)
    }
  }

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      {/* Top Navigation */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            FinVest AI
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
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

      {/* Persona Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6">Select Persona</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          {personas.map((persona) => (
            <Paper
              key={persona.id}
              sx={{
                p: 2,
                mb: 2,
                cursor: "pointer",
                bgcolor: selectedPersona.id === persona.id ? "primary.dark" : "background.paper",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
              onClick={() => {
                setSelectedPersona(persona)
                setDrawerOpen(false)
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h4">{persona.avatar}</Typography>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {persona.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {persona.description}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>
      </Drawer>

      {/* Chat Area */}
      <Box sx={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <ParticleEffect />

        <Box sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Center Text */}
          {messages.length === 1 && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "80%",
                zIndex: 1,
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                Next-Level Investing
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Simply state your request about what you want to know, and FinVest AI will create a personalized
                investment plan for you.
              </Typography>
            </Box>
          )}

          {/* Messages */}
          <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
            <List>
              {messages.map((message) => (
                <ListItem
                  key={message.id}
                  sx={{
                    flexDirection: message.sender === "user" ? "row-reverse" : "row",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: message.sender === "user" ? "primary.main" : "secondary.main" }}>
                      {message.sender === "user" ? "👤" : selectedPersona.avatar}
                    </Avatar>
                  </ListItemAvatar>
                  <Paper
                    sx={{
                      p: 2,
                      maxWidth: "70%",
                      bgcolor: message.sender === "user" ? "primary.dark" : "background.paper",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body1">{message.text}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {message.timestamp.toLocaleTimeString()}
                    </Typography>
                  </Paper>
                </ListItem>
              ))}
              <div ref={messagesEndRef} />
            </List>
          </Box>

          {/* Input Area */}
          <Paper
            sx={{
              p: 2,
              borderRadius: "20px",
              m: 2,
              bgcolor: "background.paper",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                InputProps={{ disableUnderline: true }}
              />
              <IconButton color={isRecording ? "error" : "default"} onClick={handleVoice}>
                <Mic />
              </IconButton>
              <IconButton color="primary" onClick={handleSend} disabled={!input.trim()}>
                <Send />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

