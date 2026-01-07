import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  IconButton,
  InputAdornment,
  Divider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0b5c6b,#063e48)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
          }}
        >
          {/* HEADER */}
          <Box textAlign="center" mb={3}>
            <PersonAddAltIcon sx={{ fontSize: 45, color: "#0b5c6b" }} />
            <Typography variant="h5" fontWeight="bold" mt={1}>
              Create Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join Elite Space Admin Panel
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* FORM */}
          <Box component="form">
            <TextField fullWidth label="Full Name" margin="normal" required />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Mobile Number"
              type="tel"
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              required
            />

            <Button
              onClick={() => navigate("/loginpage")}
              fullWidth
              size="large"
              variant="contained"
              sx={{
                mt: 3,
                py: 1.2,
                backgroundColor: "#0b5c6b",
                "&:hover": {
                  backgroundColor: "#084b57",
                },
              }}
            >
              Submit
            </Button>

            {/* LOGIN LINK */}
            <Typography
              textAlign="center"
              mt={2}
              variant="body2"
              color="text.secondary"
            >
              Already have an account?{" "}
              <Typography
                onClick={() => navigate("/loginpage")}
                component="span"
                sx={{ color: "#0b5c6b", fontWeight: 600, cursor: "pointer" }}
              >
                Login
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
