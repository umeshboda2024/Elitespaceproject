import { useState } from "react";
import { Paper, TextField, Button, Typography, Grid } from "@mui/material";
import { addAgent } from "../Service/Agentservice";
import { useNavigate } from "react-router-dom";

export default function AddAgent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    designation: "Real Estate Agent",
    badge: "MB Preferred",
    email: "",
    phone: "",
    location: "",
    properties_sale: 0,
    properties_rent: 0,
    rating: 4.5,
    reviews_count: 0,
    experience: 1,
    status: "Active",
  });

  const [photos, setPhotos] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const data = new FormData();

    Object.keys(form).forEach((k) => data.append(k, form[k]));
    photos.forEach((file) => data.append("photo", file));

    await addAgent(data);
    navigate("/admin/agents");
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 800 }}>
      <Typography fontWeight="bold" mb={3}>
        Add Agent
      </Typography>

      <Grid container spacing={2}>
        {[
          { label: "Name", name: "name" },
          { label: "Email", name: "email" },
          { label: "Phone", name: "phone" },
          { label: "Location", name: "location" },
          { label: "Properties Sale", name: "properties_sale", type: "number" },
          { label: "Properties Rent", name: "properties_rent", type: "number" },
          { label: "Rating", name: "rating", type: "number" },
          { label: "Reviews Count", name: "reviews_count", type: "number" },
          { label: "Experience (years)", name: "experience", type: "number" },
        ].map((f) => (
          <Grid item xs={12} md={6} key={f.name}>
            <TextField
              fullWidth
              label={f.label}
              name={f.name}
              type={f.type || "text"}
              onChange={handleChange}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <input
            type="file"
            multiple
            onChange={(e) => setPhotos([...e.target.files])}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Save Agent
      </Button>
    </Paper>
  );
}
