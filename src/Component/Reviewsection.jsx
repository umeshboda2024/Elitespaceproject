import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const reviews = [
  {
    name: "Rahul Mehta",
    city: "Ahmedabad",
    rating: 5,
    review:
      "Elite Space made my home-buying journey smooth and stress-free. Their property options and agent support were excellent.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    review:
      "I found my perfect 2 BHK flat within a week. The team is professional, transparent, and very responsive.",
  },
  {
    name: "Amit Verma",
    city: "Gurugram",
    rating: 4,
    review:
      "Great platform for both buying and renting properties. Easy search filters and genuine listings.",
  },
];

export default function ReviewSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          align="center"
          fontWeight={700}
          letterSpacing={2}
          mb={8}
          sx={{ fontSize: 26 }}
        >
          ALUMNI SPEAK
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Left Arrow */}
          <IconButton sx={{ position: "absolute", left: -40 }}>
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Cards */}
          <Box sx={{ display: "flex", gap: 5 }}>
            {reviews.map((item, index) => {
              const active = index === 1;

              return (
                <Card
                  key={index}
                  sx={{
                    width: 360,
                    height: 360,
                    borderRadius: 4,
                    textAlign: "center",
                    position: "relative",
                    opacity: active ? 1 : 0.25,
                    transform: active ? "scale(1)" : "scale(0.88)",
                    transition: "all 0.4s ease",
                    boxShadow: active
                      ? "0px 30px 60px rgba(0,0,0,0.15)"
                      : "none",
                  }}
                >
                  {/* Avatar */}
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "#fbc02d",
                      fontSize: 32,
                      fontWeight: 700,
                      position: "absolute",
                      top: -40,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {item.name[0]}
                  </Avatar>

                  <CardContent sx={{ pt: 7 }}>
                    {/* Name */}
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 3,
                        py: 0.7,
                        mb: 2,
                        borderRadius: 20,
                        backgroundColor: "#fbc02d",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {item.name}
                    </Box>

                    {/* City */}
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#777",
                        mb: 2,
                      }}
                    >
                      {item.city}
                    </Typography>

                    {/* Review */}
                    <Typography
                      sx={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "#555",
                        px: 2,
                        mb: 3,
                      }}
                    >
                      {item.review}
                    </Typography>

                    {/* Rating */}
                    <Rating
                      value={item.rating}
                      readOnly
                      sx={{
                        color: "#fbc02d",
                      }}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          {/* Right Arrow */}
          <IconButton sx={{ position: "absolute", right: -40 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
