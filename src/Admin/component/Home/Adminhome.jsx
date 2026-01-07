import React from "react";
import Sidebar from "../sidebar";
import Topbar from "../Topbar";
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
