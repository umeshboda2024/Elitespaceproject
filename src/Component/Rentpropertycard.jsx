import React, { useEffect, useState } from "react";
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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate, useParams } from "react-router-dom";
import { getProperties } from "../Admin/component/Service/Propertyservice";

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
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image || "https://via.placeholder.com/400x300"}
          alt={item.name}
          sx={{ transition: "0.5s" }}
        />

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
            onClick={() => navigate(`/rentview/${item._id}`, { state: item })}
            sx={{
              borderRadius: 20,
              px: 4,
              backgroundColor: "#0F4C5C",
              "&:hover": { backgroundColor: "#093944" },
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>

      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {item.state}
        </Typography>

        <Typography
          fontWeight={600}
          mt={0.5}
          display="flex"
          alignItems="center"
        >
          <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
          {item.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.flate}
        </Typography>

        <Typography fontWeight={600} mt={1} display="flex" alignItems="center">
          <CurrencyRupeeIcon fontSize="small" />
          {item.price} Month | {item.area}
        </Typography>
      </CardContent>
    </Card>
  );
};

/* =======================
   PROPERTY GRID
======================= */
const RentPropertyCard = () => {
  const navigate = useNavigate();
  const { state, propertyType } = useParams();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 clear search when route changes
  useEffect(() => {
    setSearch("");
    fetchProperties();
  }, [state, propertyType]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await getProperties();

      let properties = res?.Data || [];

      if (state) {
        properties = properties.filter(
          (item) => item.state?.toLowerCase() === state.toLowerCase()
        );
      }

      if (propertyType) {
        properties = properties.filter(
          (item) => item.type?.toLowerCase() === propertyType.toLowerCase()
        );
      }

      setData(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 search filter (fixed)
  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Typography variant="h4" fontWeight={800} textAlign="center" mb={1}>
        Explore Rent Properties
      </Typography>

      <Typography textAlign="center" color="text.secondary" mb={6}>
        Premium residential projects handpicked for you
      </Typography>

      <Grid container spacing={5}>
        {filteredData.slice(9, 18).map((item) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <RentPropertyCardItem item={item} />
          </Grid>
        ))}
      </Grid>

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
