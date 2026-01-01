import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Grid,
} from "@mui/material";

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
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight="bold" mb={1}>
          What Our Clients Say
        </Typography>

        <Typography align="center" color="text.secondary" mb={5}>
          Real experiences from people who found their dream property with Elite
          Space
        </Typography>

        <Grid container spacing={4}>
          {reviews.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%", borderRadius: 3 }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: "#0b5c6b", mr: 2 }}>
                      {item.name[0]}
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.city}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating value={item.rating} readOnly />

                  <Typography mt={2} color="text.secondary">
                    “{item.review}”
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
