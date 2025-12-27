import React from "react";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Autocomplete,
} from "@mui/material";

import Luxury from "../Assets/images/Luxury Appartment.jpg";
import Rowhouse from "../Assets/images/House.jpg";
import House from "../Assets/images/House-Desktop.jpg";

/* Search Options */
const Buy =["Buy","Rent"]
const locations = ["Surat", "Ahmedabad", "Mumbai", "Delhi"];
const propertyTypes = ["Apartment", "Rowhouse", "Villa"];
const budgets = ["Below 50 Lakh", "Below 1 Crore", "Above 1 Crore"];

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const images = [Luxury, Rowhouse, House];

  return (
    <>
    <Box className="hero-container">
      {/* SLIDER */}
      <Slider {...settings}>
        {images.map((img, i) => (
          <Box key={i} className="slide">
            <img src={img} alt="property" className="slide-img"
            key={img+1}
            />
          </Box>
        ))}
      </Slider>

      {/* HERO OVERLAY */}
      <Box className="hero-overlay">
        <Box className="hero-text">
          <Typography variant="h3" fontWeight="bold">
            Find Your 
          </Typography>
            <Typography variant="h2" fontWeight="bold">
             Dream Home 
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Browse premium properties for buy & rent across india
          </Typography>
        </Box>
      </Box>


    </Box>
          {/* SEARCH BAR */}
      <Paper className="search-bar" elevation={6}>
         <Autocomplete 
         className="Searchform"
          options={Buy}
          renderInput={(params) => (
            <TextField {...params} label="Buy" />
          )}
        />
        <Autocomplete
        className="Searchform"
          options={locations}
          renderInput={(params) => (
            <TextField {...params} label="Location" />
          )}
        />

        <Autocomplete
        className="Searchform"
          options={propertyTypes}
          renderInput={(params) => (
            <TextField {...params} label="Property Type" />
          )}
        />

        <Autocomplete
        className="Searchform"
          options={budgets}
          renderInput={(params) => (
            <TextField {...params} label="Budget" />
          )}
        />

        <Button variant="contained" className="search-btn">
          SEARCH
        </Button>
      </Paper>
   
   </>
  );
};

export default Hero;
