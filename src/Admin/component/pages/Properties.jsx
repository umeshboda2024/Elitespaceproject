import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  Box,
} from "@mui/material";
import { getProperties, deleteProperty } from "../Service/Propertyservice";
import { useNavigate } from "react-router-dom";

export default function Properties() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties().then(setData);
  }, []);

  const handleDelete = (id) => {
    deleteProperty(id);
    setData(data.filter((p) => p.id !== id));
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight="bold">Properties</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/admin/add-property")}
        >
          Add Property
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <Chip label={item.status} color="success" size="small" />
              </TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Button size="small">Edit</Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
