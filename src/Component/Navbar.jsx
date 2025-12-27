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
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import InputBase from "@mui/material/InputBase";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Elitespacelogo from "../Assets/images/Elitespacelogo-removebg-preview.png";
import "./Navbar.css";

const pages = ["Home", "Buy", "Rent", "Sell","Agent","Blog","About"];
const megaMenuData = {
  Buy: ["Apartments", "Villas", "Plots", "Commercial"],
  Rent: ["Apartments", "Villas", "PG/Hostels", "Offices"],
  More: ["Sell Property", "Services", "Agents", "Blog"],
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
          primary: { main: "#0F4C5C" },
        },
      }),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>

      <AppBar className={`navbar ${mode}`}>
        <Container maxWidth="xl">
          <Toolbar className="navbar-toolbar">
            {/* Logo */}
            <Box className="navbar-logo-box">
              <img src={Elitespacelogo} alt="logo" className="navbar-logo" />
              <Typography className="navbar-title">Elite Space</Typography>
            </Box>

            {/* Menu */}
            <Box className="navbar-menu">
              {pages.map((menu) => (
                <Box
                  key={menu}
                  className="menu-item"
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu("")}
                >
                  <Button className="menu-btn">{menu}</Button>

                  {activeMenu === menu && megaMenuData[menu] && (
                    <Box className="mega-menu">
                      {megaMenuData[menu].map((item) => (
                        <Button key={item} className="mega-menu-btn">
                          {item}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* Right */}
            <Box className="navbar-right">
              <Button className="login-btn" onClick={() => setOpenLogin(true)}>
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent className="dialog-content">
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button onClick={() => { setOpenLogin(false); setOpenSignup(true); }}>
            Don't have an account? Sign Up
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLogin(false)}>Cancel</Button>
          <Button variant="contained">Login</Button>
        </DialogActions>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={openSignup} onClose={() => setOpenSignup(false)}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent className="dialog-content">
          <TextField label="Full Name" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <TextField label="Confirm Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenSignup(false)}>Cancel</Button>
          <Button variant="contained">Sign Up</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
