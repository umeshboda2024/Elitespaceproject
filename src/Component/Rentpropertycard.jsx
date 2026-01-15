import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";
import { RentCities } from "../Home/Rentpropertydata";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
/* =======================
   SINGLE PROPERTY CARD
======================= */
const RentPropertyCardItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          "& img": { transform: "scale(1.1)" },
          "& .overlay": { opacity: 1 },
        },
      }}
    >
      {/* IMAGE SECTION */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="200"
          width="450"
          image={item.images?.[0] || "/no-image.jpg"}
          alt={item.name}
          sx={{ transition: "0.5s" }}
        />

        {/* OVERLAY BUTTON */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 2,
            opacity: 0,
            transition: "0.4s",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate(`/Rent/${item.id}`, { state: item })}
            sx={{
              borderRadius: 20,
              px: 4,
              backgroundColor: "#0F4C5C",
              "&:hover": {
                backgroundColor: "#093944",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      {/* CONTENT */}
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {item.state}
        </Typography>

        <Typography fontWeight={600} mt={0.5} display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
          {item.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.flate}
        </Typography>

        <Typography fontWeight={600} mt={1} display="flex" alignItems="center">
          <CurrencyRupeeIcon fontSize="small" />
          {item.price} | {item.area}
        </Typography>
      </CardContent>
    </Card>
  );
};

/* =======================
   PROPERTY GRID + BUTTON
======================= */
const RentPropertyCard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      {/* PROPERTY GRID */}
      <Grid container  spacing={5}>
        {RentCities.map((item) => (
          <Grid item size={{xs:12 ,sm:6 ,md:4}}  key={item.id}>
            <RentPropertyCardItem item={item} />
          </Grid>
        ))}
      </Grid>

      {/* VIEW ALL RENT PROPERTIES BUTTON */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/Rent")}
          sx={{
             mt: { xs: 3, md: 2 },
                px: { xs: 3, md: 4 },
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#0F4C5C",
                gap: 2,
            "&:hover": {
              backgroundColor: "#093944",
              transform: "translateY(-2px)",
            },
          }}
        >
          View All Rent Properties <ArrowForwardIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default RentPropertyCard;
