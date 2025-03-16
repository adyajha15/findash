"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  useTheme,
} from "@mui/material"
import { TrendingUp, TrendingDown } from "lucide-react"

type Stock = {
  id: number
  name: string
  ticker: string
  price: number
  change: number
  changePercent: number
  volume: number
}

const stockData: Stock[] = [
  {
    id: 1,
    name: "Reliance Industries",
    ticker: "RELIANCE",
    price: 2456.75,
    change: 23.45,
    changePercent: 0.96,
    volume: 5432100,
  },
  { id: 2, name: "HDFC Bank", ticker: "HDFCBANK", price: 1678.3, change: -12.5, changePercent: -0.74, volume: 3214500 },
  { id: 3, name: "Infosys", ticker: "INFY", price: 1432.6, change: 5.8, changePercent: 0.41, volume: 2876300 },
  {
    id: 4,
    name: "Tata Consultancy Services",
    ticker: "TCS",
    price: 3245.9,
    change: -18.75,
    changePercent: -0.57,
    volume: 1987600,
  },
  { id: 5, name: "ICICI Bank", ticker: "ICICIBANK", price: 945.25, change: 12.3, changePercent: 1.32, volume: 4321000 },
  {
    id: 6,
    name: "State Bank of India",
    ticker: "SBIN",
    price: 567.8,
    change: 8.45,
    changePercent: 1.51,
    volume: 6543200,
  },
]

export default function StockTable() {
  const theme = useTheme()
  const [stocks] = useState<Stock[]>(stockData)

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", bgcolor: "transparent" }}>
      <Table sx={{ minWidth: 650 }} aria-label="stock table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Change %</TableCell>
            <TableCell align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                    {stock.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {stock.ticker}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  ₹{stock.price.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  {stock.change >= 0 ? <TrendingUp size={16} color="green" /> : <TrendingDown size={16} color="red" />}
                  <Typography
                    variant="body1"
                    sx={{
                      ml: 0.5,
                      color: stock.change >= 0 ? "success.main" : "error.main",
                    }}
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="body1"
                  sx={{
                    color: stock.changePercent >= 0 ? "success.main" : "error.main",
                  }}
                >
                  {stock.changePercent >= 0 ? "+" : ""}
                  {stock.changePercent.toFixed(2)}%
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1">{(stock.volume / 1000).toFixed(1)}K</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

