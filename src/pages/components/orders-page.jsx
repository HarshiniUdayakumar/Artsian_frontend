

import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"

const orders = [
  { id: 1, productName: "Handwoven Silk Scarf", orderDate: "2024-01-15", status: "Delivered" },
  { id: 2, productName: "Ceramic Tea Set", orderDate: "2024-01-18", status: "Shipped" },
  { id: 3, productName: "Hand-painted Canvas Art", orderDate: "2024-01-20", status: "Processing" },
  { id: 4, productName: "Wooden Jewelry Box", orderDate: "2024-01-22", status: "Delivered" },
  { id: 5, productName: "Embroidered Cushion Cover", orderDate: "2024-01-25", status: "Shipped" },
  { id: 6, productName: "Terracotta Planter Set", orderDate: "2024-01-28", status: "Processing" },
  { id: 7, productName: "Macrame Wall Hanging", orderDate: "2024-02-01", status: "Delivered" },
  { id: 8, productName: "Brass Candle Holders", orderDate: "2024-02-05", status: "Shipped" },
]

const getStatusColor = (status) => {
  switch (status) {
    case "Processing":
      return { bg: "#FFF3E0", color: "#E65100" }
    case "Shipped":
      return { bg: "#E3F2FD", color: "#1565C0" }
    case "Delivered":
      return { bg: "#E8F5E9", color: "#2E7D32" }
    default:
      return { bg: "#F5F5F5", color: "#757575" }
  }
}

export default function OrdersPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        My Orders
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Track and manage your orders
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
              <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Order Date</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Order Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const statusStyle = getStatusColor(order.status)
              return (
                <TableRow
                  key={order.id}
                  sx={{
                    "&:hover": { backgroundColor: "#FAFAFA" },
                    transition: "background-color 0.2s",
                  }}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {order.productName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(order.orderDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      size="small"
                      sx={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.color,
                        fontWeight: 500,
                        borderRadius: 2,
                      }}
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
