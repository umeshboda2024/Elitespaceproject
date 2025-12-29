import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Elitespacelogo from "../Assets/images/Elitespacelogo-removebg-preview.png";

const pages = ["Home", "Buy", "Rent", "Sell", "Agent", "Blog", "About"];

const megaMenuData = {
  Buy: ["Apartments", "Villas", "Plots", "Commercial"],
  Rent: ["Apartments", "Villas", "PG/Hostels", "Offices"],
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = React.useState("");
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#121212" : "#0F4C5C",
          },
          secondary: {
            main: "#FFB703",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Elitespacelogo} alt="logo" height={70} />
              <Typography variant="h6" fontWeight="bold">
                Elite Space
              </Typography>
            </Box>

            {/* MENU */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {pages.map((menu) => (
                <Box
                  key={menu}
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu("")}
                  sx={{ position: "relative" }}
                >
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    {menu}
                  </Button>

                  {activeMenu === menu && megaMenuData[menu] && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        bgcolor: "background.paper",
                        boxShadow: 4,
                        borderRadius: 2,
                        p: 1,
                        minWidth: 180,
                        zIndex: 10,
                      }}
                    >
                      {megaMenuData[menu].map((item) => (
                        <Button
                          key={item}
                          fullWidth
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                          }}
                        >
                          {item}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* RIGHT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: "20px", textTransform: "none" }}
                onClick={() => setOpenLogin(true)}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* LOGIN DIALOG */}
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLogin(false)}>Cancel</Button>
          <Button variant="contained">Login</Button>
        </DialogActions>
        <Button
          onClick={() => {
            setOpenLogin(false);
            setOpenSignup(true);
          }}
        >
          Don’t have an account? Sign Up
        </Button>
      </Dialog>

      {/* SIGNUP DIALOG */}
      <Dialog open={openSignup} onClose={() => setOpenSignup(false)}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Name" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSignup(false)}>Cancel</Button>
          <Button variant="contained">Create Account</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
