import axios from "axios";

/* =====================
   AGENT API INSTANCE
===================== */
const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/agent",
  headers: {
    Authorization: "In842CKq2NaqIetn", // 👈 agent key
  },
});

/* =====================
   ADD AGENT (POST)
===================== */
export const addAgent = async (formData) => {
  const res = await api.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* =====================
   GET ALL AGENTS
===================== */
export const getAgents = async () => {
  const res = await api.get("/");
  return res.data.Data; // ✅ array
};
/* =====================
   GET AGENT BY ID
===================== */
export const getAgentById = async (id) => {
  const res = await api.get("/");
  const item = res.data?.Data?.find((a) => a._id === id);
  return { Data: item || null };
};

/* =====================
   UPDATE AGENT
===================== */
export const updateAgent = async (id, data) => {
  const res = await api.patch(`/${id}`, data);
  return res.data;
};

/* =====================
   DELETE AGENT
===================== */
export const deleteAgent = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
