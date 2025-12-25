import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Elitespacelogo from "../images/Elitespacelogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const pages = ["Buy", "Rent", "Sell Property", "More"];
const megaMenuData = {
  Buy: ["Apartments", "Villas", "Plots", "Commercial"],
  Rent: ["Apartments", "Villas", "PG/Hostels", "Offices"],
  More: ["Sell Property", "Services", "Agents", "Blog"],
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: { width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": { width: "30ch" },
    },
  },
}));

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState("");

  const handleOpenMenu = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenu("");
  };

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenSignup = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };
  const handleCloseSignup = () => setOpenSignup(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{ background: "linear-gradient(90deg, #0F4C5C, #0d9ac5ff)" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={Elitespacelogo}
                alt="Elitespace Logo"
                sx={{ height: 40, width: "auto" }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Elite Space
            </Typography>

            {/* Centered Pages */}
            {/* Centered Pages with Mega Menu */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {pages.map((menu) => (
                <Box
                  key={menu}
                  sx={{ position: "relative" }}
                  onMouseEnter={() => setActiveMenu(menu)}
                  onMouseLeave={() => setActiveMenu("")}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: "17px",
                      textTransform: "none",
                    }}
                  >
                    {menu}
                  </Button>

                  {/* Mega Menu Dropdown */}
                  {activeMenu === menu && megaMenuData[menu] && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: 150,
                        bgcolor: "white",
                        boxShadow: 3,
                        p: 2,
                        display: "grid",
                        // gridTemplateColumns: "1fr 1fr",
                        gap: 1,
                        zIndex: 10,
                      }}
                    >
                      {megaMenuData[menu].map((item) => (
                        <Button
                          key={item}
                          sx={{
                            justifyContent: "flex-start",
                            color: "black",
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

            {/* Search and Login */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ borderColor: "white", color: "white" }}
                onClick={handleOpenLogin}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button onClick={handleOpenSignup} sx={{ mt: 1 }}>
            Don't have an account? Sign Up
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Cancel</Button>
          <Button variant="contained">Login</Button>
        </DialogActions>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={openSignup} onClose={handleCloseSignup}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Full Name" fullWidth />
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <TextField label="Confirm Password" type="password" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignup}>Cancel</Button>
          <Button variant="contained">Sign Up</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
