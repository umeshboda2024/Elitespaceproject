import axios from "axios";

const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/stateproperties",
  headers: {
    Authorization: "3K3BYd3gR7H98FEE",
  },
});

/* =====================
   ADD STATE (POST)
===================== */
export const addStateProperty = async (formData) => {
  const res = await api.post("/", formData); // axios auto sets headers
  return res.data;
};

/* =====================
   GET ALL STATES
===================== */
export const getStateProperties = async () => {
  const res = await api.get("/");
  return res.data;
};

/* =====================
   GET BY ID (workaround)
===================== */
export const getStatePropertyById = async (id) => {
  const res = await api.get("/");
  const item = res.data?.Data?.find((p) => p._id === id);
  return { Data: item || null };
};

/* =====================
   UPDATE STATE (NO IMAGE)
===================== */
export const updateStateProperty = async (id, data) => {
  const res = await api.patch(`/${id}`, data); // no image in patch
  return res.data;
};

/* =====================
   DELETE STATE
===================== */
export const deleteStateProperty = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
