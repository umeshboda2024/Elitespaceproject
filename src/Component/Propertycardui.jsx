import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

import { getProperties } from "../Admin/component/Service/Propertyservice";

const Propertycard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      const properties = res?.Data || [];

      // ✅ NAME + STATE UNIQUE
      const uniqueMap = {};
      properties.forEach((item) => {
        const key = `${item.name}-${item.state}`;
        if (!uniqueMap[key]) {
          uniqueMap[key] = item;
        }
      });

      setData(Object.values(uniqueMap));
    } catch (error) {
      console.error(error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={12} mb={8} sx={{ background: "#f7f9fc", py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={1}>
          Explore Buy Properties
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={6}>
          Premium residential projects handpicked for you
        </Typography>

        {loading && (
          <Typography textAlign="center">Loading properties...</Typography>
        )}

        {!loading && data.length === 0 && (
          <Typography textAlign="center">No properties found</Typography>
        )}

        <Grid container spacing={4}>
          {data.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property._id}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.35s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
                  },
                }}
              >
                {/* IMAGE SECTION */}
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "& img": {
                      transition: "0.5s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.08)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={
                      property.image || "https://via.placeholder.com/400x300"
                    }
                    alt={property.name}
                  />

                  {/* PROPERTY TYPE BADGE */}
                  <Chip
                    label={property.type}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "linear-gradient(135deg, #0f4c5c, #1b6f82)",
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  />

                  {/* HOVER BUTTON */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0,0,0,0.45)",
                      opacity: 0,
                      transition: "0.3s ease",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <Button
                      onClick={() =>
                        navigate(`/buy/${property.id}`, { state: property })
                      }
                      sx={{
                        px: 4,
                        py: 1.3,
                        borderRadius: "30px",
                        backgroundColor: "#fff",
                        color: "#0f4c5c",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        "&:hover": {
                          backgroundColor: "#f1f1f1",
                        },
                      }}
                    >
                      Explore Project
                    </Button>
                  </Box>
                </Box>

                {/* CONTENT */}
                <CardContent>
                  <Stack spacing={1}>
                    <Typography fontSize={13} color="text.secondary">
                      {property.name}
                    </Typography>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <LocationOnIcon fontSize="small" color="primary" />
                      {property.state}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      mt={1}
                    >
                      <Chip
                        icon={<ApartmentIcon />}
                        label={property.type}
                        size="small"
                        variant="outlined"
                      />
                      <Chip
                        icon={<SquareFootIcon />}
                        label={`${property.carpetarea} Sq.Ft`}
                        size="small"
                        variant="outlined"
                      />
                    </Stack>

                    <Typography
                      mt={2}
                      fontSize={18}
                      fontWeight={800}
                      color="#0f4c5c"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <CurrencyRupeeIcon fontSize="small" />
                      {property.price} Lac
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Propertycard;
