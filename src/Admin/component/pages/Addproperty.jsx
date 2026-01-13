import { useEffect, useState } from "react";
import { Paper, TextField, Button, Typography, MenuItem } from "@mui/material";
import {
  addProperty,
  getPropertyById,
  updateProperty,
} from "../Service/Propertyservice";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEditProperty() {
  const navigate = useNavigate();
  const { id } = useParams(); // 👈 IF ID EXISTS → EDIT MODE

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

  // ✅ LOAD OLD DATA IN EDIT MODE
  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  const fetchProperty = async () => {
    try {
      const res = await getPropertyById(id);
      console.log("ALL DATA:", res);

      if (res?.Status === "Success" && Array.isArray(res.Data)) {
        const oldData = res.Data.find((item) => item._id === id);

        if (oldData) {
          setForm({
            state: oldData.state || "",
            name: oldData.name || "",
            flate: oldData.flate || "",
            status: oldData.status || "",
            carpetarea: oldData.carpetarea || "",
            floor: oldData.floor || "",
            price: oldData.price || "",
            persqft: oldData.persqft || "",
            owner: oldData.owner || "",
            image: null,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ✅ SUBMIT (ADD / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (key === "image") {
        // image only if selected
        if (form.image) {
          formData.append("image", form.image);
        }
      } else {
        // always send other fields
        formData.append(key, form[key]);
      }
    });

    try {
      let res;

      if (id) {
        // ✅ UPDATE
        res = await updateProperty(id, formData);
      } else {
        // ✅ ADD
        res = await addProperty(formData);
      }

      if (res?.Status === "Success") {
        navigate("/admin/properties");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("API Error");
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        {id ? "Edit Property" : "Add Property"}
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
          {id ? "Update Property" : "Save Property"}
        </Button>
      </form>
    </Paper>
  );
}
