import { useState } from "react";
import { Paper, TextField, Button, Typography, MenuItem } from "@mui/material";
import { addProperty } from "../Service/Propertyservice";
import { useNavigate } from "react-router-dom";

export default function AddProperty() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    state: "",
    name: "",
    flate: "",
    status: "",
    carpetarea: "",
    floor: "",
    price: "",
    persqft: "",
    owner: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("state", form.state);
    formData.append("name", form.name);
    formData.append("flate", form.flate);
    formData.append("status", form.status);
    formData.append("carpetarea", form.carpetarea);
    formData.append("floor", form.floor);
    formData.append("price", form.price);
    formData.append("persqft", form.persqft);
    formData.append("owner", form.owner);
    formData.append("image", form.image);

    try {
      await addProperty(formData);
      navigate("/admin/properties");
    } catch (error) {
      console.error("Failed to add property", error);
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Add Property
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          fullWidth
          label="State"
          name="state"
          value={form.state}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Property Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Flat Type"
          name="flate"
          value={form.flate}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          select
          fullWidth
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          <MenuItem value="Available">Available</MenuItem>
          <MenuItem value="Sold">Sold</MenuItem>
          <MenuItem value="Rent">Rent</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Carpet Area"
          name="carpetarea"
          value={form.carpetarea}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Floor"
          name="floor"
          value={form.floor}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Price Per Sqft"
          name="persqft"
          value={form.persqft}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Owner Name"
          name="owner"
          value={form.owner}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <Button variant="outlined" component="label" fullWidth sx={{ mb: 3 }}>
          Upload Property Image
          <input
            type="file"
            name="image"
            hidden
            accept="image/*"
            onChange={handleChange}
          />
        </Button>

        <Button type="submit" variant="contained" fullWidth>
          Save Property
        </Button>
      </form>
    </Paper>
  );
}
