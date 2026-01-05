import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

const FeaturedProductsSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Handwoven Ceramic Vase",
      artisan: "Ananya Crafts",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Silver Leaf Necklace",
      artisan: "Kavya Designs",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Watercolor Landscape Art Painting",
      artisan: "Rahul Art Studio",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      badge: "Bestseller",
    },
    {
      id: 4,
      name: "Clay Pottery Set",
      artisan: "Priya Pottery",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Beaded Bracelet",
      artisan: "Meera Jewelry",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Abstract Canvas Art",
      artisan: "Arjun Creations",
      price: 4299,
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      badge: "Bestseller",
    },
    {
      id: 7,
      name: "Handwoven Textile Scarf",
      artisan: "Sara Weaves",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1584974287509-4a65f6d26f0a?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Wooden Carved Bowl",
      artisan: "Vikram Woodcraft",
      price: 2299,
      image:
        "https://images.unsplash.com/photo-1585091960193-202ddfd8e61a?w=400&h=400&fit=crop",
      badge: "New",
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold">
            Loved by Our Community
          </Typography>
          <Typography color="text.secondary">
            Handpicked favorites crafted and loved by many
          </Typography>
        </Box>

        {/* 🔥 CSS GRID – FIXED WIDTH ALWAYS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)", // 🔒 4 PER ROW
            },
            gap: 4,
          }}
        >
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: "100%",
                height: 420, // 🔒 CARD HEIGHT LOCK
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Badge */}
              {product.badge && (
                <Chip
                  label={product.badge}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 2,
                    backgroundColor: "#8b6f47",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                />
              )}

              {/* IMAGE – FIXED SIZE */}
              <Box sx={{ height: 240, width: "100%", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* CONTENT – FIXED */}
              <CardContent
                sx={{
                  height: 180,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Name */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    height: "2.6em",
                    lineHeight: 1.3,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.name}
                </Typography>

                {/* Artisan */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    height: "1.5em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  by {product.artisan}
                </Typography>

                {/* Price */}
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mt: "auto", color: "#8b6f47" }}
                >
                  ₹{product.price.toLocaleString("en-IN")}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA */}
        <Box textAlign="center" mt={6}>
          <Button variant="outlined">View All Products →</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedProductsSection;
