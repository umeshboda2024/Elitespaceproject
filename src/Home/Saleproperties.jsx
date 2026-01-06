import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import React, { useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Salepropertyimage1 from "../Assets/images/Salepropertyimage1.jpg";
import Salepropertyimage2 from "../Assets/images/Salepropertyimage2.jpg";
import Salepropertyimage3 from "../Assets/images/Salepropertyimage3.jpg";
import Salepropertyimage4 from "../Assets/images/Salepropertyimage4.jpg";

import Villa from "../Assets/images/Villaimgae.jpg";
import Rowhouseimage from "../Assets/images/Rowhouseimage.jpg";
import Farmhouseimage from "../Assets/images/Farmhouseimage.jpg";

const Saleproperty = () => {
  const Properties = [
    {
      image: Salepropertyimage1,
      name: "Flat & Appartment",
      flat: "2 BHK /1350 sq.ft",
      location: "Vesu, Surat",
    },
    {
      image: Salepropertyimage2,
      name: "Luxury Villa",
      flat: "4 BHK /4000 sq.ft",
      location: "Pal, Surat",
    },
    {
      image: Salepropertyimage3,
      name: "Row House",
      flat: "3 BHK /2000 sq.ft",
      location: "Adajan, Surat",
    },
    {
      image: Farmhouseimage,
      name: "Farm House",
      flat: "5 BHK /5000 sq.ft",
      location: "Katargam, Surat",
    },
    {
      image: Salepropertyimage4,
      name: "Flat & Appartment",
      flat: "2 BHK /1350 sq.ft",
      location: "Vesu, Surat",
    },
    {
      image: Villa,
      name: "Luxury Villa",
      flat: "4 BHK /4000 sq.ft",
      location: "Pal, Surat",
    },
    {
      image: Rowhouseimage,
      name: "Row House",
      flat: "3 BHK /2000 sq.ft",
      location: "Adajan, Surat",
    },
    {
      image: Farmhouseimage,
      name: "Farm House",
      flat: "5 BHK /5000 sq.ft",
      location: "Katargam, Surat",
    },
  ];

  const scrollRef = useRef();
  const RentRef = useRef();
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        direction === "left"
          ? -scrollRef.current.offsetWidth
          : scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const Rentscroll = (direction) => {
    if (!RentRef.current) return;

    RentRef.current.scrollBy({
      left:
        direction === "left"
          ? -RentRef.current.offsetWidth
          : RentRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth="xl">
      <Box py={4} mt={5}>
        <Typography variant="h4" mb={2}>
          Latest Sale Properties / Rent Properties
        </Typography>
        {/* sale properties  */}
        {/* <Container maxWidth="xl"> */}
        <Typography variant="body1" mb={2} fontWeight={700}>
          Sale Properties
        </Typography>
        <Box position="relative">
          {/* Left Arrow */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "white",
              "&:hover": { bgcolor: "grey.200" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Cards Container */}
          <Box
            ref={scrollRef}
            display="flex"
            gap={2}
            overflow="auto"
            sx={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollBehavior: "smooth",
              py: 1,
              "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar in Chrome/Safari
              scrollbarWidth: "none",
            }}
          >
            {Properties.map((property, index) => (
              <Card key={index} sx={{ minWidth: 350, flexShrink: 0 }}>
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
                      {property.flat} - {property.location}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "white",
              "&:hover": { bgcolor: "grey.200" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
        {/* </Container> */}

        {/* Rent properties  */}
        <Box py={4} mt={5}>
          {/* <Container maxWidth="xl"> */}
          <Typography variant="body1" mb={2} fontWeight={700}>
            Rent Properties
          </Typography>
          <Box position="relative">
            {/* Left Arrow */}
            <IconButton
              onClick={() => Rentscroll("left")}
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "white",
                "&:hover": { bgcolor: "grey.200" },
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            {/* Cards Container */}
            <Box
              ref={RentRef}
              display="flex"
              gap={2}
              sx={{
                overflowX: "auto",
                overflowY: "hidden",
                scrollBehavior: "smooth",
                py: 1,
                "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar in Chrome/Safari
                scrollbarWidth: "none",
              }}
            >
              {Properties.map((property, index) => (
                <Card key={index} sx={{ minWidth: 350, flexShrink: 0 }}>
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
                        {property.flat} - {property.location}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
              onClick={() => Rentscroll("right")}
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "white",
                "&:hover": { bgcolor: "grey.200" },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          {/* </Container> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Saleproperty;
