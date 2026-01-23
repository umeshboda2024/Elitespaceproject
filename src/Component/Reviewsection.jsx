import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddReviewDialog from "../Home/Addreviewsection";
import { getReviews } from "../Admin/component/Service/reviewService";

// fallback image
import ReviewImage from "../Assets/images/reviewimage1.jpeg";

export default function ReviewSection() {
  const scrollRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews();

        // 🔥 safe extract (har type ke response ke liye)
        const list = res?.data?.Data || res?.data?.data || res?.Data || [];

        console.log("ALL REVIEWS:", list);

        setReviews(list); // ✅ no filter
      } catch (err) {
        console.error("Review API error:", err);
        setReviews([]);
      }
    };

    fetchReviews();
  }, []);
  const getReviewImage = (item) => {
    if (!item.image || item.image.length === 0) return ReviewImage;

    const img = item.image[0];

    if (img.startsWith("http")) return img;

    return `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
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
              left: -20,
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
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
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
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <Avatar
                  src={getReviewImage(item)}
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
                  <Typography
                    fontSize={15}
                    color="#555"
                    mb={3}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3, // 👈 max 3 lines
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.message}
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
              right: -20,
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

        {/* WRITE REVIEW BUTTON */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: 3,
              fontWeight: 600,
            }}
          >
            ⭐ Write a Review
          </Button>
        </Box>

        <AddReviewDialog open={open} onClose={() => setOpen(false)} />
      </Container>
    </Box>
  );
}
