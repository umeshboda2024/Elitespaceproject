import axios from "axios";

const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/agent",
  headers: {
    Authorization: "In842CKq2NaqIetn", // 👈 apni key
  },
});

/* =======================
   GET ALL AGENTS
======================= */
export const getAgents = async () => {
  const res = await api.get("/");
  return res.data.Data;
};

/* =======================
   ADD AGENT
======================= */
export const addAgent = async (formData) => {
  const res = await api.post("/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

/* =======================
   DELETE AGENT
======================= */
export const deleteAgent = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};

/* =======================
   UPDATE AGENT
======================= */
export const updateAgent = async (id, formData) => {
  const res = await api.patch(`/${id}`, formData);
  return res.data;
};
