// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
// import StateProperties from "../pages/StateProperties";
// import PropertyDetails from "../pages/PropertyDetails";

import BuyProperties from "../Home/Buyproperties";
import Propertycard from "../Component/Propertycard";
import PropertyDetails from "../Home/BuyViewdetail";
import LoginPage from "../Home/Loginpage";
import Signup from "../Home/Signuppage";
import Adminhome from "../Admin/component/Home/Adminhome";
import Properties from "../Admin/component/pages/Properties";
import AddProperty from "../Admin/component/pages/Addproperty";
import Agents from "../Admin/component/pages/Agent";
import AddAgent from "../Admin/component/pages/Addagent";
import Users from "../Admin/component/pages/User";
import Inquiries from "../Admin/component/pages/Inquiries";
import Reviews from "../Admin/component/pages/Reviews";
import Locations from "../Admin/component/pages/Location";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<BuyProperties />} />
      <Route path="/buyview" element={<PropertyDetails />} />

      <Route path="/Property" element={<Propertycard />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/Signpage" element={<Signup />} />
      <Route path="/Adminhome" element={<Adminhome />} />
      <Route path="/admin/properties" element={<Properties />} />
      <Route path="/admin/add-property" element={<AddProperty />} />
      <Route path="/admin/agents" element={<Agents />} />
      <Route path="/admin/add-agent" element={<AddAgent />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/inquiries" element={<Inquiries />} />
      <Route path="/admin/reviews" element={<Reviews />} />
      <Route path="/admin/locations" element={<Locations />} />
    </Routes>
  );
};

export default AppRoutes;
