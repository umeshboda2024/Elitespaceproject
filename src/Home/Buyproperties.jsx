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
import { useParams, useNavigate } from "react-router-dom";

import { getProperties } from "../Admin/component/Service/Propertyservice";

const BuyProperties = () => {
  const { state, propertyType } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, [state, propertyType]);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();

      // ✅ SAME AS Propertycard
      let properties = res?.Data || res?.data || [];

      // FILTER BY STATE
      if (state) {
        properties = properties.filter(
          (item) => item.state?.toLowerCase() === state.toLowerCase()
        );
      }

      // FILTER BY TYPE
      if (propertyType) {
        properties = properties.filter(
          (item) =>
            item.propertytype?.toLowerCase() === propertyType.toLowerCase()
        );
      }

      setData(properties);
    } catch (error) {
      console.error(error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 SEARCH
  const filteredData = data.filter((item) =>
    item.propertyname?.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ IMAGE LOGIC (SAME AS Propertycard)
  const getImage = (property) => {
    if (!property.image || property.image.length === 0) {
      return "https://via.placeholder.com/400x300";
    }

    const img = property.image[0];
    if (img.startsWith("http")) return img;

    return `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Box mt={12} mb={6} sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight={800} textAlign="center">
          Buy {propertyType || "All"} Properties {state && `in ${state}`}
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={4}>
          Discover verified properties available for purchase
        </Typography>

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

        {loading && (
          <Typography textAlign="center">Loading properties...</Typography>
        )}

        {!loading && filteredData.length === 0 && (
          <Typography textAlign="center">No properties found</Typography>
        )}

        <Grid container spacing={4}>
          {filteredData. slice(0,10).map((property) => (
            <Grid item size={{xs:12,sm:6,md:4}}key={property._id}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={getImage(property)} // 🔥 SAME IMAGE LOGIC
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

                  <Typography>{property.propertyname}</Typography>

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
                    ₹{property.price} Lac
                  </Typography>

                  <Box mt={2} display="flex" gap={1}>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() =>
                        navigate(`/buyview/${property._id}`, {
                          state: property,
                        })
                      }
                    >
                      View Details
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

export default BuyProperties;
