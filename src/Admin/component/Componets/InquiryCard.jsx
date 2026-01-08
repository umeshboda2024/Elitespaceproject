import { Paper, Typography, Box, Chip, Button, Stack } from "@mui/material";

export default function InquiryCard({ inquiry, onStatusChange, onDelete }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        borderLeft:
          inquiry.priority === "Hot"
            ? "6px solid #d32f2f"
            : "6px solid #1976d2",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography fontWeight="bold">{inquiry.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {inquiry.phone} • {inquiry.email}
          </Typography>
          <Typography variant="body2" mt={1}>
            Property: <b>{inquiry.property}</b>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {inquiry.city} • {inquiry.date}
          </Typography>
        </Box>

        <Stack spacing={1} alignItems="flex-end">
          <Chip
            label={inquiry.priority}
            color={inquiry.priority === "Hot" ? "error" : "default"}
            size="small"
          />
          <Chip
            label={inquiry.status}
            color={
              inquiry.status === "New"
                ? "success"
                : inquiry.status === "Contacted"
                ? "warning"
                : "default"
            }
            size="small"
          />
        </Stack>
      </Box>

      <Box mt={2} display="flex" gap={1}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => onStatusChange(inquiry.id, "Contacted")}
        >
          Mark Contacted
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => onStatusChange(inquiry.id, "Closed")}
        >
          Close Lead
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(inquiry.id)}>
          Delete
        </Button>
      </Box>
    </Paper>
  );
}
