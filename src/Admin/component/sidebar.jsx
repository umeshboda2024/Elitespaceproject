import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;
const collapsedWidth = 70;

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
          background: "linear-gradient(180deg,#0b5c6b,#063e48)",
          color: "#fff",
        },
      }}
    >
      {/* 🔹 HEADER */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          p: 2,
        }}
      >
        {open && (
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Elite Space
            </Typography>
            <Typography variant="caption">Admin Panel</Typography>
          </Box>
        )}

        <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* 🔹 MENU */}
      <List>
        {menuItem("Dashboard", <DashboardIcon />, open)}
        {menuItem("Properties", <HomeWorkIcon />, open)}
        {menuItem("Agents", <PersonIcon />, open)}
        {menuItem("Users", <PeopleIcon />, open)}
        {menuItem("Inquiries", <MailIcon />, open)}
        {menuItem("Reviews", <StarIcon />, open)}
        {menuItem("Cities", <LocationCityIcon />, open)}
        {menuItem("Settings", <SettingsIcon />, open)}
        {menuItem("Logout", <LogoutIcon />, open)}
      </List>
    </Drawer>
  );
}

function menuItem(text, icon, open) {
  return (
    <ListItemButton
      sx={{
        justifyContent: open ? "initial" : "center",
        px: 2.5,
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.1)",
        },
      }}
    >
      <ListItemIcon
        sx={{
          color: "#fff",
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>

      {open && <ListItemText primary={text} />}
    </ListItemButton>
  );
}
