import { Paper, Box, Typography } from "@mui/material";

export default function StatCard(props = {}) {
  const { title = "", value = "", icon = null, color = "#0b5c6b" } = props;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* ICON */}
      {icon && (
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {icon}
        </Box>
      )}
      {/* TEXT */}
      <Box>
        <Typography variant="body1" fontWeight="bold">
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
