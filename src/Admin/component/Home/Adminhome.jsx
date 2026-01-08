import React from "react";
import Sidebar from "../Componets/sidebar";
import Topbar from "../Componets/Topbar";
import Dashboard from "../pages/Dashboard";

const Adminhome = () => {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <Dashboard />
    </div>
  );
};

export default Adminhome;
