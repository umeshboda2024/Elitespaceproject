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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Elitespacelogo from "../Assets/images/Elitespacelogo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Buy", "Rent", "Sell", "Agent", "Blog", "About"];

const megaMenuData = {
  Buy: ["Apartments", "Villas", "Plots", "Commercial"],
  Rent: ["Apartments", "Villas", "PG/Hostels", "Offices"],
};

export default function Navbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = React.useState("");
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
          primary: { main: mode === "dark" ? "#121212" : "#0F4C5C" },
          secondary: { main: "#FFB703" },
        },
      }),
    [mode]
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={Elitespacelogo} alt="logo" height={50} />
              <Typography variant="h6" fontWeight="bold">
                Elite Space
              </Typography>
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
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

            {/* RIGHT SIDE */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: "20px", textTransform: "none" }}
                onClick={() => navigate("/loginpage")}
              >
                Login
              </Button>
            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: 250 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleDrawerToggle();
                  if (text === "Login") setOpenLogin(true);
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <Button
              onClick={() => navigate("/loginpage")}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Login
            </Button>
          </ListItem>
          <ListItem>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography sx={{ ml: 1 }}>Toggle Theme</Typography>
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
