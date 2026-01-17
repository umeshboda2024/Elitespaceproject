import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
import { getProperties } from "../Admin/component/Service/Propertyservice";

const RentView = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      setLoading(true);
      const res = await getProperties();
      const allData = res?.Data || [];

      const singleData = allData.find(
        (item) => item.id?.toString() === id?.toString()
      );

      setProperty(singleData || null);
    } catch (error) {
      console.error("Error loading property:", error);
      setProperty(null);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Loading
  if (loading) {
    return (
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  // 🔹 Not found
  if (!property) {
    return (
      <Typography mt={10} textAlign="center" color="error">
        Property not found
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={property.image || "https://via.placeholder.com/600x400"}
            alt={property.name}
            sx={{
              width: "100%",
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">
            {property.name}
          </Typography>

          <Typography color="text.secondary" mt={1}>
            {property.state}
          </Typography>

          <Typography mt={2} fontSize={18} fontWeight={600}>
            ₹ {property.price} / month
          </Typography>

          <Typography mt={1}>{property.flate}</Typography>

          <Typography mt={2} color="text.secondary">
            Area: {property.area}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RentView;
