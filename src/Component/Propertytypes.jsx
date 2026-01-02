import { Box, Button, Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";

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
    { image: Appartmentimage, name: "Appartment " },
    { image: Villa, name: "Villas" },
    { image: Rowhouseimage, name: "Rowhouse" },
    { image: Farmhouseimage, name: "Farmhouse" },
  ];

  return (
    <Box py={4} mt={5}>
      <Container>
        {/* <Container maxWidth="xl"> */}
        <Grid container spacing={3} justifyContent={"center"}>
          {Properties.map((property, index) => {
            return (
              <Grid item key={index} size={3} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    maxWidth: "100%",
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
                      height="140"
                      src={property.image}
                      alt={property.image}
                      className="Imagehover"
                      sx={{
                        transition: "transform 7s ease",
                      }}
                    />
                    <CardContent>
                      <Typography variant="body1" fontWeight={700}>
                        {property.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}

          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: 1,
              px: 4,
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#0F4C5C",
              gap: 2,
              justifyContent: "center",
            }}
          >
            View All Properties <ArrowForwardIcon />
          </Button>
        </Grid>
        {/* </Container> */}
      </Container>
    </Box>
  );
};

export default Propertytypes;
