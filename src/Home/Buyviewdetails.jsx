import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Card,
  Divider,
} from "@mui/material";

const BuyView = () => {
  const location = useLocation();
  const property = location.state;

  const [mainImage, setMainImage] = useState(property.images[0]);

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* PRICE */}
      <Typography variant="h4" fontWeight={700}>
        {property.price}
      </Typography>

      <Typography color="text.secondary" mb={1}>
        EMI starts from ₹40,000
      </Typography>

      {/* TITLE */}
      <Typography variant="h6" mb={3}>
        {property.flate} for Sale in {property.name}, {property.state}
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT SECTION */}
        <Grid item size={{xs:12 ,md:8}} >
          {/* MAIN IMAGE */}
          <Box
            component="img"
            src={mainImage}
            sx={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />

          {/* THUMBNAILS */}
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {property.images.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                onClick={() => setMainImage(img)}
                sx={{
                  width: 90,
                  height: 70,
                  cursor: "pointer",
                  borderRadius: 2,
                  border:
                    mainImage === img
                      ? "2px solid #1976d2"
                      : "1px solid #ccc",
                }}
              />
            ))}
          </Box>

          {/* HIGHLIGHTS */}
          <Card sx={{ mt: 3, p: 2 }}>
            <Grid container textAlign="center">
              <Grid item size={{xs:3}}>🛏 2 Beds</Grid>
              <Grid item size={{xs:3}}>🚿 2 Baths</Grid>
              <Grid item size={{xs:3}}>🌅 1 Balcony</Grid>
              <Grid item size={{xs:3}}>🪑 Unfurnished</Grid>
            </Grid>
          </Card>

          {/* PROPERTY DETAILS */}
          <Card sx={{ mt: 3, p: 3 }}>
            <Typography fontWeight={600} mb={2}>
              Property Details
            </Typography>

            <Grid container spacing={2}>
              <Grid item size={{xs:6}} >
                <Typography>Super Area: {property.area}</Typography>
                <Typography mt={1}>Floor: 20 of 24</Typography>
                <Typography mt={1}>Facing: North-West</Typography>
              </Grid>

              <Grid item size={{xs:6}}>
                <Typography>Developer: Godrej</Typography>
                <Typography mt={1}>Ownership: Freehold</Typography>
                <Typography mt={1}>Status: Under Construction</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* RIGHT SECTION */}
        <Grid item size={{xs:12 ,md:4}} >
          <Card
            sx={{
              p: 3,
              position: "sticky",
              top: 90,
            }}
          >
            <Typography fontWeight={600} mb={1}>
              Contact Agent
            </Typography>

            <Typography color="text.secondary" mb={2}>
              Rahul (Owner)
            </Typography>

            <Box
              sx={{
                bgcolor: "#d32f2f",
                color: "#fff",
                textAlign: "center",
                py: 1.3,
                borderRadius: 2,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Get Agent Phone No.
            </Box>
          </Card>

          <Card sx={{ mt: 2, p: 2, textAlign: "center", cursor: "pointer" }}>
            ⬇ Download Brochure
          </Card>
        </Grid>
      </Grid>

      {/* MORE DETAILS */}
      <Card sx={{ mt: 4, p: 3 }}>
        <Typography fontWeight={600} mb={2}>
          More Details
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography>Price Breakup: {property.price}</Typography>
        <Typography mt={1}>Booking Amount: ₹1 Lac</Typography>
        <Typography mt={1}>
          Address: {property.name}, {property.state}
        </Typography>
        <Typography mt={1}>Furnishing: Unfurnished</Typography>
      </Card>
    </Container>
  );
};

export default BuyView;
