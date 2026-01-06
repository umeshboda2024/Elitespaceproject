import { Box, Grid, Typography, Paper, Chip } from "@mui/material";
import StatCard from "../StateCard";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ================= DATA ================= */

const barData = [
  { month: "Oct", value: 20 },
  { month: "Nov", value: 30 },
  { month: "Dec", value: 40 },
  { month: "Jan", value: 55 },
  { month: "Feb", value: 65 },
];

const pieData = [
  { name: "Buy", value: 70 },
  { name: "Rent", value: 30 },
];

const inquiries = [
  { name: "Rohan Shah", flat: "3 BHK", state: "Gujarat" },
  { name: "Amit Patel", flat: "2 BHK", state: "Mumbai" },
  { name: "Neha Singh", flat: "4 BHK", state: "Delhi" },
];

const COLORS = ["#0b5c6b", "#e0b84c"];

/* ================= DASHBOARD ================= */

export default function Dashboard() {
  return (
    <Box
      sx={{
        mt: 12,
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* CENTER CONTAINER */}
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Welcome, Admin 👋
        </Typography>

        {/* ===== STAT CARDS ===== */}
        <Grid container spacing={3} mb={10}>
          <Grid item size={{xs:12 ,sm:6, md:3}}>
            <StatCard title="Total Properties" value="235" />
          </Grid>
          <Grid item size={{xs:12 ,sm:6, md:3}}>
            <StatCard title="Users" value="1,502" />
          </Grid>
          <Grid item size={{xs:12 ,sm:6, md:3}}>
            <StatCard title="Agents" value="68" />
          </Grid>
          <Grid item size={{xs:12 ,sm:6, md:3}}>
            <StatCard title="Inquiries" value="127" />
          </Grid>
        </Grid>

        {/* ===== CHARTS + INQUIRIES ===== */}
        <Grid container spacing={3}>
          {/* BAR CHART */}
          <Grid item size={{xs:12 ,md:4}}>
            <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography fontWeight="bold" mb={2}>
                Properties Added
              </Typography>

              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#0b5c6b"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* PIE CHART */}
          <Grid item size={{xs:12 ,md:4}}>
            <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography fontWeight="bold" mb={2}>
                Buy vs Rent
              </Typography>

              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={80}>
                    {pieData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* RECENT INQUIRIES */}
          <Grid item size={{xs:12 ,md:4}}>
            <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography fontWeight="bold" mb={2}>
                Recent Inquiries
              </Typography>

              {inquiries.map((item, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <Chip
                    label="New"
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="body2">
                    {item.name} – {item.flat} ({item.state})
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
