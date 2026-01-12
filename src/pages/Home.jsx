import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Home/Hero";
import StateProperties from "../Home/StateProperties";
import Buyproperties from "../Home/Buyproperties";
import Propertycard from "../Component/Propertycard";
import Stateporpertycard from "../Component/Stateporpertycard";
import Propertytypes from "../Component/Propertytypes";
import StatusSection from "../Home/StatusSection";
import Saleproperty from "../Home/Saleproperties";
import { Agentcard } from "../Component/Agentcard";
import WhyChooseUs from "../Component/Whychoose";
import ReviewSection from "../Component/Reviewsection";
import Footer from "../Component/Footer";
import GetInTouchSection from "../Component/Getintouch";
import BuyProperties from "../Home/Buyproperties";
import LoginPage from "../Home/Loginpage";
import Sidebar from "../Admin/component/Componets/sidebar";
import Topbar from "../Admin/component/Componets/Topbar";
import Dashboard from "../Admin/component/pages/Dashboard";
import Signup from "../Home/Signuppage";
import AddProperty from "../Admin/component/pages/Addproperty";
import AddAgent from "../Admin/component/pages/Addagent";
import RentPropertycard from "../Component/Rentpropertycard";
const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <Stateporpertycard />
      <Propertycard />
      <RentPropertycard />
      <Propertytypes />
      <StatusSection />
      <Saleproperty />
      <Agentcard />
      <WhyChooseUs />
      <ReviewSection />
      <GetInTouchSection />
      {/* <Footer /> */}
      {/* <LoginPage /> */}
      {/* <BuyProperties /> */}
      {/* <Sidebar />
      <Topbar />
      <Dashboard /> */}
      {/* <Properties /> */}
      {/* <AddProperty /> */}
      {/* <AddAgent /> */}
      {/* <Signup /> */}
    </div>
  );
};

export default Home;
