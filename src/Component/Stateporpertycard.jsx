import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import Ahemdabadimage from "../Assets/images/Ahemdabadstate.jpg";
import Gurugram from "../Assets/images/Gurgamstate.jpg";
import Mumbai from "../Assets/images/Mumbaistate.jpg";
import Pune from "../Assets/images/Punestate.jpg";

const Stateporpertycard = () => {
  const navigate = useNavigate();

  const Stateproperty = [
    { image: Ahemdabadimage, name: "Ahmedabad", Project: "15" },
    { image: Gurugram, name: "Gurugram", Project: "10" },
    { image: Mumbai, name: "Mumbai", Project: "8" },
    { image: Pune, name: "Pune", Project: "2" },
  ];

  const handleClick = (stateName) => {
    navigate(`/buy/${stateName}`);
  };

  return (
    <Box py={{ xs: 3, md: 4 }} mt={{ xs: 3, md: 5 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ fontSize: { xs: 22, sm: 26, md: 32 } }}>
          Featured Properties By State
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          mt={3}
          justifyContent="center"
        >
          {Stateproperty.map((state, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
              textAlign="center"
              sx={{ cursor: "pointer" }}
              onClick={() => handleClick(state.name)}
            >
              <Box
                component="img"
                src={state.image}
                alt={state.name}
                sx={{
                  width: "100%",
                  maxWidth: 260,
                  height: { xs: 220, sm: 240, md: 250 },
                  objectFit: "cover",
                  borderRadius: "50%",
                  mx: "auto",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />

              <Typography
                variant="h6"
                mt={1}
                fontWeight={600}
                sx={{ fontSize: { xs: 16, md: 18 } }}
              >
                {state.name}
              </Typography>

              <Typography
                variant="body1"
                mt={0.5}
                fontWeight={300}
                sx={{ fontSize: { xs: 14, md: 16 } }}
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
