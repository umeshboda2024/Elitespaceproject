import React from "react";
import { Box, Grid, Typography, Paper, Chip } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BarChartIcon from "@mui/icons-material/BarChart";

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

// import StatCard from "./StateCard";
import RecentProperties from "../Componets/Recentpropertis";

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
    <Box sx={{ mt: 12, px: 2 }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {/* HEADER */}
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Welcome, Admin 👋
        </Typography>

        {/* ================= STAT CARDS ================= */}
        {/* <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 3,
            mb: 6,
          }}
        >
          <StatCard
            icon={<ApartmentIcon />}
            color="#0b5c6b"
            title="Total Properties"
            value="235"
          />

          <StatCard
            icon={<PeopleIcon />}
            color="#1976d2"
            title="Users"
            value="1,502"
          />

          <StatCard
            icon={<SupportAgentIcon />}
            color="#9c27b0"
            title="Agents"
            value="68"
          />

          <StatCard
            icon={<NotificationsIcon />}
            color="#ed6c02"
            title="Inquiries"
            value="127"
          />

          <StatCard
            icon={<BarChartIcon />}
            color="#2e7d32"
            title="Monthly Revenue"
            value="₹7,10,000"
          />
        </Box> */}

        {/* ================= CHARTS ================= */}
        <Grid container spacing={3}>
          {/* BAR CHART */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography fontWeight="bold" mb={2}>
                Properties Added
              </Typography>

              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0b5c6b" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* PIE CHART */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography fontWeight="bold" mb={2}>
                Buy vs Rent
              </Typography>

              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={80} label>
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
          <Grid item size={{ xs: 12, md: 4 }}>
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

        {/* ================= RECENT PROPERTIES ================= */}
        <Grid container spacing={3} mt={12}>
          <Grid item size={{ xs: 12 }}>
            <RecentProperties />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
