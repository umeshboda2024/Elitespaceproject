import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function ContentSection({
  title,
  fields,
  value,
  onSave,
}) {
  const [form, setForm] = useState(value);

  const handleChange = (key, val) => {
    setForm({ ...form, [key]: val });
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography fontWeight="bold" mb={2}>
        {title}
      </Typography>

      {fields.map((f) => (
        <TextField
          key={f.key}
          fullWidth
          multiline={f.multiline}
          rows={f.rows || 1}
          label={f.label}
          value={form[f.key]}
          onChange={(e) => handleChange(f.key, e.target.value)}
          sx={{ mb: 2 }}
        />
      ))}

      <Box textAlign="right">
        <Button
          variant="contained"
          onClick={() => onSave(form)}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
}
