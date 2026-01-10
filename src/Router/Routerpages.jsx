// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import BuyProperties from "../Home/Buyproperties";
import Propertycard from "../Component/Propertycard";
import PropertyDetails from "../Home/BuyViewdetail";
import LoginPage from "../Home/Loginpage";
import Signup from "../Home/Signuppage";

// Admin Pages
import AdminHome from "../Admin/component/Home/Adminhome";
import Properties from "../Admin/component/pages/Properties";
import AddProperty from "../Admin/component/pages/Addproperty";
import Agents from "../Admin/component/pages/Agent";
import AddAgent from "../Admin/component/pages/Addagent";
import Users from "../Admin/component/pages/User";
import Inquiries from "../Admin/component/pages/Inquiries";
import Reviews from "../Admin/component/pages/Reviews";
import Locations from "../Admin/component/pages/Location";
import Content from "../Admin/component/pages/Content";

// Layouts
import AdminLayout from "../Layout/Adminlayout";
import PublicLayout from "../Layout/Publiclayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<BuyProperties />} />
      <Route path="/buyview" element={<PropertyDetails />} />
      <Route path="/property" element={<Propertycard />} />

      {/* 🔓 Auth Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* 🔐 Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="/admin/properties" element={<Properties />} />
        <Route path="/admin/add-property" element={<AddProperty />} />
        <Route path="agents" element={<Agents />} />
        <Route path="add-agent" element={<AddAgent />} />
        <Route path="users" element={<Users />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="locations" element={<Locations />} />
        <Route path="content" element={<Content />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
