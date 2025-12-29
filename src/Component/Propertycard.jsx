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
import ApartmentIcon from "@mui/icons-material/Apartment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Buyimage1 from "../Assets/images/BuyImage1,jpg.jpg";
import Buyimage2 from "../Assets/images/BuyImage2.jpg";
import Buyimage3 from "../Assets/images/BuyImage3.jpg";
import Buyimage4 from "../Assets/images/BuyImage4.jpg";
import Buyimage5 from "../Assets/images/BuyImage5.jpg";
import Buyimage6 from "../Assets/images/BuyImage6.jpg";
import Rentimage1 from "../Assets/images/rentimage1.jpg";
import Rentimage2 from "../Assets/images/rentimage2.jpg";
import Rentimage3 from "../Assets/images/rentimage3.jpg";
import Rentimage4 from "../Assets/images/rentimage4.jpg";
import Rentimage5 from "../Assets/images/rentimage5.jpg";
import Rentimage6 from "../Assets/images/rentimage6.jpg";

const Cities = [
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage1,
    flate: "2 BHK Flat",
    Price: "80Lac | 1100 Sq.Ft ",
  },
  {
    state: "Gujarat",
    name: "Ahmedabad",
    Image: Buyimage2,
    flate: "3 BHK Flat",
    Price: "2.00 Cr | 1250 Sq.Ft ",
  },
  {
    state: "Maharashtra",
    name: "Mumbai",
    Image: Buyimage4,
    flate: "2 BHK Flat",
    Price: "1.85 cr| 862 Sq.Ft ",
  },
  {
    state: "Delhi",
    name: "Delhi",
    Image: Buyimage3,
    flate: "1 BHK Flat",
    Price: "85 lac | 535 Sq.Ft ",
  },
  {
    state: "Haryana",
    name: "Gurgam",
    Image: Buyimage5,
    flate: "3 BHK Flat",
    Price: "3.50 cr  | 2350 Sq.Ft ",
  },
  {
    state: "Maharashtra",
    name: "Pune",
    Image: Buyimage6,
    flate: "2 BHK Flat",
    Price: "1.80 cr  | 1200 Sq.Ft ",
  },
];

const Rent = [
  {
    state: "Gujarat",
    name: "Surat",
    Image: Rentimage1,
    flate: "1 BHK Flat",
    Price: "8000| 1100 Sq.Ft ",
  },
  {
    state: "Gujarat",
    name: "Ahmedabad",
    Image: Rentimage2,
    flate: "Office Rent",
    Price: "2.00 Cr | 1250 Sq.Ft ",
  },
  {
    state: "Maharashtra",
    name: "Mumbai",
    Image: Rentimage3,
    flate: "2 BHK Flat",
    Price: "1.85 cr| 862 Sq.Ft ",
  },
  {
    state: "Delhi",
    name: "Delhi",
    Image: Rentimage4,
    flate: "1 BHK Flat",
    Price: "85 lac | 535 Sq.Ft ",
  },
  {
    state: "Haryana",
    name: "Gurgam",
    Image: Rentimage5,
    flate: "3 BHK Flat",
    Price: "3.50 cr  | 2350 Sq.Ft ",
  },
  {
    state: "Maharashtra",
    name: "Pune",
    Image: Rentimage6,
    flate: "2 BHK Flat",
    Price: "1.80 cr  | 1200 Sq.Ft ",
  },
];

const Propertycard = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" textAlign="center" mb={1} fontWeight="bold">
            Explore Buy Properties
          </Typography>
          <Typography variant="body1" mb={2}>
            Feeting Way of our State-Specific Properties with different type of
            type heptay in india
          </Typography>

          {/* ONE GRID CONTAINER */}
          <Grid container spacing={4} justifyContent="center">
            {Cities.map((city, index) => (
              <Grid item key={index} size={4} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    borderRadius: "14px",
                    transition: "0.4s",
                    cursor: "pointer",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,

                      "& .hover-btn": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={city.Image}
                    alt={city.name}
                  />

                  <CardContent>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      display={"flex"}
                      justifyContent={"flex-start"}
                    >
                      {city.state}
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <LocationOnIcon color="primary" />
                      {city.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      {/* <LocationOnIcon color="primary" /> */}
                      {city.flate}
                    </Typography>

                    <Typography
                      variant="body1"
                      mb={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                        fontWeight: "bold",
                      }}
                    >
                      <ApartmentIcon color="action" />
                      <CurrencyRupeeIcon />
                      {city.Price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ borderTop: "1px solid black" }}
                    >
                      {/* <ApartmentIcon color="action" /> */}
                    </Typography>
                    {/* Hover Button */}
                    <Box
                      mt={2}
                      className="hover-btn"
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "center",
                        opacity: 0,
                        transform: "translateY(10px)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          width: "180px",
                          borderRadius: "30px",
                          backgroundColor: "red",
                          px: 3,
                          fontSize: "18px",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: 5,
              px: 4,
              borderRadius: "15px",
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#0F4C5C",
              gap: 1,
            }}
          >
            View All Buy Properties <ArrowForwardIcon />
          </Button>
        </Container>
      </Box>
      {/* Rent properties  */}
      <Box sx={{ position: "relative" }}>
        <Container sx={{ py: 6 }}>
          <Typography variant="h4" textAlign="center" mb={1} fontWeight="bold">
            Explore Rent Properties
          </Typography>
          <Typography variant="body1" mb={2}>
            Feeting Way of our State-Specific Properties with different type of
            type heptay in india
          </Typography>

          {/* ONE GRID CONTAINER */}
          <Grid container spacing={4} justifyContent="center">
            {Rent.map((Rent, index) => (
              <Grid item key={index} size={4} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    borderRadius: "14px",
                    transition: "0.4s",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,

                      "& .hover-btn": {
                        opacity: 1,
                        transform: "translateY(0)",
                        "& .Imagehover": {
                          transform: "scale(1.1)",
                        },
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={Rent.Image}
                    alt={Rent.name}
                    className="Imagehover"
                    sx={{
                      transition: "transform 0.4s ease",
                    }}
                  />

                  <CardContent>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      display={"flex"}
                      justifyContent={"flex-start"}
                    >
                      {Rent.state}
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <LocationOnIcon color="primary" />
                      {Rent.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      {/* <LocationOnIcon color="primary" /> */}
                      {Rent.flate}
                    </Typography>

                    <Typography
                      variant="body1"
                      mb={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                        fontWeight: "bold",
                      }}
                    >
                      <ApartmentIcon color="action" />
                      <CurrencyRupeeIcon />
                      {Rent.Price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ borderTop: "1px solid black" }}
                    >
                      {/* <ApartmentIcon color="action" /> */}
                    </Typography>
                    {/* Hover Button */}
                    <Box
                      mt={2}
                      className="hover-btn"
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "center",
                        opacity: 0,
                        transform: "translateY(10px)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          width: "180px",
                          borderRadius: "30px",
                          backgroundColor: "red",
                          px: 3,
                          fontSize: "18px",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: 5,
              px: 4,
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#0F4C5C",
              gap: 1,
            }}
          >
            View All Rent Properties <ArrowForwardIcon />
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Propertycard;
