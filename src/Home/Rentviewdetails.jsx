import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Card,
} from "@mui/material";

const RentView = () => {
  const location = useLocation();
  const property = location.state;

  const [mainImage, setMainImage] = useState(property.images[0]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight={700}>
        {property.price}
      </Typography>

      <Typography variant="h6" mb={3}>
        {property.flate} in {property.name}, {property.state}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            src={mainImage}
            sx={{
              width: "100%",
              height: 400,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />

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
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Chip label={property.flate} sx={{ mb: 1 }} />
            <Typography>Area: {property.area}</Typography>
            <Typography mt={1}>Location: {property.name}</Typography>
            <Typography mt={1}>State: {property.state}</Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RentView;
