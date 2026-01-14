import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PropertyCard from "../Component/Rentpropertycard";
import { RentCities } from "../Home/Rentpropertydata";

const RentSection = () => {
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" align="center" fontWeight={600}>
        Explore Rent Properties
      </Typography>

      <Typography align="center" color="text.secondary" mb={5}>
        Affordable rental homes & offices
      </Typography>

      <Grid container spacing={5}>
        {RentCities.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PropertyCard item={item} type="rent" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RentSection;
