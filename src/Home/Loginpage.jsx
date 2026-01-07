// src/components/LoginPage.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Correct credentials (temporary)
  const correctEmail = "admin@gmail.com";
  const correctPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      setError("");
      navigate("//Adminhome"); // ✅ Open Home Page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <HomeIcon sx={{ fontSize: 60, color: "primary.main", mb: 1 }} />

        <Typography variant="h4" gutterBottom>
          Elite Space Login
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Enter your details to access your account
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>

          <Typography variant="body2" color="text.secondary">
            Don’t have an account?{" "}
            <span
              style={{ color: "#1976d2", cursor: "pointer" }}
              onClick={() => navigate("/Signpage")}
            >
              Sign Up
            </span>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
