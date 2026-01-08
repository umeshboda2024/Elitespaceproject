import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import InquiryCard from "../Componets/InquiryCard";
import {
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "../Service/inquiryService";

export default function Inquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getInquiries().then(setData);
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateInquiryStatus(id, status);
    getInquiries().then(setData);
  };

  const handleDelete = async (id) => {
    await deleteInquiry(id);
    setData(data.filter((i) => i.id !== id));
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Inquiries / Leads
      </Typography>

      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <InquiryCard
              inquiry={item}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
