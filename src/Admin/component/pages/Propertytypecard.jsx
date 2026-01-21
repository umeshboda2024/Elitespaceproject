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
  getPropertyTypes,
  deletePropertyType,
} from "../Service/Propertytype";

export default function PropertyTypescard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
    try {
      const res = await getPropertyTypes();
      setData(res?.Data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setData([]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this property type?")) return;

    try {
      await deletePropertyType(id);
      setData((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  const getImage = (item) => {
    if (!item.image || item.image.length === 0)
      return "https://via.placeholder.com/60x40";

    const img = item.image[0];

    return img.startsWith("http")
      ? img
      : `https://generateapi.techsnack.online/uploads/${img}`;
  };

  return (
    <Paper sx={{ p: 3, mt: 5 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight="bold">Property Types</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/admin/Propertytype")}
        >
          Add Type
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Type Name</TableCell>
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

              <TableCell>{item.typename}</TableCell>

              <TableCell align="center">
                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/admin/property-types/edit/${item._id}`)
                  }
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
              <TableCell colSpan={3} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}
