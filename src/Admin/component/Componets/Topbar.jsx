import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  TextField,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: "250px",
        width: "calc(100% - 60px)",
        bgcolor: "#fff",
        color: "#000",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Dashboard</Typography>

        <Box display="flex" gap={2} alignItems="center">
          <TextField size="small" placeholder="Search" />
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar src="https://i.pravatar.cc/150" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
