import { Box, Typography, TextField, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoryPreviewSection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "ceramics",
      title: "Ceramics",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=300&fit=crop",
      path: "/categories/ceramics",
    },
    {
      id: "jewelry",
      title: "Jewelry",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      path: "/categories/jewelry",
    },
    {
      id: "paintings",
      title: "Paintings",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      path: "/categories/paintings",
    },
  ];

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "#fafafa",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Heading Area */}
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontFamily: "Playfair Display, serif",
              color: "#2c2c2c",
              letterSpacing: 0.5,
            }}
          >
            Explore Our Handmade World
          </Typography>

          {/* Search Bar Styled Element */}
          <Box
            sx={{
              maxWidth: "600px",
              width: "100%",
              mx: "auto",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="What can I find here?"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0 4px 16px rgba(139, 111, 71, 0.2)",
                  },
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                  },
                  "&:hover fieldset": {
                    borderColor: "#bdbdbd",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8b6f47",
                  },
                },
                "& .MuiInputBase-input": {
                  py: 1.5,
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1rem",
                },
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>

        {/* Category Cards */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardActionArea
                  onClick={() => handleCategoryClick(category.path)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={category.image}
                    alt={category.title}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      py: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      sx={{
                        fontFamily: "Playfair Display, serif",
                        color: "#2c2c2c",
                        textAlign: "center",
                      }}
                    >
                      {category.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CategoryPreviewSection;

