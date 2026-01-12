import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  Chip,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BalconyIcon from "@mui/icons-material/Balcony";
import ChairIcon from "@mui/icons-material/Chair";

import img1 from "../Assets/images/View1.jpg";
import img2 from "../Assets/images/View4.jpg";
import img3 from "../Assets/images/View3 (7).jpg";
import img4 from "../Assets/images/View3 (8).jpg";
import img5 from "../Assets/images/View5.jpg";

/* ================= THEME ================= */
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Inter', 'Roboto', sans-serif",
  },
});

/* ================= DUMMY PROPERTY DATA ================= */
/* Later you can replace this with API */
const PROPERTY_DATA = [
  {
    id: "gujarat",
    price: "₹ 65 Lac",
    emi: "₹23k",
    title: "3 BHK Flat For Sale in Galaxy Enclave",
    location: "Pal, Surat",
    images: [img1, img2, img3, img4, img5],
    features: [
      { icon: <BedIcon />, label: "3 Beds" },
      { icon: <BathtubIcon />, label: "3 Baths" },
      { icon: <BalconyIcon />, label: "1 Balcony" },
      { icon: <ChairIcon />, label: "Furnished" },
    ],
    details: [
      ["Super Built-up Area", "1405 sqft"],
      ["Project", "Galaxy Enclave"],
      ["Floor", "3 (Out of 12)"],
      ["Transaction Type", "Resale"],
      ["Status", "Ready to Move"],
      ["Ownership", "Freehold"],
    ],
  },
];

/* ================= COMPONENT ================= */
const PropertyDetails = () => {
  const { state } = useParams(); // 👈 state from URL
  const property =
    PROPERTY_DATA.find((item) => item.id === state?.toLowerCase()) ||
    PROPERTY_DATA[0];

  const [mainImage, setMainImage] = useState(property.images[0]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Grid container spacing={4}>
          {/* ================= LEFT ================= */}
          <Grid item xs={12} md={8}>
            {/* PRICE */}
            <Typography variant="h4" fontWeight={700}>
              {property.price}
              <Typography
                component="span"
                sx={{ ml: 1, fontSize: 14, color: "text.secondary" }}
              >
                EMI {property.emi}
              </Typography>
            </Typography>

            {/* TITLE */}
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 500 }}>
              {property.title},{" "}
              <Typography component="span" color="primary" fontWeight={600}>
                {property.location}
              </Typography>
            </Typography>

            {/* ================= IMAGE GALLERY ================= */}
            <Box sx={{ mt: 2 }}>
              <Box
                component="img"
                src={mainImage}
                sx={{
                  width: "100%",
                  height: { xs: 240, md: 380 },
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
              />

              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                {property.images.slice(0, 4).map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={img}
                    onClick={() => setMainImage(img)}
                    sx={{
                      width: 90,
                      height: 70,
                      objectFit: "cover",
                      borderRadius: 2,
                      cursor: "pointer",
                      border:
                        mainImage === img
                          ? "2px solid #1976d2"
                          : "1px solid #ddd",
                    }}
                  />
                ))}

                <Box
                  sx={{
                    width: 90,
                    height: 70,
                    position: "relative",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={property.images[4]}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 2,
                      filter: "brightness(0.5)",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    +{property.images.length} Photos
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* FEATURES */}
            <Box sx={{ display: "flex", gap: 1.5, mt: 2, flexWrap: "wrap" }}>
              {property.features.map((item, i) => (
                <Chip
                  key={i}
                  icon={item.icon}
                  label={item.label}
                  sx={{
                    px: 1.5,
                    py: 2,
                    fontWeight: 500,
                    borderRadius: 2,
                    backgroundColor: "#f5f5f5",
                  }}
                />
              ))}
            </Box>

            {/* DETAILS */}
            <Grid container spacing={2} sx={{ mt: 3 }}>
              {property.details.map(([label, value], index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
                    <Typography fontSize={13} color="text.secondary">
                      {label}
                    </Typography>
                    <Typography fontWeight={600}>{value}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" fontWeight={700}>
              More Details
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default PropertyDetails;
