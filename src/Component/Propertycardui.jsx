import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LayersIcon from "@mui/icons-material/Layers";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { getProperties } from "../Admin/component/Service/Propertyservice";

const Propertycard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      setData(res?.Data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const getImage = (property) => {
    if (!property.image || property.image.length === 0) {
      return "https://via.placeholder.com/400x300";
    }

    const img = property.image[0];
    if (img.startsWith("http")) return img;

    return `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Box mt={12} mb={10} sx={{ background: "#f7f9fc", py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={1}>
          Explore Buy Properties
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={6}>
          Premium residential projects handpicked for you
        </Typography>

        <Grid container spacing={4}>
          {data.slice(0,10).map((property) => (
            <Grid item size={{xs:12,sm:6,md:4}}  key={property._id}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.35s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="230"
                  image={getImage(property)}
                  alt={property.propertyname}
                />

                <CardContent>
                  {/* Status */}
                  <Stack direction="row" justifyContent="space-between">
                    <Chip
                      label={property.status}
                      size="small"
                      color={
                        property.status === "Available" ? "success" : "warning"
                      }
                    />
                    <Typography fontSize={12} color="text.secondary">
                      Floor: {property.floor}
                    </Typography>
                  </Stack>

                  {/* Property Name */}
                  <Typography fontWeight={700} fontSize={18} mt={1}>
                    {property.propertyname}
                  </Typography>

                  {/* Address */}
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                    display="flex"
                    gap={0.5}
                    alignItems="center"
                    mt={0.5}
                  >
                    <LocationOnIcon fontSize="small" />
                    {property.address}
                  </Typography>

                  {/* Type & BHK */}
                  <Typography fontSize={14} color="text.secondary" mt={0.5}>
                    {property.propertytype} • {property.bhk} BHK
                  </Typography>

                  {/* Price */}
                  <Typography fontWeight={800} fontSize={18} mt={1}>
                    <CurrencyRupeeIcon fontSize="small" />
                    {property.price} Lac
                  </Typography>

                  {/* Carpet Area */}
                  <Typography
                    fontSize={13}
                    color="text.secondary"
                    display="flex"
                    gap={0.5}
                  >
                    <SquareFootIcon fontSize="small" />
                    Carpet Area: {property.carpetarea} Sq.Ft
                  </Typography>

                  <Button
                    fullWidth
                    sx={{ mt: 2 }}
                    variant="contained"
                    onClick={() =>
                      navigate(`/buyview/${property._id}`, {
                        state: property,
                      })
                    }
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
          <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/buy")}
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
    </Box>
  );
};

export default Propertycard;
