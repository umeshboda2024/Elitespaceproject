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
    <Box py={4} mt={5}>
      <Container>
        <Typography variant="h4">Featured Properties By State</Typography>
        <Grid container spacing={5} mt={3}>
          {Stateproperty.map((state, index) => (
            <Grid item size={3} xs={12} sm={6} md={4} key={index}>
              <Box
                component="img"
                src={state.image}
                alt={state.name}
                sx={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />

              <Typography variant="h6" align="center" mt={1} fontWeight={600}>
                {state.name}
              </Typography>
              <Typography variant="h6" align="center" mt={1} fontWeight={300}>
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
