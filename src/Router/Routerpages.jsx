// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import BuyProperties from "../Home/Buyproperties";
import Propertycard from "../Component/Propertycard";
import PropertyDetails from "../Home/Buypropertydata";
import LoginPage from "../Home/Loginpage";
import Signup from "../Home/Signuppage";

// Admin Pages

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
import RentProperties from "../Home/Rentproperties";
import RentPropertycard from "../Component/Rentpropertycard";
import { Agentcard } from "../Component/Agentcard";
import AddEditProperty from "../Admin/component/pages/Addproperty";
import BuyView from "../Home/Buyviewdetails";
import Contact from "../Home/Contact";
import RentView from "../Home/Rentviewdetails";
import AddReviewDialog from "../Home/Addreviewsection";
import Saleproperty from "../Home/Saleproperties";
import AddEditStateProperty from "../Admin/component/pages/StateCard";
import StateProperties from "../Admin/component/pages/Statepropeties";
import Propertytypes from "../Component/Propertytypes";
import AddEditPropertyType from "../Admin/component/pages/StateCard";
import PropertyTypescard from "../Admin/component/pages/Propertytypecard";
import AllProperties from "../Layout/Allproperty";
import ReviewCards from "../Admin/component/pages/ReviewCard";
import Dashboard from "../Admin/component/pages/Dashboard";
import AdminRoute from "./Adminroute";
import ProtectedRoute from "./Adminroute";
import Checkout from "../Home/Checkout";
import WhyChooseUs from "../Component/Whychoose";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<BuyProperties />} />
      <Route path="/buy/:city" element={<BuyProperties />} />
      <Route path="/buy/:city/:propertyType" element={<BuyProperties />} />
      <Route path="/buy/:propertyType" element={<BuyProperties />} />
      <Route path="/buyproperty/" element={<Propertycard />} />
      <Route path="/Rentproperty" element={<RentPropertycard />} />
      <Route path="/buyview/:id" element={<BuyView />} />
      <Route path="/rentview/:id" element={<RentView />} />
      <Route path="/checkout/:id" element={<Checkout />} />

      <Route path="/sale" element={<Saleproperty />} />
      <Route path="/rent" element={<RentProperties />} />
      <Route path="/rent/:city?" element={<RentProperties />} />
      <Route path="/Rent/type/:propertyType" element={<RentProperties />} />
      <Route path="/Agent" element={<Agentcard />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Review" element={<AddReviewDialog />} />
       <Route path="/about" element={< WhyChooseUs/>}/>

      {/* <Route path="/property" element={<Propertycard />} /> */}
      <Route path="/properties" element={<AllProperties />} />
      <Route path="/properties/:propertyType" element={<AllProperties />} />


      {/* 🔓 Auth Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* 🔐 Admin Routes */}
  
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>

        <Route index element={<Dashboard />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="/admin/properties" element={<Properties />} />
        <Route path="/admin/add-property" element={<AddEditProperty />} />
        <Route path="/admin/edit-property/:id" element={<AddEditProperty />} />
        <Route path="/admin/add-state" element={<AddEditStateProperty />} />
        <Route
          path="/admin/edit-state/:id"
          element={<AddEditStateProperty />}
        />
        <Route path="/admin/property-types" element={<AddEditPropertyType />} />
        <Route
          path="/admin/edit-property-types"
          element={<AddEditPropertyType />}
        />
        <Route path="/admin/Propertytype" element={<PropertyTypescard />} />
        <Route path="/admin/addstate-property" element={<StateProperties />} />
        <Route path="agents" element={<Agents />} />
        <Route path="add-agent" element={<AddAgent />} />
        <Route path="users" element={<Users />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="reviewpage" element={<ReviewCards />} />
        <Route path="locations" element={<Locations />} />
        <Route path="content" element={<Content />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
