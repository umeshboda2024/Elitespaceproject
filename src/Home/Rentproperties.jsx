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

const RentProperties = (props) => {
  const { city, propertyType: paramType } = useParams();
  const finalType = props?.propertyType || paramType;
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, [city, finalType]);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      let properties = res?.Data || res?.data || [];

      // ✅ ONLY RENT PROPERTIES (ADMIN STATUS)
      properties = properties.filter((i) => i.status?.toLowerCase() === "rent");

    if (city) {
  properties = properties.filter(
    (i) => i.city?.toLowerCase().trim() === city.toLowerCase().trim()
  );
}
      if (finalType) {
        properties = properties.filter((i) => {
          const apiType =
            typeof i.propertytype === "object"
              ? i.propertytype.typename
              : i.propertytype;

          return (
            apiType
              ?.toLowerCase()
              .replace(/\s+/g, "")
              .replace("appartment", "apartment") ===
            finalType
              .toLowerCase()
              .replace(/\s+/g, "")
              .replace("appartment", "apartment")
          );
        });
      }

      setData(properties);
    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data.filter((item) =>
    item.propertyname?.toLowerCase().includes(search.toLowerCase()),
  );

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
            Rent {finalType || "Properties"} {city && `in ${city}`}
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Only Available • Verified Rent Properties
          </Typography>
        </Box>

        {/* SEARCH */}
        <Box display="flex" justifyContent="center" mb={5}>
          <TextField
            label="Search property name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: 400,
              background: "#fff",
              borderRadius: 3,
            }}
          />
        </Box>

        {loading && <Typography textAlign="center">Loading...</Typography>}
        {!loading && filteredData.length === 0 && (
          <Typography textAlign="center">No rent properties found</Typography>
        )}

        <Grid container spacing={4}>
          {filteredData.slice(0, 12).map((property) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={property._id}>
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
                  label="Rent"
                  color="warning"
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
                      label={
                        typeof property.propertytype === "object"
                          ? property.propertytype.typename
                          : property.propertytype
                      }
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
                      ₹{property.price} / Month
                    </Typography>

                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ borderRadius: 3 }}
                      onClick={() =>
                        navigate(`/rentview/${property._id}`, {
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

export default RentProperties;
