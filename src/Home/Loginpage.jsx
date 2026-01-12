import React from "react";
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

  const initialValues = {
    emailid: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // 🔹 Safely get old users
    let storedUsers = localStorage.getItem("Username");
    storedUsers = storedUsers ? JSON.parse(storedUsers) : [];

    if (!Array.isArray(storedUsers)) {
      storedUsers = [];
    }

    // 🔹 Match user
    const matchedUser = storedUsers.find(
      (user) =>
        user.emailid === values.emailid &&
        user.password === values.password
    );

    if (matchedUser) {
      // Optional: store logged-in user
      localStorage.setItem("loggedUser", JSON.stringify(matchedUser));

      navigate("/admin");
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

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  as={TextField}
                  name="emailid"
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
                  onClick={() => navigate("/signup")}
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
