import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { addProperty } from "../Service/Propertyservice";
import { useNavigate } from "react-router-dom";

export default function AddProperty() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "",
    status: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addProperty(form);
    navigate("/admin/properties");
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600 }}>
      <Typography fontWeight="bold" mb={3}>
        Add Property
      </Typography>

      <TextField
        fullWidth
        label="Title"
        name="title"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Location"
        name="location"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Price"
        name="price"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        select
        fullWidth
        label="Type"
        name="type"
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Flat">Flat</MenuItem>
        <MenuItem value="Villa">Villa</MenuItem>
        <MenuItem value="Plot">Plot</MenuItem>
      </TextField>

      <TextField
        select
        fullWidth
        label="Status"
        name="status"
        onChange={handleChange}
        sx={{ mb: 3 }}
      >
        <MenuItem value="Available">Available</MenuItem>
        <MenuItem value="Sold">Sold</MenuItem>
        <MenuItem value="Rent">Rent</MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Save Property
      </Button>
    </Paper>
  );
}
