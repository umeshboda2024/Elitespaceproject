import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  getCityProperties,
  deleteCityProperty,
} from "../Service/Statewisepropertyservice";

export default function StateProperties() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const res = await getCityProperties();
      setData(res?.Data || []);
    } catch (err) {
      console.error("Fetch city error:", err);
      setData([]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this city?")) return;

    try {
      await deleteCityProperty(id);
      setData((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  const getImage = (item) => {
    if (!item.image) return "https://via.placeholder.com/60x40";
    const img = Array.isArray(item.image) ? item.image[0] : item.image;
    return img.startsWith("http")
      ? img
      : `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Paper sx={{ p: 3, mt: 5 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight="bold">City Properties</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/admin/add-state")}
        >
          Add City
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>State</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Total Projects</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <Avatar
                  src={getImage(item)}
                  variant="rounded"
                  sx={{ width: 60, height: 40 }}
                />
              </TableCell>

              <TableCell>{item.state}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.project}</TableCell>

              <TableCell align="center">
                <Button
                  size="small"
                  onClick={() => navigate(`/admin/edit-state/${item._id}`)}
                >
                  Edit
                </Button>

                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}
