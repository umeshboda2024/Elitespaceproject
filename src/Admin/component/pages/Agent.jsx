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
  TableContainer,
} from "@mui/material";
import { getAgents, deleteAgent } from "../Service/Agentservice";
import { useNavigate } from "react-router-dom";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  const loadAgents = async () => {
    const data = await getAgents();
    setAgents(data);
  };

  useEffect(() => {
    loadAgents();
  }, []);

  const handleDelete = async (id) => {
    await deleteAgent(id);
    loadAgents();
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3, mt: 5 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight="bold">Agents</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/admin/add-agent")}
        >
          Add Agent
        </Button>
      </Box>

      <TableContainer sx={{ overflowX: "auto" }}>
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
            {agents.map((agent) => (
              <TableRow key={agent._id}>
                <TableCell>{agent.name}</TableCell>
                <TableCell>{agent.email}</TableCell>
                <TableCell>{agent.phone}</TableCell>
                <TableCell>{agent.city}</TableCell>

                <TableCell>
                  <Chip
                    label={agent.status || "Active"}
                    color={agent.status === "Inactive" ? "default" : "success"}
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(agent._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
