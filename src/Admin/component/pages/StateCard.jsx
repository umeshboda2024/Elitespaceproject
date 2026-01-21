import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

import {
  addCityProperty,
  getCityPropertyById,
  updateCityProperty,
} from "../Service/Statewisepropertyservice";

export default function AddEditStateProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    state: "",
    city: "",
    project: "",
  });

  const [images, setImages] = useState([]);

  /* =====================
     GET CITY BY ID
  ===================== */
  useEffect(() => {
    if (id) {
      getCityPropertyById(id).then((res) => {
        if (res?.Data) {
          setForm({
            state: res.Data.state || "",
            city: res.Data.city || "",
            project: res.Data.project || "",
          });
        }
      });
    }
  }, [id]);

  /* =====================
     HANDLE CHANGE
  ===================== */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // UPDATE CITY (NO IMAGE)
        await updateCityProperty(id, form);
        alert("City updated successfully");
      } else {
        // ADD CITY
        const fd = new FormData();
        fd.append("state", form.state);
        fd.append("city", form.city);
        fd.append("project", form.project);

        images.forEach((img) => fd.append("image", img));

        await addCityProperty(fd);
        alert("City added successfully");
      }

      navigate("/admin/addstate-property");
    } catch (err) {
      console.error(err);
      alert("API Error (check console)");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>
        {id ? "Edit City Property" : "Add City Property"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Project Count"
              name="project"
              value={form.project}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        {!id && (
          <Box mt={3}>
            <Typography fontSize={14} mb={1}>
              City Image
            </Typography>
            <input
              type="file"
              multiple
              onChange={(e) => setImages([...e.target.files])}
            />
          </Box>
        )}

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          {id ? "UPDATE CITY" : "ADD CITY"}
        </Button>
      </form>
    </Box>
  );
}
