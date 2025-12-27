import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";

import Surat from "../Assets/images/Surat.jpg";
import Ahmedabad from "../Assets/images/Ahmedabad.jpg";
import Mumbai from "../Assets/images/Mumbai.jpg";
import Delhi from "../Assets/images/Delhi.jpg";
import { BorderTop } from "@mui/icons-material";

const Cities = [
  { state: "Gujarat", name: "Surat", Image: Surat },
  { state: "Gujarat", name: "Ahmedabad", Image: Ahmedabad },
  { state: "Maharashtra", name: "Mumbai", Image: Mumbai },
  { state: "Delhi", name: "Delhi", Image: Delhi },
];

const StateProperties = () => {
  return (
    <Container sx={{ py: 6 }} >
      <Typography variant="h4" textAlign="center" mb={1} fontWeight="bold">
        Explore Properties by State
      </Typography>
      <Typography variant="body1" mb={2}>
        Feeting Way of our State-Specific Properties with different type of type heptay in india
      </Typography>

      {/* ONE GRID CONTAINER */}
      <Grid container spacing={4} justifyContent="center">
        {Cities.map((city, index) => (
          <Grid item key={index} size={3} xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: "14px",
                transition: "0.4s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
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
                <Typography variant="body1"   fontWeight="bold" display={"flex"} justifyContent={"flex-start"}  >
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
                  variant="body2"
                  mb={2}
                  sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
                >
                  <ApartmentIcon color="action" />
                  2,200,000 sq.ft Available
                </Typography>
                  <Typography
                  variant="body2"
                  
                  sx={{ borderTop:"1px solid black",  }}
                >
                  <ApartmentIcon color="action" />
                     
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StateProperties;
