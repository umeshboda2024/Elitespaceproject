import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import SpeedIcon from "@mui/icons-material/Speed";

const whyChooseData = [
  {
    icon: <VerifiedIcon fontSize="large" color="primary" />,
    title: "Trusted & Verified Agents",
    desc: "All agents are verified to ensure safe and reliable property deals.",
  },
  {
    icon: <HomeWorkIcon fontSize="large" color="primary" />,
    title: "10,000+ Properties Listed",
    desc: "Buy, sell, or rent from a wide range of verified properties.",
  },
  {
    icon: <TrendingUpIcon fontSize="large" color="primary" />,
    title: "Expert Market Knowledge",
    desc: "Get guidance from experienced professionals who know the market.",
  },
  {
    icon: <PaymentsIcon fontSize="large" color="primary" />,
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is what you pay.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
    title: "Dedicated Support",
    desc: "Our support team is always available to help you.",
  },
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: "Fast & Easy Process",
    desc: "Smooth and hassle-free buying and renting experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "#f9fafb", py: 8, mt:15}}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} mb={2}>
          Why Choose Us
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={5}
        >
          We help you find the perfect property with confidence and ease.
        </Typography>

        <Grid container spacing={4}>
          {whyChooseData.map((item, index) => (
            <Grid item key={index} size={4} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box mb={2}>{item.icon}</Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

