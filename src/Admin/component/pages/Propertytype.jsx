import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

import {
  addPropertyType,
  getPropertyTypeById,
  updatePropertyType,
} from "../Service/PropertyTypeService";

export default function AddEditPropertyType() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [typename, setTypename] = useState("");
  const [images, setImages] = useState([]);

  /* =====================
     GET BY ID
  ===================== */
  useEffect(() => {
    if (id) {
      getPropertyTypeById(id).then((res) => {
        if (res?.Data) {
          setTypename(res.Data.typename || "");
        }
      });
    }
  }, [id]);

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      fd.append("typename", typename);

      if (!id) {
        // ADD
        images.forEach((img) => fd.append("image", img));
        await addPropertyType(fd);
        alert("Property type added successfully");
      } else {
        // UPDATE (no image change)
        await updatePropertyType(id, fd);
        alert("Property type updated successfully");
      }

      navigate("/admin/property-types");
    } catch (err) {
      console.error(err);
      alert("API Error (check console)");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>
        {id ? "Edit Property Type" : "Add Property Type"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Property Type Name"
              value={typename}
              onChange={(e) => setTypename(e.target.value)}
              required
            />
          </Grid>
        </Grid>

        {!id && (
          <Box mt={3}>
            <Typography fontSize={14} mb={1}>
              Images
            </Typography>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setImages([...e.target.files])}
            />
          </Box>
        )}

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          {id ? "UPDATE TYPE" : "ADD TYPE"}
        </Button>
      </form>
    </Box>
  );
}
