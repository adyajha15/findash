"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  useTheme,
} from "@mui/material"
import { Send, User, Bot } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function InvestmentAdvisor() {
  const theme = useTheme()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your personal investment advisor. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Based on your risk profile, I'd recommend a balanced portfolio with 60% equity and 40% debt.",
        "For long-term wealth creation, consider investing in index funds with low expense ratios.",
        "Given the current market conditions, it might be a good time to increase your SIP amounts.",
        "Diversification is key. Consider adding international funds to your portfolio for geographical diversification.",
        "For tax-efficient investing, you might want to look at ELSS funds that offer tax benefits under Section 80C.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: theme.palette.mode === "dark" ? "#D4AF37" : "#8B7500" }}
      >
        Chat with Your Advisor
      </Typography>

      <Paper
        elevation={3}
        sx={{
          height: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          overflow: "hidden",
          background: theme.palette.mode === "dark" ? "linear-gradient(45deg, #1A1A1A 30%, #2C2C2C 90%)" : "white",
        }}
      >
        {/* Chat history */}
        <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
          <List>
            {messages.map((message) => (
              <ListItem
                key={message.id}
                sx={{
                  display: "flex",
                  justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: message.sender === "user" ? "row-reverse" : "row",
                    alignItems: "flex-start",
                    maxWidth: "80%",
                  }}
                >
                  <ListItemAvatar sx={{ minWidth: 40 }}>
                    <Avatar
                      sx={{
                        bgcolor: message.sender === "user" ? "primary.main" : "#D4AF37",
                        width: 32,
                        height: 32,
                      }}
                    >
                      {message.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                    </Avatar>
                  </ListItemAvatar>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor:
                        message.sender === "user" ? "primary.main" : theme.palette.mode === "dark" ? "#333" : "#f5f5f5",
                      color: message.sender === "user" ? "white" : "text.primary",
                    }}
                  >
                    <ListItemText
                      primary={message.text}
                      secondary={message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      secondaryTypographyProps={{
                        sx: {
                          color: message.sender === "user" ? "rgba(255,255,255,0.7)" : "text.secondary",
                          fontSize: "0.75rem",
                          mt: 1,
                        },
                      }}
                    />
                  </Paper>
                </Box>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Box>

        <Divider />

        {/* Input area */}
        <Box sx={{ p: 2, bgcolor: theme.palette.mode === "dark" ? "#1A1A1A" : "#f5f5f5" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Ask about investments, market trends, or financial planning..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{
                mr: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: theme.palette.mode === "dark" ? "#2C2C2C" : "white",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              sx={{
                borderRadius: 2,
                p: "10px",
                minWidth: "unset",
                bgcolor: "#D4AF37",
                "&:hover": {
                  bgcolor: "#B8860B",
                },
              }}
            >
              <Send size={20} />
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

