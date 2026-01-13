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
import Agentimage1 from "../Assets/images/Agentimage1.jpg";
import Agentimage2 from "../Assets/images/Agentimage2.jpg";
import Agentimage3 from "../Assets/images/Agentimage3.jpg";
import Agentimage4 from "../Assets/images/Agentimage4.jpg";
import Agentimage5 from "../Assets/images/Agentimage5.jpg";

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
      image: Agentimage1,
      name: "Ashok Yadav",
      saleCount: "6",
      saleText: "Properties for sale",
      rentCount: "38",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage2,
      name: "Rahul",
      saleCount: "18",
      saleText: "Properties for sale",
      rentCount: "54",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage3,
      name: "Kamal Bhattar",
      saleCount: "37",
      saleText: "Properties for sale",
      rentCount: "34",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage4,
      name: "Amit Chaudhary",
      saleCount: "32",
      saleText: "Properties for sale",
      rentCount: "18",
      rentText: "Properties for rent",
    },
    {
      image: Agentimage5,
      name: "Desai Rakesh",
      saleCount: "39",
      saleText: "Properties for sale",
      rentCount: "14",
      rentText: "Properties for rent",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ py: { xs: 4, md: 6 }, mt: { xs: 4, md: 6 } }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          letterSpacing: "0.5px",
          mb: { xs: 3, md: 5 },
          fontSize: { xs: 22, sm: 26, md: 32 },
        }}
      >
        Top Real Estate Agents
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {agent.map((item, index) => (
          <Grid item key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                p: 2,
                height: "100%",
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 55px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Agent Info */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      width: { xs: 70, md: 80 },
                      height: { xs: 70, md: 80 },
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #fff",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.18)",
                    }}
                  />

                  <Box>
                    {/* Elite Badge */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: "inline-block",
                        px: 1.5,
                        py: 0.5,
                        mb: 0.5,
                        borderRadius: 2,
                        background: "linear-gradient(135deg, #2ecc71, #27ae60)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: { xs: 12, md: 13 },
                      }}
                    >
                      MB Preferred
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: 16, md: 18 },
                        fontWeight: 600,
                        letterSpacing: "0.3px",
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: 14, md: 15 },
                      }}
                    >
                      Real Estate Agent
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2, opacity: 0.6 }} />

                {/* Property Stats */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 18 },
                      }}
                    >
                      {item.saleCount}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: 13, md: 14 },
                      }}
                    >
                      {item.saleText}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 18 },
                      }}
                    >
                      {item.rentCount}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: 13, md: 14 },
                      }}
                    >
                      {item.rentText}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
