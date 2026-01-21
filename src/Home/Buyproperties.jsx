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
  Stack,
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import WeekendIcon from "@mui/icons-material/Weekend";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VerifiedIcon from "@mui/icons-material/Verified";
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
      let properties = res?.Data || res?.data || [];

      // ✅ Only available
      properties = properties.filter(
        (i) => i.status?.toLowerCase() === "available",
      );

      // ✅ Filter by state
      if (state) {
        properties = properties.filter(
          (i) => i.state?.toLowerCase() === state.toLowerCase(),
        );
      }

      // ✅ Filter by property type
      if (propertyType) {
        properties = properties.filter(
          (i) => i.propertytype?.toLowerCase() === propertyType.toLowerCase(),
        );
      }

      setData(properties);
    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 CITY WISE SEARCH
  const filteredData = data.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.propertyname?.toLowerCase().includes(q) ||
      item.city?.toLowerCase().includes(q) ||
      item.state?.toLowerCase().includes(q) ||
      item.address?.toLowerCase().includes(q)
    );
  });

  const getImage = (property) => {
    if (!property.image || property.image.length === 0)
      return "https://via.placeholder.com/400x300";

    const img = property.image[0];
    if (img.startsWith("http")) return img;
    return `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Box mt={12} py={6} sx={{ background: "#f4f6fb" }}>
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight={800}>
            Buy {propertyType || "Properties"} {state && `in ${state}`}
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Only Available • Verified Properties
          </Typography>
        </Box>

        {/* SEARCH */}
        <Box display="flex" justifyContent="center" mb={5}>
          <TextField
            label="Search by city, state, address, property name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: 420,
              background: "#fff",
              borderRadius: 3,
            }}
          />
        </Box>

        {loading && <Typography textAlign="center">Loading...</Typography>}
        {!loading && filteredData.length === 0 && (
          <Typography textAlign="center">
            No available properties found
          </Typography>
        )}

        <Grid container spacing={4}>
          {filteredData.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property._id}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "0.3s",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                  "&:hover .zoom-img": {
                    transform: "scale(1.18)",
                  },
                }}
              >
                {/* IMAGE */}
                <Box sx={{ overflow: "hidden", height: 230 }}>
                  <CardMedia
                    component="img"
                    height="230"
                    image={getImage(property)}
                    className="zoom-img"
                    sx={{ transition: "0.6s ease" }}
                  />
                </Box>

                {/* STATUS */}
                <Chip
                  icon={<VerifiedIcon />}
                  label="Available"
                  color="success"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    fontWeight: 700,
                  }}
                />

                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {property.propertyname}
                  </Typography>

                  <Typography
                    fontSize={13}
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                    gap={0.5}
                    mt={0.5}
                  >
                    <LocationOnIcon fontSize="small" color="error" />
                    {property.address}, {property.city}, {property.state}
                  </Typography>

                  <Divider sx={{ my: 1.5 }} />

                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip
                      icon={<ApartmentIcon />}
                      label={property.propertytype}
                      size="small"
                    />
                    <Chip
                      label={`${property.bhk} BHK`}
                      size="small"
                      color="primary"
                    />
                    <Chip
                      icon={<SquareFootIcon />}
                      label={`${property.carpetarea} sqft`}
                      size="small"
                    />
                    <Chip label={`Floor ${property.floor}`} size="small" />
                  </Stack>

                  <Stack direction="row" spacing={1} mt={1}>
                    <Chip
                      icon={<BedIcon />}
                      label={property.bedroom}
                      size="small"
                    />
                    <Chip
                      icon={<WeekendIcon />}
                      label={property.hall}
                      size="small"
                    />
                    <Chip
                      icon={<KitchenIcon />}
                      label={property.kitchen}
                      size="small"
                    />
                  </Stack>

                  <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" fontWeight={900} color="error">
                      ₹{property.price} Lac
                    </Typography>

                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ borderRadius: 3 }}
                      onClick={() =>
                        navigate(`/buyview/${property._id}`, {
                          state: property,
                        })
                      }
                    >
                      View
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
