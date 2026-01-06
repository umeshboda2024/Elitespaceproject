import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Single clean image
import ReviewImage from "../Assets/images/reviewimage1.jpeg";

const reviews = [
  {
    name: "Rahul Mehta",
    city: "Ahmedabad",
    rating: 5,
    review:
      "Elite Space made my home-buying journey smooth and stress-free. Their property options and agent support were excellent.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    review:
      "I found my perfect 2 BHK flat within a week. The team is professional, transparent, and very responsive.",
  },
  {
    name: "Amit Verma",
    city: "Gurugram",
    rating: 4,
    review:
      "Great platform for both buying and renting properties. Easy search filters and genuine listings.",
  },
  {
    name: "Neha Patel",
    city: "Surat",
    rating: 5,
    review:
      "Highly trusted platform. Genuine listings and excellent customer support throughout the journey.",
  },
];

export default function ReviewSection() {
  const scrollRef = useRef(null);

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

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          align="center"
          fontWeight={700}
          letterSpacing={2}
          mb={5}
          sx={{ fontSize: { xs: 20, md: 26 } }}
        >
          ALUMNI SPEAK
        </Typography>

        <Box position="relative">
          {/* LEFT ICON */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: -30,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "#fff",
              boxShadow: 3,
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* SCROLL AREA */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollBehavior: "smooth",
              pb: 1,

              /* 🔥 Hide scrollbar (ALL browsers) */
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
            }}
          >
            {reviews.map((item, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 320,
                  maxWidth: 320,
                  height: 360,
                  flexShrink: 0,
                  borderRadius: 4,
                  textAlign: "center",
                  // boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <Avatar
                  src={ReviewImage}
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mt: 3,
                    border: "4px solid #fff",
                    boxShadow: "0px 8px 16px rgba(0,0,0,0.25)",
                  }}
                />

                <CardContent>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 3,
                      py: 0.7,
                      mb: 2,
                      mt: 2,
                      borderRadius: 20,
                      backgroundColor: "#fbc02d",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {item.name}
                  </Box>

                  <Typography fontSize={14} color="#777" mb={2}>
                    {item.city}
                  </Typography>

                  <Typography fontSize={15} color="#555" mb={3}>
                    {item.review}
                  </Typography>

                  <Rating
                    value={item.rating}
                    readOnly
                    sx={{ color: "#fbc02d" }}
                  />
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* RIGHT ICON */}
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: -30,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "#fff",
              boxShadow: 3,
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
