import { Paper, Typography } from "@mui/material";

export default function StatCard({ title, value }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 3,
        border: "1px solid #eee",
        height: "100%",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
    </Paper>
  );
}
