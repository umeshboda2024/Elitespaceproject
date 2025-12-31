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
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stateporpertycard />
      <Propertycard />
      <Propertytypes />
      <StatusSection />
      <Saleproperty />
      <Agentcard />
      {/* <Buyproperties></Buyproperties>  */}
    </div>
  );
};

export default Home;
