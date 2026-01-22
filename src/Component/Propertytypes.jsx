import { Box, Button, Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

import { getPropertyTypes } from "../Admin/component/Service/Propertytype";

const Propertytypes = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getPropertyTypes()
      .then((res) => {
        if (res?.Data) {
          setProperties(res.Data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (type) => {
    navigate(`/properties/${type.toLowerCase().replace(/\s+/g, "")}`);
  };

  return (
    <Box py={{ xs: 3, md: 4 }} mt={{ xs: 3, md: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
          {properties.map((property, index) => (
            <Grid item key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  "&:hover .Imagehover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <CardActionArea onClick={() => handleClick(property.typename)}>
                  <CardMedia
                    component="img"
                    src={property.image}
                    alt={property.typename}
                    className="Imagehover"
                    sx={{
                      width: "100%",
                      height: { xs: 200, sm: 170, md: 140 },
                      transition: "transform 7s ease",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="body1" fontWeight={700}>
                      {property.typename}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}

          {/* View All */}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              onClick={() => navigate("/properties")}
              variant="contained"
              size="large"
              sx={{
                mt: { xs: 3, md: 2 },
                px: { xs: 3, md: 4 },
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#0F4C5C",
                gap: 2,
              }}
            >
              View All Properties <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Propertytypes;
