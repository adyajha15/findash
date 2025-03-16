"use client"

import { useState, useRef, useEffect } from "react"
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  useTheme,
} from "@mui/material"
import { Chat, Settings, Dashboard, Send, Mic } from "@mui/icons-material"
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
      ctx.fillStyle = "rgba(184, 134, 11, 0.5)" // Gold color for Jhunjhunwala

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

export default function JhunjhunwalaPage() {
  const theme = useTheme()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaste! I'm here to share investment wisdom inspired by Rakesh Jhunjhunwala. What would you like to know about investing in the Indian markets?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
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
      const botResponses = [
        "Remember, markets are never wrong – opinions often are. Focus on the price action, not just the narrative.",
        "The stock market is a device for transferring money from the impatient to the patient. Patience is key to wealth creation.",
        "Emotional investment decisions are usually wrong. Stay rational and stick to your investment thesis.",
        "Respect the market. Have an open mind. Know what to stake. Know when to take a loss. Be responsible.",
        "Never invest at unreasonable valuations. Even the best of companies can turn out to be bad investments if you overpay.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
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
        setInput("What were Jhunjhunwala's views on long-term investing?")
        setIsRecording(false)
      }, 2000)
    }
  }

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", bgcolor: "background.default" }}>
      {/* Top Navigation */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Jhunjhunwala Speaks
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
                The Bull Speaks
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Get investment wisdom inspired by the legendary Rakesh Jhunjhunwala, the Warren Buffett of India.
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
                    <Avatar sx={{ bgcolor: message.sender === "user" ? "primary.main" : "#B8860B" }}>
                      {message.sender === "user" ? "👤" : "🐂"}
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
                placeholder="Ask about investment philosophy, stock picking, or market insights..."
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

