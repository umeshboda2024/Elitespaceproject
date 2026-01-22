import React from "react";
import { useParams } from "react-router-dom";
import BuyProperties from "../Home/Buyproperties";
import RentProperties from "../Home/Rentproperties";

const AllProperties = () => {
  const { propertyType } = useParams(); // 👈 YE ADD KARNA HAI

  return (
    <>
      <BuyProperties propertyType={propertyType} /> {/* 👈 pass karo */}
      <RentProperties propertyType={propertyType} /> {/* 👈 pass karo */}
    </>
  );
};

export default AllProperties;
