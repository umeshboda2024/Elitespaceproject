import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Divider,
  Chip,
  Stack,
  Skeleton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getAgents } from "../Admin/component/Service/Agentservice";

export const Agentcard = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getAgents()
    .then((data) => {
      console.log("AGENTS DATA 👉", data);
      setAgents(data); // ✅ NO FILTER
    })
      .finally(() => setLoading(false));
  }, []);

const getAgentImage = (agent) => {
  if (!agent.photo || agent.photo.length === 0)
    return "https://via.placeholder.com/150";

  const img = agent.photo[0]; // first image

  return img.startsWith("http")
    ? img
    : `https://generateapi.techsnack.online/uploads/${img}`;
};
  
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Section Title */}
      <Typography
        align="center"
        sx={{
          fontSize: { xs: 24, md: 36 },
          fontWeight: 800,
          mb: 6,
          letterSpacing: "1px",
          background:
            "linear-gradient(90deg,#2563eb,#9333ea,#ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Top Agents
      </Typography>

      <Grid container spacing={4}>
        {/* Skeleton */}
        {loading &&
          Array.from(new Array(6)).map((_, i) => (
            <Grid item size={{xs:12,sm:6,md:4,lg:3}}  key={i}>
              <Skeleton
                variant="rounded"
                height={340}
                sx={{ borderRadius: 4 }}
              />
            </Grid>
          ))}

        {!loading &&
          agents.map((item) => {
            return (
              <Grid item size={{xs:12,sm:6,md:4}}  key={item._id}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    backdropFilter: "blur(12px)",
                    background:
                      "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.7))",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0 35px 70px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Header */}
                    <Stack direction="row" spacing={2}>
                      <CardMedia
                        component="img"
                        image={getAgentImage(item)}
                        alt={item.name}
                        sx={{
                          width: 86,
                          height: 86,
                          borderRadius: "50%",
                          border: "3px solid #fff",
                          objectFit: "cover",
                        }}
                      />

                      <Box>
                        <Chip
                          size="small"
                          label={item.badge || "MB Preferred"}
                          sx={{
                            mb: 0.5,
                            color: "#fff",
                            fontWeight: 700,
                            background:
                              "linear-gradient(135deg,#22c55e,#16a34a)",
                          }}
                        />

                        <Typography fontWeight={700}>
                          {item.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.designation}
                        </Typography>

                        {/* Rating */}
                        <Stack direction="row" spacing={0.5}>
                          <StarIcon sx={{ fontSize: 16, color: "#facc15" }} />
                          <Typography fontWeight={600}>
                            {item.rating}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                          >
                            ({item.reviews_count})
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    {/* Stats */}
                    <Grid container textAlign="center">
                      <Grid item size={{xs:6}} >
                        <Typography fontWeight={800}>
                          {item.properties_sale}
                        </Typography>
                        <Typography variant="body2">
                          For Sale
                        </Typography>
                      </Grid>
                      <Grid item size={{xs:6}}>
                        <Typography fontWeight={800}>
                          {item.properties_rent}
                        </Typography>
                        <Typography variant="body2">
                          For Rent
                        </Typography>
                      </Grid>
                   
                    </Grid>

                  
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
