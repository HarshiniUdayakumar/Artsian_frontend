// src/pages/public/LandingPage.jsx
import { Container, Box, Typography, Button } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          borderRadius: 4,
          padding: { xs: 4, md: 8 },
        }}
      >
        {/* Hero Heading */}
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ letterSpacing: 1.2, fontFamily: 'Playfair Display, serif' }}
          gutterBottom
        >
          Handmade with Heart ❤️
        </Typography>

        {/* Hero Subheading */}
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600 }}
        >
          Discover unique creations directly from passionate artisans around the world
        </Typography>

        {/* Hero Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            borderRadius: 4,
            textTransform: "none",
            fontFamily: 'Playfair Display, serif',
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Explore Shop
        </Button>
      </Box>
      

          
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: { xs: 3, md: 6 },
    mt: 8,
    flexWrap: "wrap",
  }}
>
  {/* Category 1 */}
  <Box
    sx={{
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "#f7f4f0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: 2,
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": { transform: "scale(1.05)" },
    }}
  >
    <Typography fontWeight={600}>Ceramics</Typography>
  </Box>

  {/* Category 2 */}
  <Box
    sx={{
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "#f7f4f0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: 2,
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": { transform: "scale(1.05)" },
    }}
  >
    <Typography fontWeight={600}>Jewelry</Typography>
  </Box>

  {/* Category 3 */}
  <Box
    sx={{
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "#f7f4f0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: 2,
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": { transform: "scale(1.05)" },
    }}
  >
    <Typography fontWeight={600}>Paintings</Typography>
  </Box>
</Box>



    </Container>
  );
};

export default LandingPage;
