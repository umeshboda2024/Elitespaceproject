import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ReviewCard from "../Componets/ReviewCard";
import {
  getReviews,
  updateReviewStatus,
  deleteReview,
} from "../Service/reviewService";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(setReviews);
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateReviewStatus(id, status);
    getReviews().then(setReviews);
  };

  const handleDelete = async (id) => {
    await deleteReview(id);
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Reviews & Testimonials
      </Typography>

      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid item xs={12} md={6} key={review.id}>
            <ReviewCard
              review={review}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
