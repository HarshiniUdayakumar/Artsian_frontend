"use client"

import { useState } from "react"
import { Box, Button, Card, CardContent, Grid, TextField, Typography, Avatar, Snackbar, Alert } from "@mui/material"
import { Save as SaveIcon, Person as PersonIcon } from "@mui/icons-material"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    address: "42, Green Valley Apartments\nKoramangala, Bangalore\nKarnataka - 560034",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value })
  }

  const handleSave = () => {
    setShowSuccess(true)
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Buyer Profile
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Manage your account information
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ textAlign: "center", p: 3 }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                backgroundColor: "primary.main",
                fontSize: 48,
              }}
            >
              <PersonIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Member since Jan 2024
            </Typography>
            <Box sx={{ mt: 3, p: 2, backgroundColor: "#F5F5F5", borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Verified Buyer
              </Typography>
              <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                12 Orders Completed
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Personal Information
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="Name"
                  value={profile.name}
                  onChange={handleChange("name")}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
                <TextField
                  label="Email"
                  value={profile.email}
                  fullWidth
                  variant="outlined"
                  disabled
                  helperText="Email cannot be changed"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
                <TextField
                  label="Address"
                  value={profile.address}
                  onChange={handleChange("address")}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(46, 125, 50, 0.3)",
                      "&:hover": {
                        boxShadow: "0 6px 16px rgba(46, 125, 50, 0.4)",
                      },
                    }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ borderRadius: 2 }}>
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  )
}
