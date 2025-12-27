import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Ahmedabad from "../Assets/images/Ahmedabad.jpg";
import Mumbai from "../Assets/images/Mumbai.jpg";
import Surat from "../Assets/images/Surat.jpg";
import Delhi from "../Assets/images/Delhi.jpg";

import "./Stateproperties.css";

const StateProperties = () => {
  const properties = [
    { price: "45 Lakh", state: "Gujarat", location: "Ahmedabad", image: Ahmedabad },
    { price: "60 Lakh", state: "Gujarat", location: "Surat", image: Surat },
    { price: "75 Lakh", state: "Maharashtra", location: "Mumbai", image: Mumbai },
    { price: "90 Lakh", state: "Delhi", location: "Delhi", image: Delhi },
  ];

  return (
    <>
    <Box className="State-background">
    <Box className="state-container">
      <Typography variant="h4" className="state-heading">
        Explore Properties by State
      </Typography>
      <Typography variant="body1" className="state-subheading">
        Discover premium properties across major Indian cities
      </Typography>

      <Box className="state-grid">
        {properties.map((item, index) => (
          <Card className="state-card" key={index}>
            <CardMedia component="img" image={item.image} />

            <CardContent>
              <Box className="state-text">
                <Typography variant="subtitle1" className="state-name">
                  {item.state}
                </Typography>
                <Typography className="location" variant="body2">
                  <LocationOnIcon fontSize="small" /> {item.location}
                </Typography>
              </Box>

              <Box className="state-price">
                <CurrencyRupeeIcon color="primary" />
                <Typography variant="h6">{item.price}</Typography>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                className="state-button"
              >
                View Properties
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </Box>
    </>
  );
};

export default StateProperties;
