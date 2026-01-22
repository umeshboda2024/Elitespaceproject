import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const token = "XI9aLT2keHbs64RP";

  const initialValues = {
    fullname: "",
    emailid: "",
    mobilenumber: "",
    password: "",
    confirompassword: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // 🔥 API ONLY expects these keys
    const payload = {
      fullname: values.fullname,
      emailid: values.emailid,
      mobilenumber: Number(values.mobilenumber), // important
      password: values.password,
      confirompassword: values.confirompassword,
    };
    users.push(payload);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Saved Users:", users);
    axios
      .post("https://generateapi.techsnack.online/api/signup", payload, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        navigate("/login");
        alert("Signup successful!");
      })
      .catch((err) => {
        console.log("Signup Error", err);
        alert("Signup failed (check console)");
      });

    resetForm();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) errors.fullname = "Full name is required";
    if (!values.emailid) errors.emailid = "Email is required";
    if (!values.mobilenumber) errors.mobilenumber = "Mobile number is required";
    if (!values.password) errors.password = "Password is required";
    if (!values.confirompassword)
      errors.confirompassword = "Confirm password is required";
    if (
      values.password &&
      values.confirompassword &&
      values.password !== values.confirompassword
    ) {
      errors.confirompassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a7cff, #8f5bff)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={10} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" align="center" fontWeight="bold">
            Create Account
          </Typography>

          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, touched, errors }) => (
              <Form>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  error={touched.fullname && Boolean(errors.fullname)}
                  helperText={touched.fullname && errors.fullname}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="emailid"
                  value={values.emailid}
                  onChange={handleChange}
                  error={touched.emailid && Boolean(errors.emailid)}
                  helperText={touched.emailid && errors.emailid}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Mobile Number"
                  type="number"
                  name="mobilenumber"
                  value={values.mobilenumber}
                  onChange={handleChange}
                  error={touched.mobilenumber && Boolean(errors.mobilenumber)}
                  helperText={touched.mobilenumber && errors.mobilenumber}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="confirompassword"
                  value={values.confirompassword}
                  onChange={handleChange}
                  error={
                    touched.confirompassword && Boolean(errors.confirompassword)
                  }
                  helperText={
                    touched.confirompassword && errors.confirompassword
                  }
                  margin="normal"
                />

                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    mt: 3,
                    py: 1.2,
                    borderRadius: 2,
                    background: "linear-gradient(to right, #6a7cff, #8f5bff)",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
