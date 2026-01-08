import {
  Paper,
  Typography,
  Box,
  Switch,
  IconButton,
  Collapse,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function LocationCard({
  city,
  onToggleCity,
  onToggleArea,
  onAddArea,
  onDeleteCity,
  onDeleteArea,
}) {
  const [open, setOpen] = useState(false);
  const [area, setArea] = useState("");

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      {/* CITY HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight="bold">{city.city}</Typography>
          <Chip
            size="small"
            label={city.enabled ? "Enabled" : "Disabled"}
            color={city.enabled ? "success" : "default"}
            sx={{ mt: 0.5 }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <Switch
            checked={city.enabled}
            onChange={() => onToggleCity(city.id)}
          />

          {/* DELETE CITY */}
          <IconButton
            size="small"
            color="error"
            onClick={() => onDeleteCity(city.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>

          {/* EXPAND */}
          <IconButton onClick={() => setOpen(!open)}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </Box>

      {/* AREAS */}
      <Collapse in={open}>
        <Box mt={2}>
          {city.areas.map((a) => (
            <Box
              key={a.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
              pl={2}
            >
              <Typography variant="body2">• {a.name}</Typography>

              <Box display="flex" alignItems="center">
                <Switch
                  size="small"
                  checked={a.enabled}
                  onChange={() => onToggleArea(city.id, a.id)}
                />

                {/* DELETE AREA */}
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => onDeleteArea(city.id, a.id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}

          {/* ADD AREA */}
          <Box mt={2} display="flex" gap={1}>
            <TextField
              size="small"
              placeholder="Add area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                if (!area.trim()) return;
                onAddArea(city.id, area);
                setArea("");
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Paper>
  );
}
