import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import { getCityProperties } from "../Admin/component/Service/Statewisepropertyservice";

const Stateporpertycard = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const res = await getCityProperties();
      setStates(res?.Data || []);
    } catch (err) {
      console.error("API Error", err);
    }
  };

  const handleBuy = (city) => {
    navigate(`/buy/${city}`);
  };

  const handleRent = (city) => {
    navigate(`/rent/${city}`);
  };

  const getImage = (item) => {
    if (!item.image) return "https://via.placeholder.com/300";
    const img = Array.isArray(item.image) ? item.image[0] : item.image;
    return img.startsWith("http")
      ? img
      : `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Box py={{ xs: 4, md: 6 }} mt={6}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight={800}
          textAlign="center"
          mb={5}
          sx={{ fontSize: { xs: 22, sm: 28, md: 34 } }}
        >
          Explore Properties By City
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {states.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item._id || index}
              textAlign="center"
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 5,
                  overflow: "hidden",
                  height: 300,
                  cursor: "pointer",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={getImage(item)}
                  alt={item.city}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.6s",
                    "&:hover": {
                      transform: "scale(1.15)",
                    },
                  }}
                />

                {/* GLASS OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 2,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.75))",
                  }}
                >
                  <Box
                    sx={{
                      backdropFilter: "blur(6px)",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: 3,
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={800}
                      color="#fff"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <LocationCityIcon />
                      {item.city}
                    </Typography>

                    <Typography fontSize={13} color="rgba(255,255,255,0.8)">
                      {item.project || 0} Properties
                    </Typography>

                    <Box mt={2} display="flex" gap={1}>
                      <Button
                        fullWidth
                        size="small"
                        onClick={() => handleBuy(item.city)}
                        sx={{
                          color: "#fff",
                          borderRadius: 3,
                          fontWeight: 600,
                          background:
                            "linear-gradient(135deg, #1976d2, #42a5f5)",
                        }}
                      >
                        Buy
                      </Button>

                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        onClick={() => handleRent(item.city)}
                        sx={{
                          borderColor: "#fff",
                          color: "#fff",
                          borderRadius: 3,
                          fontWeight: 600,
                        }}
                      >
                        Rent
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stateporpertycard;
