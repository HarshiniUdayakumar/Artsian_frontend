import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import Navbar from "../components/Navbar";


const jewelryImages = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1588444650700-6e1fcdcd0c2a?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600185365483-26d7e5d77f84?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop",
];

const Jewelry = () => {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}
          >
            Jewelry
          </Typography>
          <Typography color="text.secondary">
            Explore our exquisite collection of handcrafted jewelry
          </Typography>
        </Box>

        {/* 🔥 IMAGE GRID */}
        <Grid container spacing={4}>
          {jewelryImages.map((img, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  width: "100%",
                  height: 260, // 🔒 FIXED HEIGHT
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt="Jewelry item"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 🔥 KEY
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Jewelry;
