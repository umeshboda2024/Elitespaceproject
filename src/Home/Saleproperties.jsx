import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Salepropertyimage from "../Assets/images/Salepropertyimage1.jpg";
import Villa from "../Assets/images/Villaimgae.jpg";
import Rowhouseimage from "../Assets/images/Rowhouseimage.jpg";
import Farmhouseimage from "../Assets/images/Farmhouseimage.jpg";

const Saleproperty = () => {
  const Properties = [
    {
      image: Salepropertyimage,
      name: "Flat & Appartment",
      Flate: "2 BHK /1350 sq.ft",
      location: "Vesu, Surat",
    },
    {
      image: Villa,
      name: "Luxury Villa",
      Flate: "4 BHK /4000 sq.ft",
      location: "Pal, Surat",
    },
    {
      image: Rowhouseimage,
      name: "Row House",
      Flate: "3 BHK /2000 sq.ft",
      location: "Adajan, Surat",
    },
    {
      image: Farmhouseimage,
      name: "Farm House",
      Flate: "5 BHK /5000 sq.ft",
      location: "Katargam, Surat",
    },
    {
      image: Salepropertyimage,
      name: "Flat & Appartment",
      Flate: "2 BHK /1350 sq.ft",
      location: "Vesu, Surat",
    },
    {
      image: Villa,
      name: "Luxury Villa",
      Flate: "4 BHK /4000 sq.ft",
      location: "Pal, Surat",
    },
    {
      image: Rowhouseimage,
      name: "Row House",
      Flate: "3 BHK /2000 sq.ft",
      location: "Adajan, Surat",
    },
    {
      image: Farmhouseimage,
      name: "Farm House",
      Flate: "5 BHK /5000 sq.ft",
      location: "Katargam, Surat",
    },
  ];

  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(Properties.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const visibleProperties = Properties.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <Box py={4} mt={5}>
      <Typography variant="h4" mb={2}>
        Latest Sale Properties / Rent Properties
      </Typography>
      <Container maxWidth="xl">
        <Typography variant="body1" textAlign={"left"} mb={2}>
          Sale Properties
        </Typography>

        <Grid container spacing={3}>
          {visibleProperties.map((property, index) => (
            <Grid item size={3} xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: "100%", overflow: "hidden" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={property.image}
                    alt={property.name}
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight={700}>
                      {property.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {property.Flate} - {property.location}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={2}>
          <IconButton onClick={handlePrev} disabled={page === 0}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={handleNext} disabled={page === totalPages - 1}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Saleproperty;
