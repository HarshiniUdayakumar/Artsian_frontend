import { Box, Typography, Container } from "@mui/material";
import Navbar from "../public/Navbar";

const Paintings = () => {
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
            Paintings
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: "600px",
            }}
          >
            Browse our stunning collection of handcrafted paintings
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Paintings;

