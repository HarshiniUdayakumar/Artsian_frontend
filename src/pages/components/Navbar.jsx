import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4, md: 6 } }}>
        {/* Brand */}
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ letterSpacing: 1 , fontFamily: 'Playfair Display, serif' ,color:"black"}}
        >
          Artisan Alley
        </Typography>

        {/* Right Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Box sx={{ display: "flex", gap: 4, color:"black", fontFamily: 'Playfair Display, serif' }}>
            <Button color="inherit" sx={{fontFamily: 'Playfair Display, serif'}}>Home</Button>
            <Button color="inherit" sx={{fontFamily: 'Playfair Display, serif'}}>Shop</Button>
            <Button color="inherit" sx={{fontFamily: 'Playfair Display, serif'}}>Categories</Button>
            <Button color="inherit" sx={{fontFamily: 'Playfair Display, serif'}}>Contact</Button>
          </Box>
          <Button 
            variant="outlined" 
            onClick={()=>navigate("/login")}
            sx={{ 
              borderRadius: 3,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              px: 3,
              py: 1,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
              fontFamily: 'Playfair Display, serif'
            }}
          >
            LOGIN/SIGN IN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
