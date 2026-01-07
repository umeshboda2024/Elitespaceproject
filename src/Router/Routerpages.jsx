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
    </Routes>
  );
};

export default AppRoutes;
