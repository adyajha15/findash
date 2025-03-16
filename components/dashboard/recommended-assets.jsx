"use client"

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material"

export default function RecommendedAssets() {
  const theme = useTheme()

  const assets = [
    {
      id: "AV",
      name: "Avrist Ada Kas Mutiara",
      company: "PT Avrist Asset Management",
      allocation: 12872,
      date: "04 Jan 2024",
      status: "Success",
    },
    {
      id: "BD",
      name: "Batavia Dana Kas Maxima",
      company: "PT Batavia Prosperindo Aset Manajemen",
      allocation: 7396,
      date: "16 Dec 2023",
      status: "Success",
    },
  ]

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mutual Funds Product</TableCell>
            <TableCell align="right">Allocation</TableCell>
            <TableCell align="right">Topup Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.mode === "dark" ? "#333" : "#eee",
                      color: theme.palette.text.primary,
                      width: 36,
                      height: 36,
                      mr: 2,
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                    }}
                  >
                    {asset.id}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                      {asset.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {asset.company}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                  ${asset.allocation.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">{asset.date}</Typography>
              </TableCell>
              <TableCell align="right">
                <Chip
                  label={asset.status}
                  sx={{
                    bgcolor: "#8A2BE2",
                    color: "white",
                    fontWeight: "medium",
                    fontSize: "0.75rem",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

