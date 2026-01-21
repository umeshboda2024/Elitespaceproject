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
import axios from "axios";

const Loginpage = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(
        "https://generateapi.techsnack.online/auth/login",
        values
      );

      // save token / user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/admin");
    } catch (err) {
      alert("Invalid email or password");
      console.log(err);
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
      <Paper elevation={10} sx={{ width: 380, p: 4, borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Welcome Back 👋
        </Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
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
                  sx={{ py: 1.2 }}
                >
                  Login
                </Button>

                <Divider>OR</Divider>

                <Button onClick={() => navigate("/signup")}>
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
