import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Buyimage1 from "../Assets/images/BuyImage1,jpg.jpg";
import Buyimage2 from "../Assets/images/BuyImage2.jpg";
import Buyimage3 from "../Assets/images/BuyImage3.jpg";
import Buyimage4 from "../Assets/images/BuyImage4.jpg";
import Buyimage5 from "../Assets/images/BuyImage5.jpg";
import Buyimage6 from "../Assets/images/BuyImage6.jpg";

import { useNavigate } from "react-router-dom";

/* -------------------- DATA -------------------- */
export const Cities = [
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage1,
    flate: "2 BHK Flat",
    Price: "80 Lac | 1100 Sq.Ft",
  },
  {
    state: "Gujarat",
    name: "Ahmedabad",
    Image: Buyimage2,
    flate: "3 BHK Flat",
    Price: "2.00 Cr | 1250 Sq.Ft",
  },
  {
    state: "Maharashtra",
    name: "Mumbai",
    Image: Buyimage4,
    flate: "2 BHK Flat",
    Price: "1.85 Cr | 862 Sq.Ft",
  },
  {
    state: "Delhi",
    name: "Delhi",
    Image: Buyimage3,
    flate: "1 BHK Flat",
    Price: "85 Lac | 535 Sq.Ft",
  },
  {
    state: "Haryana",
    name: "Gurgaon",
    Image: Buyimage5,
    flate: "3 BHK Flat",
    Price: "3.50 Cr | 2350 Sq.Ft",
  },
  {
    state: "Maharashtra",
    name: "Pune",
    Image: Buyimage6,
    flate: "2 BHK Flat",
    Price: "1.80 Cr | 1200 Sq.Ft",
  },
];

/* -------------------- CARD -------------------- */
const PropertyCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          "& img": { transform: "scale(1.1)" },
          "& .overlay": { opacity: 1 },
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="200"
          image={item.Image}
          alt={item.name}
          sx={{ transition: "0.5s" }}
        />

        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 2,
            opacity: 0,
            transition: "0.4s",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate(`/buyview/${item.state}`)}
            sx={{
              borderRadius: 20,
              px: 4,
              textTransform: "none",
              backgroundColor: "#0F4C5C",
              fontWeight: 600,
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {item.state}
        </Typography>

        <Typography variant="h6" fontWeight={600}>
          <LocationOnIcon fontSize="small" color="primary" /> {item.name}
        </Typography>

        <Typography>{item.flate}</Typography>

        <Typography fontWeight={600} mt={1}>
          <CurrencyRupeeIcon fontSize="small" /> {item.Price}
        </Typography>
      </CardContent>
    </Card>
  );
};

/* -------------------- MAIN -------------------- */
const Propertycard = () => {
  const navigate = useNavigate();

  return (
    <Box mt={12}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" fontWeight={600}>
          Explore Buy Properties
        </Typography>

        <Typography align="center" color="text.secondary" mb={5}>
          Find premium homes across top cities in India
        </Typography>

        <Grid container spacing={4}>
          {Cities.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <PropertyCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button
            onClick={() => navigate("/buy")}
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 5,
              borderRadius: 3,
              textTransform: "none",
              backgroundColor: "#0F4C5C",
            }}
          >
            View All Buy Properties
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Propertycard;
