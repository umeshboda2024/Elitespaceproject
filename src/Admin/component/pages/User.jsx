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
} from "@mui/material";
import {
  getUsers,
  toggleUserStatus,
  deleteUser,
} from "../Service/Userservice";

export default function Users() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleStatus = async (user) => {
    const newStatus = user.status === "Active" ? "Blocked" : "Active";
    await toggleUserStatus(user._id, newStatus);
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u._id !== id));
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3, mt: 5 }}>
      <Typography fontWeight="bold" mb={2}>
        Users
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.emailid}</TableCell>
              <TableCell>{user.mobilenumber}</TableCell>

              <TableCell>
                <Chip
                  size="small"
                  label={user.status || "Active"}
                  color={user.status === "Active" ? "success" : "default"}
                />
              </TableCell>

              <TableCell>
                <Button size="small" onClick={() => handleStatus(user)}>
                  {user.status === "Active" ? "Block" : "Unblock"}
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(user._id)}
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
