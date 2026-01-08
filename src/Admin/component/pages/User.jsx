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
import { getUsers, toggleUserStatus, deleteUser } from "../Service/Userservice";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleStatus = async (id) => {
    await toggleUserStatus(id);
    getUsers().then(setUsers);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography fontWeight="bold" mb={2}>
        Users
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.city}</TableCell>

              <TableCell>
                <Chip
                  size="small"
                  label={user.status}
                  color={user.status === "Active" ? "success" : "default"}
                />
              </TableCell>

              <TableCell>
                <Button size="small" onClick={() => handleStatus(user.id)}>
                  {user.status === "Active" ? "Block" : "Unblock"}
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(user.id)}
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
