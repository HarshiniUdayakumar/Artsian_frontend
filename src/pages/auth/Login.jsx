import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import basketImg from "../../assets/images/basket.png";
import "./Login.css";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  return (
    <Box className="login-root">
      
      {/* Left – Login Card */}
      <Paper className="login-card" elevation={0}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "Playfair Display, serif" }}
        >
          Welcome Back
        </Typography>

        <Typography className="login-subtitle">
          Login to continue exploring artisan creations
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />
        <TextField
  select
  fullWidth
  label="Select Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  margin="normal"
  SelectProps={{
    displayEmpty: true,
  }}
>
  <MenuItem value="" disabled>
    Select Role
  </MenuItem>
  <MenuItem value="BUYER">Buyer</MenuItem>
  <MenuItem value="SELLER">Seller</MenuItem>
  <MenuItem value="ADMIN">Admin</MenuItem>
</TextField>

        <Button
          fullWidth
          className="login-btn"
        >
          Login
        </Button>

        <Typography className="signup-text">
          New here?{""} <span onClick={() => navigate("/Signup")}>Create an account</span>
        </Typography>
      </Paper>

      {/* Right – Basket Image */}
      <Box className="basket-container">
        <img src={basketImg} alt="Basket" />
      </Box>

    </Box>
  );
};

export default Login;
