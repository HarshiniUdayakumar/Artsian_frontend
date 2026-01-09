"use client"

import { useState } from "react"
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Delete as DeleteIcon } from "@mui/icons-material"


const initialWishlist = [
  { id: 1, name: "Hand-stitched Leather Bag", price: 4500, image: "/leather-bag-handmade.jpeg" },
  { id: 2, name: "Vintage Silver Necklace", price: 2800, image: "/silver-necklace-vintage.jpeg" },
  { id: 3, name: "Handmade Pottery Vase", price: 1200, image: "/pottery-vase-handmade.jpeg" },
  { id: 4, name: "Organic Cotton Throw", price: 3200, image: "/cotton-throw-blanket.jpeg" },
  { id: 5, name: "Bamboo Wind Chimes", price: 850, image: "/bamboo-wind-chimes.jpeg" },
  { id: 6, name: "Hand-carved Wooden Spoons", price: 650, image: "/wooden-spoons-carved.jpeg" },
  { id: 7, name: "Block Print Table Runner", price: 980, image: "/block-print-textile.jpeg" },
  { id: 8, name: "Brass Incense Holder", price: 550, image: "/brass-incense-holder.jpg" },
]

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist)

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        My Wishlist
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {wishlist.length} items saved for later
      </Typography>

      {wishlist.length === 0 ? (
        <Card sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="text.secondary">
            Your wishlist is empty
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Browse our artisan products and save your favorites!
          </Typography>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {wishlist.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700, mb: 2 }}>
                    Rs.{item.price.toLocaleString()}
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleRemove(item.id)}
                      fullWidth
                      sx={{
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#FFEBEE",
                        },
                      }}
                    >
                      Remove from Wishlist
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}
