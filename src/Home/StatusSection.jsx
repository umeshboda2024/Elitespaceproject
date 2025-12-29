import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const StatusSection = () => {
  const stats = [
    { value: "1000+", label: "Properties Listed" },
    { value: "5000+", label: "Happy Customers" },
    { value: "20+", label: "Cities Covered" },
    { value: "100%", label: "Verified Listings" },
  ];

  return (
    <Box py={6} bgcolor="#f7f9fcff" mt={10} alignItems={"center"}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((item, index) => (
            <Grid item size={3} xs={12} sm={6} md={3} key={index}>
              <Box
                textAlign="center"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: 1,
                }}
              >
                <Typography variant="h4" fontWeight={700} color="primary">
                  {item.value}
                </Typography>
                <Typography color="text.secondary">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatusSection;
