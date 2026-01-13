import axios from "axios";

const API_URL = "https://generateapi.techsnack.online/api/properties";
const PROJECT_KEY = "eQTHfzOnseFMw1Mk";

// ✅ Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: PROJECT_KEY,
  },
});

// ✅ GET all properties
export const getProperties = async () => {
  const res = await api.get("/");
  return res.data;
};

export const getPropertyById = async (id) => {
  const res = await api.get(`/`);
  return res.data;
};

// ✅ POST add property (image upload)
export const addProperty = async (propertyData) => {
  const res = await api.post("/", propertyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

// ✅ UPDATE property
export const updateProperty = async (id, updatedData) => {
  const res = await api.patch(`/${id}`, updatedData);
  return res.data;
};

// ✅ DELETE property
export const deleteProperty = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
