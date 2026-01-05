import { Box, Typography, Button, Grid, Card } from "@mui/material";
import { keyframes } from "@emotion/react";

// Circular rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HeroSection = () => {
  // Placeholder product images - using Unsplash for demo
  const productImages = [
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop",
  ];

  // Calculate positions for images in a circle
  const numImages = productImages.length;
  const radius = 170; // Radius of the circle
  const imagesWithPositions = productImages.map((img, index) => {
    const angle = (index * 360) / numImages;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    return { img, x, y, angle };
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "#fafafa",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontFamily: "Playfair Display, serif",
                color: "#2c2c2c",
                letterSpacing: 0.5,
                lineHeight: 1.2,
              }}
            >
              Handmade with Heart❤️
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
                maxWidth: { xs: "100%", md: "90%" },
              }}
            >
              Discover unique handcrafted products made with love
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  fontFamily: "Playfair Display, serif",
                  backgroundColor: "#8b6f47",
                  color: "#fff",
                  boxShadow: "0 4px 14px 0 rgba(139, 111, 71, 0.3)",
                  "&:hover": {
                    backgroundColor: "#7a5f3a",
                    boxShadow: "0 6px 20px 0 rgba(139, 111, 71, 0.4)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore Shop →
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Rotating Circle */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
              minHeight: { xs: "400px", md: "500px" },
              pr: { xs: 2, md: 4 },
            }}
          >
            {/* Rotating Container */}
            <Box
              sx={{
                position: "relative",
                width: "600px",
                height: "510px",
                animation: `${rotate} 20s linear infinite`,
              }}
            >
              {imagesWithPositions.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: { xs: 110, md: 140 },
                    height: { xs: 110, md: 140 },
                    transform: `translate(-50%, -50%) translate(${item.x}px, ${item.y}px)`,
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: `translate(-50%, -50%) translate(${item.x}px, ${item.y}px) scale(1.1)`,
                      zIndex: 10,
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={`Product ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Card>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;

