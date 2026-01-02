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
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import Buyimage1 from "../Assets/images/BuyImage1,jpg.jpg";
import Buyimage2 from "../Assets/images/BuyImage2.jpg";
import Buyimage3 from "../Assets/images/BuyImage3.jpg";
import Buyimage4 from "../Assets/images/BuyImage4.jpg";
import Buyimage5 from "../Assets/images/BuyImage5.jpg";
import Buyimage6 from "../Assets/images/BuyImage6.jpg";

import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Cities = [
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage1,
    flate: "3 BHK Flat",
    status: "Ready to Move",
    carpetArea: "2000 sqft",
    floor: "4 out of 12",
    price: "₹88 Lac",
    perSqft: "₹4,000 per sqft",
    owner: "Govind",
  },
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage2,
    flate: "3 BHK Flat",
    status: "Ready to Move",
    carpetArea: "1526 sqft",
    floor: "12 out of 12",
    price: "₹62 Lac",
    perSqft: "₹4,000 per sqft",
    owner: "Neha Saxena",
  },
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage3,
    flate: "2 BHK Flat",
    status: "Ready to Move",
    carpetArea: "1330 sqft",
    floor: "13 out of 13",
    price: "₹70 Lac",
    perSqft: "₹5,263 per sqft",
    owner: "Ramesh",
  },

  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage4,
    flate: "2 BHK Flat",
    status: "Ready to Move",
    carpetArea: "1330 sqft",
    floor: "13 out of 13",
    price: "₹70 Lac",
    perSqft: "₹5,263 per sqft",
    owner: "Ramesh",
  },
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage5,
    flate: "2 BHK Flat",
    status: "Ready to Move",
    carpetArea: "1330 sqft",
    floor: "13 out of 13",
    price: "₹70 Lac",
    perSqft: "₹5,263 per sqft",
    owner: "Ramesh",
  },

  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage6,
    flate: "2 BHK Flat",
    status: "Ready to Move",
    carpetArea: "1330 sqft",
    floor: "13 out of 13",
    price: "₹70 Lac",
    perSqft: "₹5,263 per sqft",
    owner: "Ramesh",
  },
];

const BuyProperties = () => {
  return (
    <>
      <Navbar />
      <Box mt={12} mb={4}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={600}
            fontFamily="Poppins"
            mb={1}
          >
            Explore Buy Properties
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            mb={4}
            fontFamily="Inter"
          >
            Explore state-specific properties with multiple property types
            across India
          </Typography>

          <Grid container spacing={2}>
            {Cities.map((city, index) => (
              <Grid item size={12} xs={12} key={index}>
                <Card
                  sx={{ display: "flex", bgcolor: "#f7f9fc", borderRadius: 2 }}
                >
                  <CardMedia
                    component="img"
                    image={city.Image}
                    alt={city.name}
                    sx={{ width: 200, objectFit: "cover" }}
                  />

                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        fontFamily="Poppins"
                        fontWeight={700}
                        variant="subtitle2"
                        color="textSecondary"
                      >
                        Owner: {city.owner}
                      </Typography>

                      <Typography
                        fontFamily="Poppins"
                        fontWeight={600}
                        variant="h6"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        <LocationOnIcon color="primary" fontSize="small" />
                        {city.name}, {city.state}
                      </Typography>

                      <Typography
                        fontFamily="Poppins"
                        variant="body2"
                        color="textSecondary"
                      >
                        {city.flate}
                      </Typography>

                      {/* Property Details */}
                      <Box display="flex" gap={2} mt={1} flexWrap="wrap">
                        <Box
                          bgcolor="#e0f2f1"
                          px={1}
                          py={0.5}
                          borderRadius={1}
                          display="flex"
                          alignItems="center"
                          gap={0.5}
                        >
                          <SquareFootIcon fontSize="small" />
                          {city.carpetArea}
                        </Box>
                        <Box bgcolor="#e3f2fd" px={1} py={0.5} borderRadius={1}>
                          {city.status}
                        </Box>
                        <Box bgcolor="#fff3e0" px={1} py={0.5} borderRadius={1}>
                          Floor: {city.floor}
                        </Box>
                      </Box>
                    </Box>

                    {/* Price & Buttons */}
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      mt={2}
                    >
                      <Typography fontWeight={700} variant="h6">
                        {city.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {city.perSqft}
                      </Typography>

                      <Box mt={1} display="flex" gap={1}>
                        <Button variant="contained" size="small" color="error">
                          Contact Owner
                        </Button>
                        <Button variant="outlined" size="small" color="error">
                          Check Availability
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default BuyProperties;
