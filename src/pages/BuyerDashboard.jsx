"use client"

import { useState } from "react"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  ShoppingBag as OrdersIcon,
  Favorite as WishlistIcon,
  Build as CustomRequestsIcon,
  Person as ProfileIcon,
  Menu as MenuIcon,
} from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import DashboardPage from "./components/dashboard-page.jsx";
import OrdersPage from "./components/orders-page.jsx";
import WishlistPage from "./components/wishlist-page.jsx";
import CustomRequestsPage from "./components/custom-request-page.jsx";
import ProfilePage from "./components/profile-page.jsx";



const drawerWidth = 280

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32",
      light: "#4CAF50",
      dark: "#1B5E20",
    },
    secondary: {
      main: "#FF8F00",
      light: "#FFB74D",
      dark: "#E65100",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        },
      },
    },
  },
})

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, id: "dashboard" },
  { text: "My Orders", icon: <OrdersIcon />, id: "orders" },
  { text: "Wishlist", icon: <WishlistIcon />, id: "wishlist" },
  { text: "Custom Requests", icon: <CustomRequestsIcon />, id: "custom-requests" },
  { text: "Buyer Profile", icon: <ProfileIcon />, id: "profile" },
]

export default function BuyerDashboard() {
  const [selectedPage, setSelectedPage] = useState("dashboard")
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleMenuClick = (pageId) => {
    setSelectedPage(pageId)
    setDrawerOpen(false)
  }

  const renderPage = () => {
    switch (selectedPage) {
      case "dashboard":
        return <DashboardPage />
      case "orders":
        return <OrdersPage />
      case "wishlist":
        return <WishlistPage />
      case "custom-requests":
        return <CustomRequestsPage />
      case "profile":
        return <ProfilePage />
      default:
        return <DashboardPage />
    }
  }

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 3, borderBottom: "1px solid #E0E0E0" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          Artisan Alley
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Handmade with Love
        </Typography>
      </Box>
      <List sx={{ flex: 1, px: 2, py: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={selectedPage === item.id}
              onClick={() => handleMenuClick(item.id)}
              sx={{
                borderRadius: 2,
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
                "&:hover": {
                  backgroundColor: "rgba(46, 125, 50, 0.08)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: selectedPage === item.id ? "white" : "primary.main",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: selectedPage === item.id ? 600 : 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: "1px solid #E0E0E0" }}>
        <Typography variant="caption" color="text.secondary">
          © 2026 Artisan Alley
        </Typography>
      </Box>
    </Box>
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            color: "text.primary",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ color: "primary.main", fontWeight: 600 }}>
              Artisan Alley
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            backgroundColor: "background.default",
            minHeight: "100vh",
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  )
}
