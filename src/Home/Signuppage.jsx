import React, { useState } from "react";
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
import { useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [list, setlist] = useState([]);

  const ini = {
    fullname: "",
    emailid: "",
    mobilenumber: "",
    password: "",
    confirmpassword: "",
  };
  const token = "XI9aLT2keHbs64RP";
  useEffect(() => {
    Mydata();
  }, []);
  function Mydata() {
    axios
      .get("https://generateapi.techsnack.online/api/signup", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.Data);
        setlist(res.data.Data);
      })
      .catch((err) => {
        console.log("Error loading", err);
      });
  }

  const handleSubmit = (values, { resetForm }) => {
    console.log(token);

    const oldAccounts = JSON.parse(localStorage.getItem("Username") || "[]");
    const accountsArray = Array.isArray(oldAccounts) ? oldAccounts : [];
    const updatedAccounts = [...accountsArray, values];
    localStorage.setItem("Username", JSON.stringify(updatedAccounts));

    axios
      .post("https://generateapi.techsnack.online/api/signup", values, {
        headers: { Authorization: token },
      })
      .then(() => navigate("/loginpage"))
      .catch((err) => console.log("Signup Error", err));

    resetForm();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.fullname) errors.fullname = "Full name is required";
    if (!values.emailid) errors.emailid = "Email is required";
    if (!values.mobilenumber) errors.mobilenumber = "Mobile number is required";
    if (!values.password) errors.password = "Password is required";
    if (!values.confirmpassword)
      errors.confirmpassword = "Confirm password is required";
    if (
      values.password &&
      values.confirmpassword &&
      values.password !== values.confirmpassword
    ) {
      errors.confirmpassword = "Passwords do not match";
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
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            mb={3}
          >
            Sign up to get started
          </Typography>

          <Formik
            initialValues={ini}
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
                  // type={showPassword ? "text" : "password"}
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
                  // type="password"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  error={
                    touched.confirmpassword && Boolean(errors.confirmpassword)
                  }
                  helperText={touched.confirmpassword && errors.confirmpassword}
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
                    "&:hover": {
                      opacity: 0.9,
                    },
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
