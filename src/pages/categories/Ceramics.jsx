import { Box, Typography, Container } from "@mui/material";
import Navbar from "../public/Navbar";

const Ceramics = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            textAlign: "center",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontFamily: "Playfair Display, serif",
              color: "#2c2c2c",
              letterSpacing: 0.5,
              mb: 3,
            }}
          >
            Ceramics
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: "600px",
            }}
          >
            Discover our beautiful collection of handcrafted ceramics
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Ceramics;

