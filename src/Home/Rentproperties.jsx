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
  TextField,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { useParams } from "react-router-dom";

import { getProperties } from "../Admin/component/Service/Propertyservice";

const RentProperties = () => {
  const { state, propertyType } = useParams(); // ✅ BOTH PARAMS
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, [state, propertyType]);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      let properties = res.Data || [];

      // ✅ STATE FILTER
      if (state) {
        properties = properties.filter(
          (item) =>
            item.state?.toLowerCase() === state.toLowerCase()
        );
      }

      // ✅ PROPERTY TYPE FILTER (IMPORTANT)
      if (propertyType) {
        properties = properties.filter(
          (item) =>
            item.type?.toLowerCase() ===
            propertyType.toLowerCase()
        );
      }

      setData(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ NAME SEARCH FILTER
  const filteredData = data.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box mt={12} mb={6} sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
      <Container maxWidth="xl">
        {/* TITLE */}
        <Typography variant="h4" fontWeight={800} textAlign="center">
          Rent {propertyType || ""} Properties {state && `in ${state}`}
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          mb={4}
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Discover verified properties available for purchase
        </Typography>

        {/* 🔍 SEARCH */}
        <TextField
          label="Search Property Name"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            maxWidth: 400,
            mx: "auto",
            display: "block",
            mb: 6,
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        />

        {/* LOADING */}
        {loading && (
          <Typography textAlign="center">
            Loading properties...
          </Typography>
        )}

        {/* EMPTY */}
        {!loading && filteredData.length === 0 && (
          <Typography textAlign="center">
            No properties found
          </Typography>
        )}

        {/* PROPERTIES */}
        <Grid container spacing={4}>
          {filteredData.slice(9,18).map((property) => (
            <Grid item size={{xs:12,sm:6,md:4}}  key={property._id}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={
                    property.image ||
                    "https://via.placeholder.com/400x250"
                  }
                />

                <CardContent>
                  <Typography fontSize={13} color="text.secondary">
                    Owner: {property.owner}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                  >
                    <LocationOnIcon color="error" fontSize="small" />
                    {property.state}
                  </Typography>

                  <Typography>{property.name}</Typography>

                  <Box display="flex" gap={1} mt={2} flexWrap="wrap">
                    <Chip
                      icon={<SquareFootIcon />}
                      label={`${property.carpetarea} sqft`}
                      size="small"
                    />
                    <Chip
                      label={`Floor: ${property.floor}`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight={900}
                    color="error"
                    mt={2}
                  >
                    ₹{property.price} Month
                  </Typography>

                  <Box mt={2} display="flex" gap={1}>
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
