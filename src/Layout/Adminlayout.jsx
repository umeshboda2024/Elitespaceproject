import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../Admin/component/Componets/sidebar";

import Topbar from "../Admin/component/Componets/Topbar";
import Adminhome from "../Admin/component/Home/Adminhome";

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
