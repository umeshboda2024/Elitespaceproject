import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";
import Elitespacelogo from "../Assets/images/Elitespacelogo-removebg-preview.png";
import { useAuth } from "../Context/Authcontex";

/* ================= MENU DATA ================= */

const pages = ["Home", "Buy", "Rent", "Sell", "Agent", "About", "Contact"];

const routeMap = {
  Home: "/",
  Buy: "/buyproperty",
  Rent: "/Rentproperty",
  Sell: "/sale",
  Agent: "/Agent",
  Contact: "/Contact",
  About: "/about",
};

const megaMenuData = {
  Buy: ["Apartments", "Villas", "Plots", "Commercial"],
  Rent: ["Apartments", "Villas", "PG", "Offices"],
};

/* ================= COMPONENT ================= */

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [activeMenu, setActiveMenu] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  /* ================= THEME ================= */

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ================= APP BAR ================= */}
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* LOGO */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <img src={Elitespacelogo} alt="logo" height={45} />
              <Typography variant="h6" fontWeight="bold">
                Elite Space
              </Typography>
            </Box>

            {/* ================= DESKTOP MENU ================= */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {pages.map((menu) => (
                <Box
                  key={menu}
                  sx={{ position: "relative" }}
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu("")}
                >
                  <Button
                    sx={{ color: "#fff", textTransform: "none" }}
                    onClick={() => navigate(routeMap[menu])}
                  >
                    {menu}
                  </Button>

                  {/* ===== MEGA MENU ===== */}
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
                        minWidth: 200,
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
                            color: "text.primary",
                          }}
                          onClick={() =>
                            navigate(
                              `/${menu.toLowerCase()}/${item.toLowerCase()}`
                            )
                          }
                        >
                          {item}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* ================= RIGHT SIDE ================= */}
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
{user ? (
  <>
    {user.role === "admin" && (
      <Button
        sx={{ color: "#fff", textTransform: "none" }}
        onClick={() => navigate("/admin")}
      >
        Admin
      </Button>
    )}

    <Button
      variant="contained"
      color="secondary"
      sx={{ borderRadius: "20px", textTransform: "none" }}
      onClick={() => {
        logout();
        navigate("/");
      }}
    >
      Logout
    </Button>
  </>
) : (
  <Button
    variant="contained"
    color="secondary"
    sx={{ borderRadius: "20px", textTransform: "none" }}
    onClick={() => navigate("/login")}
  >
    Login
  </Button>
)}

            </Box>

            {/* ================= MOBILE ICON ================= */}
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

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: 260 } }}
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
                  navigate(routeMap[text]);
                  handleDrawerToggle();
                }}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem>
           {user ? (
  <Button
    fullWidth
    variant="contained"
    color="secondary"
    onClick={() => {
      logout();
      navigate("/login");
      handleDrawerToggle();
    }}
  >
    Logout
  </Button>
) : (
  <Button
    fullWidth
    variant="contained"
    color="secondary"
    onClick={() => {
      navigate("/login");
      handleDrawerToggle();
    }}
  >
    Login
  </Button>
)}

          </ListItem>

          <ListItem>
            <IconButton onClick={toggleTheme}>
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography sx={{ ml: 1 }}>Toggle Theme</Typography>
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
