

import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import { ShoppingBag as OrdersIcon, Favorite as WishlistIcon, Build as CustomRequestsIcon } from "@mui/icons-material"

const summaryData = [
  {
    title: "Total Orders",
    value: 12,
    icon: <OrdersIcon sx={{ fontSize: 40 }} />,
    color: "#2E7D32",
    bgColor: "#E8F5E9",
  },
  {
    title: "Wishlist Items",
    value: 8,
    icon: <WishlistIcon sx={{ fontSize: 40 }} />,
    color: "#C62828",
    bgColor: "#FFEBEE",
  },
  {
    title: "Active Custom Requests",
    value: 3,
    icon: <CustomRequestsIcon sx={{ fontSize: 40 }} />,
    color: "#FF8F00",
    bgColor: "#FFF3E0",
  },
]

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, color: "text.primary" }}>
        Welcome back, Priya 👋
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Here's what's happening with your orders and requests
      </Typography>

      <Grid container spacing={3}>
        {summaryData.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: item.color }}>
                      {item.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: item.bgColor,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Recent Activity
        </Typography>
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { text: "Your order #1234 has been shipped", time: "2 hours ago", color: "#2E7D32" },
                { text: "Custom request accepted by Craft Studio", time: "1 day ago", color: "#FF8F00" },
                { text: "New item added to your wishlist", time: "2 days ago", color: "#C62828" },
              ].map((activity, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    backgroundColor: "#F5F5F5",
                    borderRadius: 2,
                    borderLeft: `4px solid ${activity.color}`,
                  }}
                >
                  <Typography variant="body2">{activity.text}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {activity.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
