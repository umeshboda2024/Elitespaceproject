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
  Chip,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import Buyimage1 from "../Assets/images/BuyImage1,jpg.jpg";
import Buyimage2 from "../Assets/images/BuyImage2.jpg";
import Buyimage3 from "../Assets/images/BuyImage3.jpg";
import Buyimage4 from "../Assets/images/BuyImage4.jpg";
import Buyimage5 from "../Assets/images/BuyImage5.jpg";
import Buyimage6 from "../Assets/images/BuyImage6.jpg";
import Buyimage7 from "../Assets/images/BuyImage7.jpg";
import Buyimage8 from "../Assets/images/BuyImage8.jpg";
import Buyimage9 from "../Assets/images/BuyImage9.jpg";
import Buyimage10 from "../Assets/images/BuyImage10.jpg";
import Buyimage11 from "../Assets/images/BuyImage11.jpg";
import Buyimage12 from "../Assets/images/BuyImage12.jpg";

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
  {
    state: "Gujarat",
    name: "Surat",
    Image: Buyimage7,
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
    Image: Buyimage8,
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
    Image: Buyimage9,
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
    Image: Buyimage10,
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
    Image: Buyimage11,
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
    Image: Buyimage12,
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
      <Box mt={12} mb={6} sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            gutterBottom
            sx={{ color: "#222" }}
          >
            Explore Buy Properties
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            mb={6}
            mt={1}
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Explore state-specific properties with multiple property types
            across India
          </Typography>

          <Grid container spacing={4}>
            {Cities.map((city, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                    transition: "0.5s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      image={city.Image}
                      alt={city.name}
                      sx={{
                        width: "100%",
                        height: 220,
                        transition: "0.5s",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />

                    <Chip
                      label={city.status}
                      size="small"
                      color="success"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  {/* CONTENT */}
                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: 3,
                    }}
                  >
                    <Box>
                      <Typography fontSize={13} color="text.secondary">
                        Owner: {city.owner}
                      </Typography>

                      <Typography
                        variant="h6"
                        fontWeight={700}
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        mt={0.5}
                      >
                        <LocationOnIcon color="error" fontSize="small" />
                        {city.name}, {city.state}
                      </Typography>

                      <Typography color="text.secondary" mt={0.5}>
                        {city.flate}
                      </Typography>

                      <Box display="flex" gap={1.5} mt={2} flexWrap="wrap">
                        <Chip
                          icon={<SquareFootIcon />}
                          label={city.carpetArea}
                          size="small"
                        />
                        <Chip
                          label={`Floor: ${city.floor}`}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </Box>

                    {/* PRICE + ACTION */}
                    <Box
                      mt={3}
                      display="flex"
                      flexDirection={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      gap={2}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={900}
                          sx={{
                            background:
                              "linear-gradient(45deg,#d32f2f,#ff5252)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        >
                          {city.price}
                        </Typography>
                        <Typography fontSize={13} color="text.secondary">
                          {city.perSqft}
                        </Typography>
                      </Box>

                      <Box display="flex" gap={1} flexWrap="wrap">
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          sx={{
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        >
                          Contact Owner
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          sx={{
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.05)" },
                          }}
                        >
                          Availability
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
    </>
  );
};

export default BuyProperties;
