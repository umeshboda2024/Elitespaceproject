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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  getStateProperties,
  deleteStateProperty,
} from "../Service/Statewisepropertyservice";

export default function StateProperties() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    const res = await getStateProperties();
    setData(res.Data || []);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this state?")) return;
    await deleteStateProperty(id);
    setData((prev) => prev.filter((i) => i._id !== id));
  };

  return (
    <Paper sx={{ p: 3, mt: 5 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight="bold">State Properties</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/admin/add-state")}
        >
          Add State
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Total Projects</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.totalProjects}</TableCell>

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
              <TableCell colSpan={4} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}
