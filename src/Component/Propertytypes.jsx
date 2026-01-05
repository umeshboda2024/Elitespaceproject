import { Box, Button, Container, Typography, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Appartmentimage from "../Assets/images/Appartmentimage.jpg";
import Villa from "../Assets/images/Villaimgae.jpg";
import Rowhouseimage from "../Assets/images/Rowhouseimage.jpg";
import Farmhouseimage from "../Assets/images/Farmhouseimage.jpg";

const Propertytypes = () => {
  const Properties = [
    { image: Appartmentimage, name: "Appartment" },
    { image: Villa, name: "Villas" },
    { image: Rowhouseimage, name: "Rowhouse" },
    { image: Farmhouseimage, name: "Farmhouse" },
  ];

  return (
    <Box py={{ xs: 3, md: 4 }} mt={{ xs: 3, md: 5 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="center"
        >
          {Properties.map((property, index) => (
            <Grid
              item
              key={index}
              size={{xs:12,
              sm:6,
              md:4,
              lg:3}}
              
            >
              <Card
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  "&:hover .Imagehover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={property.image}
                    alt={property.name}
                    className="Imagehover"
                    sx={{
                      width: "100%",
                      height: { xs: 200, sm: 170, md: 140 },
                      transition: "transform 7s ease",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="body1" fontWeight={700}>
                      {property.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}

          {/* Button */}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: { xs: 3, md: 2 },
                px: { xs: 3, md: 4 },
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#0F4C5C",
                gap: 2,
              }}
            >
              View All Properties <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Propertytypes;
