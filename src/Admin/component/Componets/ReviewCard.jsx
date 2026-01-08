import {
  Paper,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  Rating,
} from "@mui/material";

export default function ReviewCard({ review, onStatusChange, onDelete }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        position: "relative",
        background:
          review.status === "Approved"
            ? "#f9fffb"
            : review.status === "Hidden"
            ? "#fafafa"
            : "#fff",
      }}
    >
      {/* STATUS BADGE */}
      <Chip
        label={review.status}
        size="small"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
        color={
          review.status === "Approved"
            ? "success"
            : review.status === "Pending"
            ? "warning"
            : "default"
        }
      />

      <Typography fontWeight="bold">
        {review.name} ({review.role})
      </Typography>

      <Rating value={review.rating} readOnly size="small" sx={{ my: 1 }} />

      <Typography variant="body2" mb={1}>
        “{review.message}”
      </Typography>

      <Typography variant="caption" color="text.secondary">
        {review.property} • {review.date}
      </Typography>

      {/* ACTIONS */}
      <Stack direction="row" spacing={1} mt={2}>
        {review.status !== "Approved" && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => onStatusChange(review.id, "Approved")}
          >
            Approve
          </Button>
        )}

        {review.status !== "Hidden" && (
          <Button
            size="small"
            variant="outlined"
            onClick={() => onStatusChange(review.id, "Hidden")}
          >
            Hide
          </Button>
        )}

        <Button size="small" color="error" onClick={() => onDelete(review.id)}>
          Delete
        </Button>
      </Stack>
    </Paper>
  );
}
