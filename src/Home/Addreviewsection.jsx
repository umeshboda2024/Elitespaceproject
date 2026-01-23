import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Rating,
  Stack,
  MenuItem,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addReview } from "../Admin/component/Service/reviewService";

const AddReviewDialog = ({ open, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    message: "",
    designation: "Buyer",
  });

  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null); // ✅ real image
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.city || !form.message) {
      alert("Please fill all fields");
      return;
    }

    if (!image) {
      alert("Please upload image");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("city", form.city);
    formData.append("message", form.message);
    formData.append("rating", rating);
    formData.append("designation", form.designation);
    formData.append("status", ["approved", "rejected"]);
    formData.append("image", image); // ✅ REAL IMAGE

    try {
      setLoading(true);
      await addReview(formData);
      alert("Thank you! Review submitted for approval.");
      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("API error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Write a Review</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Your Name"
            name="name"
            fullWidth
            required
            onChange={handleChange}
          />

          <TextField
            label="City"
            name="city"
            fullWidth
            required
            onChange={handleChange}
          />

          <TextField
            select
            label="You are"
            name="designation"
            value={form.designation}
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value="Buyer">Buyer</MenuItem>
            <MenuItem value="Renter">Renter</MenuItem>
          </TextField>

          {/* ✅ IMAGE UPLOAD */}
          <Button variant="outlined" component="label">
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Button>

          {image && (
            <Typography variant="body2" color="green">
              Selected: {image.name}
            </Typography>
          )}

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography>Rating:</Typography>
            <Rating value={rating} onChange={(e, val) => setRating(val)} />
          </Stack>

          <TextField
            label="Your Review"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            onChange={handleChange}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddReviewDialog;
