import { useEffect, useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import {
  addProperty,
  getPropertyById,
  updateProperty,
} from "../Service/Propertyservice";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEditProperty() {
  const navigate = useNavigate();
  const { id } = useParams();

  const numberFields = [
    "carpetarea",
    "floor",
    "price",
    "pricepersqft",
    "bedroom",
    "hall",
    "kitchen",
    "builtuparea",
    "securitydeposit",
    "maintainance",
  ];

  const [form, setForm] = useState({
    city: "",
    state: "",
    propertyname: "",
    propertytype: "",
    bhk: "",
    status: "",
    carpetarea: "",
    floor: "",
    price: "",
    pricepersqft: "",
    ownername: "",
    address: "",
    bedroom: "",
    hall: "",
    kitchen: "",
    builtuparea: "",
    ownertype: "",
    ownermobilenumber: "",
    securitydeposit: "",
    maintainance: "",
    image: [],
  });

  /* =========================
     LOAD DATA IN EDIT MODE
  ========================== */
  useEffect(() => {
    if (id) fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const res = await getPropertyById(id);
      if (res?.Status === "Success" && res.Data) {
        setForm({
          city: res.Data.city || "",
          state: res.Data.state || "",
          propertyname: res.Data.propertyname || "",
          propertytype: res.Data.propertytype || "",
          bhk: res.Data.bhk || "",
          status: res.Data.status || "",
          carpetarea: res.Data.carpetarea || "",
          floor: res.Data.floor || "",
          price: res.Data.price || "",
          pricepersqft: res.Data.pricepersqft || "",
          ownername: res.Data.ownername || "",
          address: res.Data.address || "",
          bedroom: res.Data.bedroom || "",
          hall: res.Data.hall || "",
          kitchen: res.Data.kitchen || "",
          builtuparea: res.Data.builtuparea || "",
          ownertype: res.Data.ownertype || "",
          ownermobilenumber: res.Data.ownermobilenumber || "",
          securitydeposit: res.Data.securitydeposit || "",
          maintainance: res.Data.maintainance || "",
          image: [], // ⚠️ image input always empty
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  /* =========================
        HANDLE CHANGE
  ========================== */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* =========================
          SUBMIT
  ========================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (key === "image") {
        for (let i = 0; i < form.image.length; i++) {
          formData.append("image", form.image[i]);
        }
      } else {
        if (numberFields.includes(key)) {
          formData.append(key, Number(form[key]) || 0);
        } else {
          formData.append(key, form[key]);
        }
      }
    });

    try {
      let res;
      if (id) {
        res = await updateProperty(id, formData);
      } else {
        res = await addProperty(formData);
      }

      if (res?.Status === "Success") {
        navigate("/admin/properties");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("API Error");
    }
  };

  const fields = [
    "city",
    "state",
    "propertyname",
    "propertytype",
    "bhk",
    "status",
    "carpetarea",
    "floor",
    "price",
    "pricepersqft",
    "ownername",
    "address",
    "bedroom",
    "hall",
    "kitchen",
    "builtuparea",
    "ownertype",
    "ownermobilenumber",
    "securitydeposit",
    "maintainance",
  ];

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h6" mb={3} fontWeight="bold">
        {id ? "Edit Property" : "Add Property"}
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {fields.map((key) => (
          <TextField
            key={key}
            fullWidth
            type={numberFields.includes(key) ? "number" : "text"}
            label={key.toUpperCase()}
            name={key}
            value={form[key]}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        ))}

        <Button variant="outlined" component="label" fullWidth sx={{ mb: 3 }}>
          Upload Property Images
          <input
            type="file"
            name="image"
            multiple
            hidden
            accept="image/*"
            onChange={handleChange}
          />
        </Button>

        <Button type="submit" variant="contained" fullWidth>
          {id ? "Update Property" : "Save Property"}
        </Button>
      </form>
    </Paper>
  );
}
