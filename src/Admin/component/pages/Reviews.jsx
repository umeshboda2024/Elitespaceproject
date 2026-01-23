import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";

export default function Reviews({ review }) {
  return (
    <Card elevation={0}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={Array.isArray(review.image) ? review.image[0] : review.image}
          />
          <div>
            <Typography fontWeight="bold">{review.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {review.city} • {review.designation}
            </Typography>
          </div>
        </Stack>

        <Typography mt={2}>{review.message}</Typography>
      </CardContent>
    </Card>
  );
}
