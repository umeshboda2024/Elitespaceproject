import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";

const StatusSection = () => {
  const stats = [
    { value: "1000+", label: "Properties Listed" },
    { value: "5000+", label: "Happy Customers" },
    { value: "20+", label: "Cities Covered" },
    { value: "100%", label: "Verified Listings" },
  ];

  return (
    <Box
      py={{ xs: 4, md: 6 }}
      bgcolor="#f7f9fcff"
      mt={{ xs: 6, md: 10 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {stats.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}  // full width on extra-small screens
              sm={6}   // 2 per row on small screens
              md={3}   // 4 per row on medium and larger screens
            >
              <Box
                textAlign="center"
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: 1,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  color="primary"
                  sx={{ fontSize: { xs: 24, sm: 28, md: 34 } }}
                >
                  {item.value}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: 14, md: 16 } }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatusSection;
