import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  InputAdornment,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, #0b5c6b 0%, #0e7688 40%, #f5f7f8 100%)",
      }}
    >
      <Container>
        {/* Header */}
        <Box mb={6}>
          <Typography variant="h3" fontWeight="bold" color="#fff" mb={2}>
            Let’s Talk
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Have a project in mind or looking for premium real estate solutions?
            Reach out and our team will respond shortly.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left Info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon sx={{ color: "#00e5ff" }} />
                <Typography color="#fff">EliteSpace, Mumbai, India</Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon sx={{ color: "#00e5ff" }} />
                <Typography color="#fff">+91 98765 43210</Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon sx={{ color: "#00e5ff" }} />
                <Typography color="#fff">contact@elitespace.com</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Form */}
          <Grid item size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "16px",
              }}
            >
              <Typography variant="h5" fontWeight="bold" mb={3}>
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MessageIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    size="large"
                    sx={{
                      py: 1.4,
                      fontWeight: "bold",
                      borderRadius: "10px",
                      background: "linear-gradient(90deg, #00e5ff, #1de9b6)",
                      color: "#000",
                      "&:hover": {
                        background: "linear-gradient(90deg, #1de9b6, #00e5ff)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
