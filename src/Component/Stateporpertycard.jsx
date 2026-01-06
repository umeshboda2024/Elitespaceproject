import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Ahemdabadimage from "../Assets/images/Ahemdabadstate.jpg";
import Gurugram from "../Assets/images/Gurgamstate.jpg";
import Mumbai from "../Assets/images/Mumbaistate.jpg";
import Pune from "../Assets/images/Punestate.jpg";

const Stateporpertycard = () => {
  const Stateproperty = [
    { image: Ahemdabadimage, name: "Ahmedabad", Project: "15" },
    { image: Gurugram, name: "Gururgram", Project: "10" },
    { image: Mumbai, name: "Mumbai", Project: "8" },
    { image: Pune, name: "Pune", Project: "2" },
  ];

  return (
    <Box py={{ xs: 3, md: 4 }} mt={{ xs: 3, md: 5 }}>
      <Container maxWidth="lg">
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
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              textAlign="center"
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
