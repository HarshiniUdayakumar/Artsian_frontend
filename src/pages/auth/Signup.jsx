import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useState } from "react";
import "./login.css";
import basketImg from "../../assets/images/basket.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = () => {
    const payload = {
      email,
      password,
      role,
    };

    console.log("REGISTER PAYLOAD:", payload);
    // TODO: connect backend API here
  };

  return (
    <Box className="login-root">
      <Paper className="login-card" elevation={0}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontFamily: "Playfair Display, serif" }}
        >
          Create Account
        </Typography>

        <Typography className="login-subtitle">
          Join Artisan Alley as a Buyer, Seller or Admin
        </Typography>

        {/* Email */}
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Role Selection */}
        <TextField
          select
          fullWidth
          label="Select Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          margin="normal"
          SelectProps={{ displayEmpty: true }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        >
          <MenuItem value="" disabled>
            Select Role
          </MenuItem>
          <MenuItem value="BUYER">Buyer</MenuItem>
          <MenuItem value="SELLER">Seller</MenuItem>
          <MenuItem value="ADMIN">Admin</MenuItem>
        </TextField>

        {/* Sign Up Button */}
        <Button
          fullWidth
          className="login-btn"
          onClick={handleRegister}
          disabled={!email || !password || !role}
        >
          Sign Up
        </Button>

        <Typography className="signup-text">
          Already have an account? <span>Login</span>
        </Typography>
      </Paper>

      <Box className="basket-container">
              <img src={basketImg} alt="Basket" />
            </Box>
            
    </Box>
  );
};

export default Register;
