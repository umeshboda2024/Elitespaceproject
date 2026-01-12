import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
  Box,
  Chip,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import { getProperties } from "../Admin/component/Service/Propertyservice";

const RentProperties = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      console.log("Frontend Properties:", res);

      // backend returns { Data: [...] }
      setData(res.Data || []);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={12} mb={6} sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight={800}
          textAlign="center"
          gutterBottom
        >
          Explore Buy Properties
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          mb={6}
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Discover verified properties available for purchase
        </Typography>

        {/* LOADING */}
        {loading && (
          <Typography textAlign="center">Loading properties...</Typography>
        )}

        {/* EMPTY */}
        {!loading && data.length === 0 && (
          <Typography textAlign="center">No properties available</Typography>
        )}

        {/* PROPERTIES */}
        <Grid container spacing={4}>
          {data.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property._id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={
                      property.image || "https://via.placeholder.com/400x250"
                    }
                    alt={property.title}
                  />

                  <Chip
                    label={property.status || "Available"}
                    color="success"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontWeight: 600,
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <CardContent sx={{ flex: 1 }}>
                  <Typography fontSize={13} color="text.secondary">
                    Owner: {property.owner}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                    mt={0.5}
                  >
                    <LocationOnIcon color="error" fontSize="small" />
                    {property.location}
                  </Typography>

                  <Typography color="text.secondary">
                    {property.type}
                  </Typography>

                  <Box display="flex" gap={1} mt={2} flexWrap="wrap">
                    <Chip
                      icon={<SquareFootIcon />}
                      label={`${property.carpetArea} sqft`}
                      size="small"
                    />
                    <Chip
                      label={`Floor: ${property.floor}`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  {/* PRICE */}
                  <Box mt={3}>
                    <Typography variant="h6" fontWeight={900} color="error">
                      ₹{property.price} Lac
                    </Typography>

                    <Typography fontSize={13} color="text.secondary">
                      ₹{property.pricePerSqft} per sqft
                    </Typography>
                  </Box>

                  {/* ACTIONS */}
                  <Box mt={2} display="flex" gap={1} flexWrap="wrap">
                    <Button variant="contained" color="error" size="small">
                      Contact Owner
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      Availability
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RentProperties;
