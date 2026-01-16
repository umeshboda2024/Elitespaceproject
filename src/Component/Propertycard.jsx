import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { getProperties } from "../Admin/component/Service/Propertyservice";
import PropertyCard from "../Component/Propertycardui";

const PropertyList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      setData(res.Data || []);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Typography textAlign="center" mt={10}>
        Loading properties...
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Grid container spacing={4}>
        {data.slice(0, 9).map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <PropertyCard item={item} />
          </Grid>
        ))}
      </Grid>

      {/* VIEW ALL */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/buy")}
          sx={{
            px: 5,
            borderRadius: 2,
            fontWeight: "bold",
            backgroundColor: "#0F4C5C",
            "&:hover": {
              backgroundColor: "#093944",
              transform: "translateY(-2px)",
            },
          }}
        >
          View All Properties <ArrowForwardIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default PropertyList;
