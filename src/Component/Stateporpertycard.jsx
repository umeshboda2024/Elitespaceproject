import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import Ahemdabadimage from "../Assets/images/Ahemdabadstate.jpg";
import Gurugram from "../Assets/images/Gurgamstate.jpg";
import Mumbai from "../Assets/images/Mumbaistate.jpg";
import Pune from "../Assets/images/Punestate.jpg";

const Stateporpertycard = () => {
  const navigate = useNavigate();

  const Stateproperty = [
    { image: Ahemdabadimage, name: "Ahemdabad", Project: "15" },
    { image: Gurugram, name: "Gurugam", Project: "10" },
    { image: Mumbai, name: "Mumbai", Project: "8" },
    { image: Pune, name: "Pune", Project: "2" },
  ];

  const handleBuy = (state) => {
    navigate(`/buy/${state}`);
  };

  const handleRent = (state) => {
    navigate(`/Rent/${state}`);
  };

  return (
    <Box py={{ xs: 3, md: 5 }} mt={{ xs: 3, md: 6 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ fontSize: { xs: 22, sm: 26, md: 32 } }}
        >
          Featured Properties By State
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          mt={3}
          justifyContent="center"
        >
          {Stateproperty.map((state, index) => (
            <Grid
              item
              key={index}
              size={{xs:12,
              sm:6
              ,md:3}}
              
              textAlign="center"
            >
              {/* IMAGE WITH HOVER OVERLAY */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 260,
                  height: { xs: 220, sm: 240, md: 250 },
                  mx: "auto",
                  borderRadius: "50%",
                  overflow: "hidden",
                  cursor: "pointer",

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
                  src={state.image}
                  alt={state.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.4s ease",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.5,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
                    opacity: 0,
                    transition: "0.4s ease",
                  }}
                >
                  <Button
                    size="large"
                    onClick={() => handleBuy(state.name)}
                    sx={{
                      px: 3,
                      py: 1,
                      fontSize: 14,
                      fontWeight: 600,
                      borderRadius: "25px",
                      textTransform: "none",
                      color: "#fff",
                      background:
                        "linear-gradient(135deg, #1976d2, #42a5f5)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #1565c0, #1e88e5)",
                      },
                    }}
                  >
                    Buy Property
                  </Button>

                  <Button
                    size="large"
                    variant="outlined"
                    onClick={() => handleRent(state.name)}
                    sx={{
                      px: 3,
                      py: 1,
                      fontSize: 14,
                      fontWeight: 600,
                      borderRadius: "25px",
                      textTransform: "none",
                      borderColor: "#fff",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.15)",
                        borderColor: "#90caf9",
                      },
                    }}
                  >
                    Rent Property
                  </Button>
                </Box>
              </Box>

              {/* STATE NAME */}
              <Typography
                mt={2}
                fontWeight={700}
                sx={{ fontSize: { xs: 18, md: 20 } }}
              >
                {state.name}
              </Typography>

              {/* PROJECT COUNT */}
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  color: "text.secondary",
                }}
              >
                {state.Project} Projects
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stateporpertycard;
