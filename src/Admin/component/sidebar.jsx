import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

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

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "linear-gradient(180deg,#0b5c6b,#063e48)",
          color: "#fff",
        },
      }}
    >
      {/* LOGO */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          Elite Space
        </Typography>
        <Typography variant="caption">Admin Panel</Typography>
      </Box>

      <List>
        {menuItem("Dashboard", <DashboardIcon />)}
        {menuItem("Properties", <HomeWorkIcon />)}
        {menuItem("Agents", <PersonIcon />)}
        {menuItem("Users", <PeopleIcon />)}
        {menuItem("Inquiries", <MailIcon />)}
        {menuItem("Reviews", <StarIcon />)}
        {menuItem("Cities", <LocationCityIcon />)}
        {menuItem("Settings", <SettingsIcon />)}
        {menuItem("Logout", <LogoutIcon />)}
      </List>
    </Drawer>
  );
}

function menuItem(text, icon) {
  return (
    <ListItemButton
      sx={{
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.1)",
        },
      }}
    >
      <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}
