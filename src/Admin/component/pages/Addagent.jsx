import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import {
  addAgent,
  getAgentById,
  updateAgent,
} from "../Service/Agentservice";

const emptyForm = {
  name: "",
  designation: "",
  badge: "",
  phone: "",
  email: "",
  location: "",
  properties_sale: 0,
  properties_rent: 0,
  rating: 0,
  reviews_count: 0,
  experience: 0,
  photo: [],
};

export default function AddEditAgent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState(emptyForm);
  const [newPhotos, setNewPhotos] = useState([]);

  /* =====================
     LOAD AGENT FOR EDIT
  ====================== */
  useEffect(() => {
    if (!id) return;

    getAgentById(id).then((res) => {
      const data = res?.Data || res;

      setForm({
        ...emptyForm,
        ...data,
        photo: Array.isArray(data.photo) ? data.photo : [],
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /* =====================
     SUBMIT
  ====================== */
  const handleSubmit = async () => {
    const fd = new FormData();

    // exact api keys only
    Object.entries(form).forEach(([key, value]) => {
      if (key !== "photo") {
        fd.append(key, value ?? "");
      }
    });

    // multiple images
    newPhotos.forEach((file) => fd.append("photo", file));

    if (id) {
      await updateAgent(id, fd);
      alert("Agent updated");
    } else {
      await addAgent(fd);
      alert("Agent added");
    }

    navigate("/admin/agents");
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 900 }}>
      <Typography variant="h5" mb={3}>
        {id ? "Edit Agent" : "Add Agent"}
      </Typography>

      <Grid container spacing={2}>
        {[
          { label: "Name", name: "name" },
          { label: "Designation", name: "designation" },
          { label: "Badge", name: "badge" },
          { label: "Email", name: "email" },
          { label: "Phone", name: "phone" },
          { label: "Location", name: "location" },
          { label: "Properties Sale", name: "properties_sale", type: "number" },
          { label: "Properties Rent", name: "properties_rent", type: "number" },
          { label: "Rating", name: "rating", type: "number" },
          { label: "Reviews Count", name: "reviews_count", type: "number" },
          { label: "Experience", name: "experience", type: "number" },
        ].map((f) => (
          <Grid item xs={12} md={6} key={f.name}>
            <TextField
              fullWidth
              label={f.label}
              name={f.name}
              type={f.type || "text"}
              value={form[f.name]}
              onChange={handleChange}
            />
          </Grid>
        ))}

        {/* EXISTING IMAGES */}
        {form.photo.length > 0 && (
          <Grid item xs={12}>
            <Typography>Existing Photos</Typography>
            <Box display="flex" gap={2} mt={1}>
              {form.photo.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  width={100}
                  style={{ borderRadius: 8 }}
                />
              ))}
            </Box>
          </Grid>
        )}

        {/* NEW IMAGES */}
        <Grid item xs={12}>
          <input
            type="file"
            multiple
            onChange={(e) => setNewPhotos([...e.target.files])}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        {id ? "UPDATE AGENT" : "SAVE AGENT"}
      </Button>
    </Paper>
  );
}
