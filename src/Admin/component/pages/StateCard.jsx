import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

import {
  addStateProperty,
  getStatePropertyById,
  updateStateProperty,
} from "../Service/Statewisepropertyservice";

export default function AddEditStateProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    state: "",
    city: "",
    totalProjects: "",
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (id) {
      getStatePropertyById(id).then((res) => {
        if (res?.Data) {
          setForm({
            state: res.Data.state,
            city: res.Data.city,
            totalProjects: res.Data.totalProjects,
          });
        }
      });
    }
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // UPDATE (NO IMAGE)
        await updateStateProperty(id, form);
        alert("State updated");
      } else {
        // ADD (IMAGE OK)
        const fd = new FormData();
        fd.append("state", form.state);
        fd.append("city", form.city);
        fd.append("totalProjects", form.totalProjects);
        images.forEach((img) => fd.append("image", img));
        await addStateProperty(fd);
        alert("State added");
      }

      navigate("/admin/stateproperties");
    } catch (err) {
      console.error(err);
      alert("API Error (check console)");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>
        {id ? "Edit State Property" : "Add State Property"}
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
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Total Projects"
              name="totalProjects"
              value={form.totalProjects}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {!id && (
          <Box mt={3}>
            <input
              type="file"
              multiple
              onChange={(e) => setImages([...e.target.files])}
            />
          </Box>
        )}

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          {id ? "UPDATE" : "ADD"}
        </Button>
      </form>
    </Box>
  );
}
