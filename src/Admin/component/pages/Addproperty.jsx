import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProperty,
  getPropertyById,
  updateProperty,
} from "../Service/Propertyservice";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

export default function AddEditProperty() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    city: "",
    state: "",
    propertyname: "",
    propertytype: "",
    bhk: "",
    status: "",
    carpetarea: "",
    floor: "",
    price: "",
    pricepersqft: "",
    ownername: "",
    address: "",
    bedroom: "",
    hall: "",
    kitchen: "",
    builtuparea: "",
    ownertype: "",
    ownermobilenumber: "",
    securitydeposit: "",
    maintainance: "",
    image: [],
  });

  const [newImages, setNewImages] = useState([]);

  /* LOAD OLD DATA */
  const loadProperty = async () => {
    if (!id) return;
    const res = await getPropertyById(id);
    if (res?.Data) setForm(res.Data);
  };

  useEffect(() => {
    loadProperty();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    Object.keys(form).forEach((key) => {
      if (key !== "image") {
        fd.append(key, form[key] ?? "");
      }
    });

    newImages.forEach((img) => fd.append("image", img));

    try {
      if (id) {
        await updateProperty(id, fd);
        alert("Property updated");
        navigate("/admin/properties");
      } else {
        await addProperty(fd);
        alert("Property added");
        navigate("/admin/properties");
      }
    } catch (err) {
      console.error(err);
      alert("API error, try again");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" mb={3}>
        {id ? "Edit Property" : "Add Property"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(form)
            .filter((k) => k !== "image")
            .map((key) => (
              <Grid item xs={12} md={4} key={key}>
                <TextField
                  fullWidth
                  label={key.toUpperCase()}
                  name={key}
                  value={form[key] || ""}
                  onChange={handleChange}
                />
              </Grid>
            ))}
        </Grid>

        {/* EXISTING IMAGES */}
        {form.image?.length > 0 && (
          <>
            <Typography mt={3}>Existing Images</Typography>
            <Box display="flex" gap={2} mt={1}>
              {form.image.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  width={120}
                  style={{ borderRadius: 8 }}
                />
              ))}
            </Box>
          </>
        )}

        {/* NEW IMAGES */}
        <Box mt={3}>
          <input
            type="file"
            multiple
            onChange={(e) => setNewImages([...e.target.files])}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3 }}
        >
          {id ? "UPDATE PROPERTY" : "ADD PROPERTY"}
        </Button>
      </form>
    </Box>
  );
}
