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

    const AddReviewDialog = ({ open, onClose }) => {
    const [rating, setRating] = useState(5);

    const handleSubmit = () => {
        console.log("Review Submitted");
        onClose();
        alert("Thank you! Your review will be visible after admin approval.");
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        
        {/* 🔹 Dialog Title with Close Icon */}
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
            <TextField label="Your Name" fullWidth required />
            <TextField label="City" fullWidth required />

            <TextField select label="You are" fullWidth>
                <MenuItem value="Buyer">Buyer</MenuItem>
                <MenuItem value="Renter">Renter</MenuItem>
            </TextField>

            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>Rating:</Typography>
                <Rating
                value={rating}
                onChange={(e, val) => setRating(val)}
                />
            </Stack>

            <TextField
                label="Your Review"
                multiline
                rows={4}
                fullWidth
                required
            />

            <Button variant="contained" size="large" onClick={handleSubmit}>
                Submit Review
            </Button>
            </Stack>
        </DialogContent>
        </Dialog>
    );
    };

    export default AddReviewDialog;
