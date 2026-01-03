import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import Agentimage from "../Assets/images/Agentimage.jpg";

export const Agentcard = () => {
  const agent = [
    {
      image: Agentimage,
      name: "Ankur Singh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "16",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Ashok Yadav",
      saleCount: "6",
      saleText: "Properties for sale",
      rentCount: "38",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Rahul",
      saleCount: "18",
      saleText: "Properties for sale",
      rentCount: "54",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Kamal Bhattar",
      saleCount: "37",
      saleText: "Properties for sale",
      rentCount: "34",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Amit Chaudhary ",
      saleCount: "32",
      saleText: "Properties for sale",
      rentCount: "18",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Desai Rakesh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "14",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Desai Rakesh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "14",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Desai Rakesh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "14",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Desai Rakesh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "14",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage,
      name: "Desai Rakesh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "14",
      rentText: "Properties for rent",
    },
  ];

  return (
    <Container sx={{ py: 5, mt: 5 }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={5}>
        Top Real Estate Agents List
      </Typography>
      <Grid container spacing={4}>
        {agent.map((item, index) => (
          <Grid item key={index} size={4} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ p: 2 }}>
              {/* Agent Info */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                <Box>
                  <Typography variant="caption" color="success.main">
                    MB Preferred
                  </Typography>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Real Estate Agent
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Property Stats */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box textAlign="center">
                  <Typography variant="h6" fontWeight={700}>
                    {item.saleCount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.saleText}
                  </Typography>
                </Box>

                <Box textAlign="center">
                  <Typography variant="h6" fontWeight={700}>
                    {item.rentCount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.rentText}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
