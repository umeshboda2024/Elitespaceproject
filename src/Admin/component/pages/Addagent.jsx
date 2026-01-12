import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  MenuItem,
  Box,
} from "@mui/material";
import { addAgent } from "../Service/Agentservice";
import { useNavigate } from "react-router-dom";

export default function AddAgent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addAgent(form);
    navigate("/admin/agents");
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600 }}>
      <Typography fontWeight="bold" mb={3}>
        Add Agent
      </Typography>

      <TextField
        fullWidth
        label="Name"
        name="name"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        select
        fullWidth
        label="City"
        name="city"
        onChange={handleChange}
        sx={{ mb: 3 }}
      >
        <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
        <MenuItem value="Mumbai">Mumbai</MenuItem>
        <MenuItem value="Delhi">Delhi</MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Save Agent
      </Button>
    </Paper>
  );
}
