import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import Apparment from "../../Assets/images/BuyImage12.jpg";
import Villa from "../../Assets/images/Villaimgae.jpg";
import Appartment1 from "../../Assets/images/House-Desktop.jpg";
import Appartment2 from "../../Assets/images/BuyImage3.jpg";
import Appartment3 from "../../Assets/images/Pune.jpg";

const properties = [
  {
    id: 1,
    title: "Luxury 3 BHK Apartment",
    location: "Ahmedabad",
    type: "Flat",
    status: "Available",
    price: "₹1.5 Cr",
    image: Apparment,
  },
  {
    id: 2,
    title: "Modern 4 BHK Villa",
    location: "Surat",
    type: "Villa",
    status: "Sold",
    price: "₹3.2 Cr",
    image: Villa,
  },
  {
    id: 3,
    title: "Spacious 2 BHK Flat",
    location: "Mumbai",
    type: "Flat",
    status: "Available",
    price: "₹95 Lac",
    image: Appartment1,
  },
  {
    id: 3,
    title: "Spacious 1 BHK Flat",
    location: "Surat",
    type: "Flat",
    status: "Available",
    price: "₹35 Lac",
    image: Appartment2,
  },
  {
    id: 3,
    title: "Spacious 2 BHK Flat",
    location: "Pune",
    type: "Flat",
    status: "Available",
    price: "₹75 Lac",
    image: Appartment3,
  },
];

const statusColor = (status) => {
  if (status === "Available") return "success";
  if (status === "Sold") return "warning";
  return "info";
};

export default function RecentProperties() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography fontWeight="bold" mb={2}>
        Recent Properties
      </Typography>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {properties.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      variant="rounded"
                      src={item.image}
                      sx={{ width: 48, height: 36 }}
                    />
                    {item.title}
                  </Box>
                </TableCell>

                <TableCell>{item.location}</TableCell>
                <TableCell>{item.type}</TableCell>

                <TableCell>
                  <Chip
                    size="small"
                    label={item.status}
                    color={statusColor(item.status)}
                  />
                </TableCell>

                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
