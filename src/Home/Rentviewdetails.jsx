import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  Divider,
  Stack,
  Chip,
  CircularProgress,
  Button,
  Dialog,
  TextField,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import BedIcon from "@mui/icons-material/Bed";
import WeekendIcon from "@mui/icons-material/Weekend";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import { getPropertyById } from "../Admin/component/Service/Propertyservice";

const RentView = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [openVisit, setOpenVisit] = useState(false);

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
      setProperty(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Box mt={10} textAlign="center">
        <CircularProgress />
      </Box>
    );

  if (!property)
    return (
      <Typography mt={10} textAlign="center" color="error">
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
    <Container maxWidth="xl" sx={{ mt: 5, mb: 8 }}>
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
        <Grid item xs={12} md={8}>
          {/* IMAGE */}
          <Box
            component="img"
            src={mainImage}
            sx={{
              width: "100%",
              height: 420,
              borderRadius: 3,
              objectFit: "cover",
            }}
          />

          {/* THUMBS */}
          <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
            {images.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                onClick={() => setMainImage(img)}
                sx={{
                  width: 80,
                  height: 60,
                  borderRadius: 2,
                  cursor: "pointer",
                  border:
                    mainImage === img ? "2px solid #1976d2" : "1px solid #ccc",
                }}
              />
            ))}
          </Stack>

          {/* HIGHLIGHTS */}
          <Card sx={{ mt: 3, p: 2 }}>
            <Grid container textAlign="center">
              <Grid item xs={3}>
                <BedIcon /> {property.bedroom}
              </Grid>
              <Grid item xs={3}>
                <WeekendIcon /> {property.hall}
              </Grid>
              <Grid item xs={3}>
                <KitchenIcon /> {property.kitchen}
              </Grid>
              <Grid item xs={3}>
                Floor {property.floor}
              </Grid>
            </Grid>
          </Card>

          {/* ALL DETAILS */}
          <Card sx={{ mt: 3, p: 3 }}>
            <Typography fontWeight={700} mb={2}>
              Property Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Type: {property.propertytype}</Typography>
                <Typography mt={1}>BHK: {property.bhk}</Typography>
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
                <Typography>Owner Name: {property.ownername}</Typography>
                <Typography mt={1}>Owner Type: {property.ownertype}</Typography>
                <Typography mt={1}>
                  Mobile: {property.ownermobilenumber}
                </Typography>
                <Typography mt={1}>Status: {property.status}</Typography>
              </Grid>
            </Grid>
          </Card>

          {/* RENT DETAILS */}
          <Card sx={{ mt: 3, p: 3 }}>
            <Typography fontWeight={700} mb={2}>
              Rent Details
            </Typography>
            <Typography>Rent: ₹{property.price} / month</Typography>
            <Typography mt={1}>
              Security Deposit: ₹{property.securitydeposit}
            </Typography>
            <Typography mt={1}>
              Maintenance: ₹{property.maintainance}
            </Typography>
          </Card>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, position: "sticky", top: 100 }}>
            <Typography variant="h5" fontWeight={800} color="error">
              ₹{property.price} / Month
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={1}>
              <Chip label={`${property.bhk} BHK`} />
              <Chip label={property.city} />
              <Chip label={property.status} color="info" />
            </Stack>

            <Button
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
              startIcon={<PhoneIcon />}
            >
              Call Owner
            </Button>

            <Button
              fullWidth
              sx={{ mt: 1 }}
              variant="outlined"
              onClick={() => setOpenVisit(true)}
            >
              Schedule Visit
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* SCHEDULE VISIT MODAL */}
      <Dialog open={openVisit} onClose={() => setOpenVisit(false)}>
        <Box p={3} width={350}>
          <Typography fontWeight={700}>Schedule Visit</Typography>
          <TextField fullWidth label="Name" sx={{ mt: 2 }} />
          <TextField fullWidth label="Phone" sx={{ mt: 2 }} />
          <TextField fullWidth type="date" sx={{ mt: 2 }} />
          <Button fullWidth variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Dialog>
    </Container>
  );
};

export default RentView;
