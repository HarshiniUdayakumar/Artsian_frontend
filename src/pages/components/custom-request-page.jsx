

import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material"
import { Person as ArtisanIcon } from "@mui/icons-material"

const customRequests = [
  {
    id: 1,
    artisanName: "Meera's Craft Studio",
    description: "Custom embroidered saree with traditional Kantha work",
    status: "In Progress",
  },
  {
    id: 2,
    artisanName: "Pottery Paradise",
    description: "Set of 6 hand-painted ceramic dinner plates",
    status: "Accepted",
  },
  {
    id: 3,
    artisanName: "Woodwork Wonders",
    description: "Personalized wooden name board for home entrance",
    status: "Completed",
  },
  {
    id: 4,
    artisanName: "Silver Creations",
    description: "Custom silver anklet with traditional design",
    status: "Pending",
  },
  {
    id: 5,
    artisanName: "Textile Tales",
    description: "Hand-block printed curtains for living room",
    status: "In Progress",
  },
  {
    id: 6,
    artisanName: "Brass & Beyond",
    description: "Customized brass lamp with intricate patterns",
    status: "Accepted",
  },
]

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return { bg: "#FFF3E0", color: "#E65100", border: "#FFB74D" }
    case "Accepted":
      return { bg: "#E3F2FD", color: "#1565C0", border: "#64B5F6" }
    case "In Progress":
      return { bg: "#F3E5F5", color: "#7B1FA2", border: "#BA68C8" }
    case "Completed":
      return { bg: "#E8F5E9", color: "#2E7D32", border: "#81C784" }
    default:
      return { bg: "#F5F5F5", color: "#757575", border: "#BDBDBD" }
  }
}

export default function CustomRequestsPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Custom Requests
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Track your personalized orders from artisans
      </Typography>

      <Grid container spacing={3}>
        {customRequests.map((request) => {
          const statusStyle = getStatusStyle(request.status)
          return (
            <Grid size={{ xs: 12, md: 6 }} key={request.id}>
              <Card
                sx={{
                  height: "100%",
                  borderLeft: `4px solid ${statusStyle.border}`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: "#F5F5F5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ArtisanIcon sx={{ color: "primary.main" }} />
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {request.artisanName}
                      </Typography>
                    </Box>
                    <Chip
                      label={request.status}
                      size="small"
                      sx={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.color,
                        fontWeight: 500,
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {request.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
