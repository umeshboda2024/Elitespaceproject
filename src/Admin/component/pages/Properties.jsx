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
// import { getProperties, deleteProperty } from "../Service/Propertyservice";
import { getProperties, deleteProperty } from "../Service/Propertyservice";
import { useNavigate } from "react-router-dom";

export default function Properties() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await getProperties();
      console.log("GET PROPERTIES:", res);

      // ✅ CORRECT KEY
      setData(res.Data || []);
    } catch (error) {
      console.error(error);
      setData([]);
    }
  };

  const handleDelete = async (_id) => {
    if (!window.confirm("Delete this property?")) return;

    try {
      await deleteProperty(_id);
      setData((prev) => prev.filter((p) => p._id !== _id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const statusColor = (status) => {
    if (status === "Sold") return "error";
    if (status === "Available") return "success";
    return "warning";
  };

  return (
   <Paper sx={{ p: { xs: 1, sm: 3 }, mt: 5 }}>
  <Box
    display="flex"
    justifyContent="space-between"
    mb={2}
    flexDirection={{ xs: "column", sm: "row" }}
    gap={1}
  >
    <Typography fontWeight="bold">Properties</Typography>

    <Button
      variant="contained"
      onClick={() => navigate("/admin/add-property")}
      sx={{ alignSelf: { xs: "flex-start", sm: "auto" } }}
    >
      Add Property
    </Button>
  </Box>

  <Box sx={{ overflowX: "auto" }}>
    <Table sx={{ minWidth: 900 }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>City</TableCell>
          <TableCell>State</TableCell>
          <TableCell>Floor</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Price</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((item) => (
          <TableRow key={item._id}>
            <TableCell sx={{ whiteSpace: "nowrap" }}>
              {item.propertyname}
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap" }}>{item.city}</TableCell>
            <TableCell sx={{ whiteSpace: "nowrap" }}>{item.state}</TableCell>
            <TableCell>{item.floor}</TableCell>

            <TableCell>
              <Chip
                label={item.status}
                size="small"
                color={statusColor(item.status)}
              />
            </TableCell>

            <TableCell>{item.price}</TableCell>

            <TableCell align="center">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/admin/edit-property/${item._id}`)
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
              </Box>
            </TableCell>
          </TableRow>
        ))}

        {data.length === 0 && (
          <TableRow>
            <TableCell colSpan={7} align="center">
              No properties found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </Box>
</Paper>
  );
}
