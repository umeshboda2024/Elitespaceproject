import React from "react";
import "./Home.css";
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

import Luxury from "../images/Luxury Appartment.jpg";
import Rowhouse from "../images/House.jpg";
import House from "../images/House-Desktop.jpg";

/* Search Options */
const Buy =["Buy","Rent"]
const locations = ["Surat", "Ahmedabad", "Mumbai", "Delhi"];
const propertyTypes = ["Apartment", "Rowhouse", "Villa"];
const budgets = ["Below 50 Lakh", "Below 1 Crore", "Above 1 Crore"];

const Home = () => {
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
            <img src={img} alt="property" className="slide-img" />
          </Box>
        ))}
      </Slider>

      {/* HERO OVERLAY */}
      <Box className="hero-overlay">
        {/* LEFT CONTENT */}
        <Box className="hero-text">
          <Typography variant="h3" fontWeight="bold">
            DISCOVER THE BEST <br /> PROPERTIES
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Browse premium Apartments, Rowhouse & Rents
          </Typography>
          <Button variant="contained" className="hero-btn">
            CONTACT US TODAY
          </Button>
        </Box>

        {/* RIGHT FORM */}
        <Paper elevation={10} className="hero-form">
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Looking to Buy Property?
          </Typography>

          <TextField label="Name" fullWidth size="small" sx={{ mb: 2 }} />
          <TextField label="Phone" fullWidth size="small" sx={{ mb: 2 }} />
          <TextField label="Email" fullWidth size="small" sx={{ mb: 2 }} />
          <TextField
            label="Message"
            multiline
            rows={3}
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />

          <Button fullWidth variant="contained" className="form-btn">
            REQUEST FREE CONSULTATION
          </Button>
        </Paper>
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
    </Box>
      {/* Stats Section */}
       <Box className="Stats-Section">
        <Box>
          <Typography variant="h3" fontWeight="bold" color="#07dee6ff">
            1000+
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Properties Listed
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold" color="#07dee6ff">
            5000+
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Happy Customers
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold" color="#07dee6ff">
            50+
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cities Covered
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight="bold" color="#07dee6ff">
            100%
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Verified Listings
          </Typography>
        </Box>
      </Box>
   </>
  );
};

export default Home;
