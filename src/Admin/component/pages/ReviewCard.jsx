import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Chip,
  Stack,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import Reviews from "./Reviews";
import {
  getReviews,
  updateReviewStatus,
  deleteReview,
} from "../Service/reviewService";

export default function ReviewCards() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await getReviews();
      setReviews(res?.data?.Data || []);
    } catch (err) {
      console.error("Failed to load reviews", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      setActionId(id);

      // 🔥 ALWAYS lowercase for backend
      await updateReviewStatus(id, status.toLowerCase());

      setReviews((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status } : r)),
      );
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Status update failed");
    } finally {
      setActionId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this review?")) return;

    try {
      setActionId(id);
      await deleteReview(id);
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert("Delete failed");
    } finally {
      setActionId(null);
    }
  };

  if (loading) return <Typography>Loading reviews...</Typography>;

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3} mt={5}>
        Reviews Management
      </Typography>

      <Grid container spacing={3}>
        {reviews.length === 0 && (
          <Typography sx={{ ml: 2 }}>No reviews found</Typography>
        )}

        {reviews.map((review) => (
          <Grid item size={{ xs: 12, md: 6 }} key={review._id}>
            <Box
              p={2}
              borderRadius={2}
              border="1px solid #eee"
              sx={{
                backgroundColor:
                  review.status === "rejected"
                    ? "#fff5f5" // light red
                    : review.status === "approved"
                      ? "#f0fff4" // light green
                      : "#ffffff",
              }}
            >
              <Reviews review={review} />

              <Chip
                label={review.status}
                color={
                  review.status === "approved"
                    ? "success"
                    : review.status === "rejected"
                      ? "error"
                      : "warning"
                }
                sx={{ mt: 1 }}
              />

              <Stack direction="row" spacing={1} mt={2}>
                {/* APPROVE always visible (except loading) */}
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  disabled={actionId === review._id}
                  onClick={() => updateStatus(review._id, "approved")}
                >
                  {actionId === review._id ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : (
                    "Approve"
                  )}
                </Button>

                {/* Reject only when NOT rejected */}
                {review.status !== "rejected" && (
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                    disabled={actionId === review._id}
                    onClick={() => updateStatus(review._id, "rejected")}
                  >
                    Reject
                  </Button>
                )}

                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  disabled={actionId === review._id}
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
