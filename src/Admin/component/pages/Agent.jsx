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
import {
  getAgents,
  deleteAgent,
  toggleAgentStatus,
} from "../Service/Agentservice";
import { useNavigate } from "react-router-dom";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAgents().then(setAgents);
  }, []);

  const handleDelete = async (id) => {
    await deleteAgent(id);
    setAgents((prev) => prev.filter((a) => a.id !== id));
  };

  const handleStatus = async (id) => {
    await toggleAgentStatus(id);
    getAgents().then(setAgents);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3, mt: 5 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        flexWrap="wrap"
        gap={2}
      >
        <Typography fontWeight="bold">Agents</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/admin/add-agent")}
        >
          Add Agent
        </Button>
      </Box>

      {/* RESPONSIVE TABLE WRAPPER */}
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
              <TableRow key={agent.id}>
                <TableCell>{agent.name}</TableCell>
                <TableCell>{agent.email}</TableCell>
                <TableCell>{agent.phone}</TableCell>
                <TableCell>{agent.city}</TableCell>

                <TableCell>
                  <Chip
                    label={agent.status}
                    color={
                      agent.status === "Active" ? "success" : "default"
                    }
                    size="small"
                  />
                </TableCell>

                <TableCell>
                  <Button
                    size="small"
                    onClick={() => handleStatus(agent.id)}
                  >
                    Toggle
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(agent.id)}
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
