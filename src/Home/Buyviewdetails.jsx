import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  Divider,
  Chip,
  Stack,
  CircularProgress,
  Button,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";

import { getPropertyById } from "../Admin/component/Service/Propertyservice";
import { useNavigate } from "react-router-dom";


const BuyView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const res = await getPropertyById(id);
      const data = res?.Data || res?.data;

      setProperty(data);

      if (data?.image?.length > 0) {
        setMainImage(
          data.image[0].startsWith("http")
            ? data.image[0]
            : `https://generateapi.techsnack.online/uploads/${data.image[0]}`,
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Box textAlign="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  if (!property)
    return (
      <Typography textAlign="center" mt={10}>
        Property not found
      </Typography>
    );

  const images =
    property.image?.map((img) =>
      img.startsWith("http")
        ? img
        : `https://generateapi.techsnack.online/uploads/${img}`,
    ) || [];

  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
      {/* TITLE */}
      <Typography variant="h4" fontWeight={800}>
        {property.propertyname}
      </Typography>

      <Typography color="text.secondary" mb={2}>
        <LocationOnIcon fontSize="small" /> {property.address}, {property.city},{" "}
        {property.state}
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT */}
        <Grid item size={{xs:12,md:8}} >
          {/* IMAGE GALLERY */}
          <Box>
            <Box
              component="img"
              src={mainImage}
              sx={{
                width: "100%",
                height: 420,
                objectFit: "cover",
                borderRadius: 3,
              }}
            />

            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
              {images.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  onClick={() => setMainImage(img)}
                  sx={{
                    width: 90,
                    height: 70,
                    borderRadius: 2,
                    cursor: "pointer",
                    border:
                      mainImage === img
                        ? "2px solid #1976d2"
                        : "1px solid #ccc",
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* HIGHLIGHTS */}
          <Card sx={{ mt: 3, p: 2 }}>
            <Grid container textAlign="center">
              <Grid item size={{xs:3}} >
                🛏 {property.bedroom} Beds
              </Grid>
              <Grid item size={{xs:3}}>
                🛋 {property.hall} Hall
              </Grid>
              <Grid item size={{xs:3}}>
                🍳 {property.kitchen} Kitchen
              </Grid>
              <Grid itemsize={{xs:3}}>
                🏢 Floor {property.floor}
              </Grid>
            </Grid>
          </Card>

          {/* PROPERTY DETAILS */}
          <Card sx={{ mt: 3, p: 3 }}>
            <Typography fontWeight={700} mb={2}>
              Property Details
            </Typography>

            <Grid container spacing={2}>
              <Grid item size ={{xs:6}} >
                <Typography>
                  <ApartmentIcon fontSize="small" /> Type:{" "}
                  {property.propertytype}
                </Typography>
                <Typography mt={1}>
                  <HomeIcon fontSize="small" /> BHK: {property.bhk}
                </Typography>
                <Typography mt={1}>
                  <SquareFootIcon fontSize="small" /> Carpet Area:{" "}
                  {property.carpetarea} sqft
                </Typography>
                <Typography mt={1}>
                  Built-up Area: {property.builtuparea}
                </Typography>
                <Typography mt={1}>
                  Price / Sqft: ₹{property.pricepersqft}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>Owner Type: {property.ownertype}</Typography>
                <Typography mt={1}>Owner Name: {property.ownername}</Typography>
                <Typography mt={1}>
                  Mobile: {property.ownermobilenumber}
                </Typography>
                <Typography mt={1}>Status: {property.status}</Typography>
              </Grid>
            </Grid>
          </Card>

          {/* RENT DETAILS */}
          {property.status?.toLowerCase() === "rent" && (
            <Card sx={{ mt: 3, p: 3 }}>
              <Typography fontWeight={700} mb={2}>
                Rent Details
              </Typography>
              <Typography>
                Security Deposit: ₹{property.securitydeposit}
              </Typography>
              <Typography mt={1}>
                Maintenance: ₹{property.maintainance}
              </Typography>
            </Card>
          )}
        </Grid>

        {/* RIGHT */}
        <Grid item size={{xs:12,md:4}} >
          <Card
            sx={{
              p: 3,
              position: "sticky",
              top: 100,
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" fontWeight={800} color="error">
              ₹{property.price} Lac
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={1}>
              <Chip label={`${property.bhk} BHK`} />
              <Chip label={`${property.carpetarea} Sqft`} />
              <Chip label={property.status} color="success" />
            </Stack>

            <Button
              variant="contained"
              color="error"
              sx={{ mt: 3, py: 1.2, fontWeight: 700 }}
              fullWidth
              startIcon={<PhoneIcon />}
            >
              Get Owner Phone
            </Button>
            <Button
  variant="contained"
  color="success"
  sx={{ mt: 2, py: 1.2, fontWeight: 700 }}
  fullWidth
  onClick={() => navigate(`/checkout/${property._id}`)}
>
  Book Now (Pay Token)
</Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BuyView;
