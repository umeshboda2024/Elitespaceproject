import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Stack,
  Divider,
} from "@mui/material";

const Loginpage = () => {
  const navigate = useNavigate();
  const [ini, setini] = useState({
    email: "",
    password: "",
  });

  const Handelsumbit = (values) => {
    const storedUser = JSON.parse(localStorage.getItem("/Username"));

<<<<<<< HEAD
    if (
      storedUser &&
      values.email === storedUser.email &&
      values.password === storedUser.password
    ) {
      navigate("/Adminhome");
=======
  // ✅ Correct credentials (temporary)
  const correctEmail = "admin@gmail.com";
  const correctPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      setError("");
      navigate("/Adminhome"); // ✅ Open Home Page
>>>>>>> 092c1463dd4cb30d59ec4f3a77a1f4db59b25aca
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0E4B5A, #146C7C)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Welcome Back 👋
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Login to continue
        </Typography>

        <Formik enableReinitialize initialValues={ini} onSubmit={Handelsumbit}>
          {({ handleChange }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  onChange={handleChange}
                />

                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Button>

                <Divider>OR</Divider>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigate("/Signpage")}
                >
                  Create Account
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Loginpage;
