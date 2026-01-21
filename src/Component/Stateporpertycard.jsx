import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      console.error(err);
    }
  };

  const handleBuy = (city) => navigate(`/buy/${city}`);
  const handleRent = (city) => navigate(`/rent/${city}`);

  const getImage = (item) => {
    if (!item.image) return "https://via.placeholder.com/300";
    const img = Array.isArray(item.image) ? item.image[0] : item.image;
    return img.startsWith("http")
      ? img
      : `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={5}>
          Explore Properties By City
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {states.map((item, index) => (
            <Grid item size={{xs:12,sm:6,md:3}}  key={item._id || index}>
              {/* CIRCLE CARD */}
              <Box textAlign="center">
                <Box
                  sx={{
                    position: "relative",
                    width: 350,
                    height: 350,
                    mx: "auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "0.4s",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                    "&:hover .overlay": {
                      opacity: 1,
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
                      transition: "0.4s",
                    }}
                  />

                  {/* HOVER OVERLAY */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1.5,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
                      opacity: 0,
                      transition: "0.4s",
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() => handleBuy(item.city)}
                      sx={{
                        px: 3,
                        borderRadius: 3,
                        color: "#fff",
                        fontWeight: 600,
                        background:
                          "linear-gradient(135deg, #1976d2, #42a5f5)",
                      }}
                    >
                      Buy
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleRent(item.city)}
                      sx={{
                        px: 3,
                        borderRadius: 3,
                        color: "#fff",
                        borderColor: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      Rent
                    </Button>
                  </Box>
                </Box>

                {/* TEXT BELOW IMAGE */}
                <Typography mt={2} fontWeight={700} fontSize={18}>
                  {item.city}
                </Typography>

                <Typography fontSize={14} color="text.secondary">
                  {item.project || 0} Properties
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stateporpertycard;
