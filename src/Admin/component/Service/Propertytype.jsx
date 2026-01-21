import axios from "axios";

/* =====================
   PROPERTY TYPE API INSTANCE
===================== */
const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/propertytype",
  headers: {
    Authorization: "ECpeZujtktS10WLY", // project key
  },
});

/* =====================
   ADD PROPERTY TYPE (POST)
===================== */
export const addPropertyType = async (formData) => {
  const res = await api.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* =====================
   GET ALL PROPERTY TYPES
===================== */
export const getPropertyTypes = async () => {
  const res = await api.get("/");
  return res.data;
};

/* =====================
   GET PROPERTY TYPE BY ID
===================== */
export const getPropertyTypeById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

/* =====================
   UPDATE PROPERTY TYPE (PATCH)
===================== */
export const updatePropertyType = async (id, data) => {
  const res = await api.patch(`/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* =====================
   DELETE PROPERTY TYPE
===================== */
export const deletePropertyType = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
