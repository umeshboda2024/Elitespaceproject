import axios from "axios";

const API_URL = "https://generateapi.techsnack.online/api/properties";
const PROJECT_KEY = "eQTHfzOnseFMw1Mk";

// 🔹 Axios instance
const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/properties",
  headers: {
    projectkey: PROJECT_KEY, // ✅ CORRECT HEADER
  },
});

// ✅ GET
export const getProperties = async () => {
  const res = await api.get(
    "https://generateapi.techsnack.online/api/properties"
  );
  return res.data;
};

// ✅ POST (IMAGE UPLOAD)
export const addProperty = async (propertyData) => {
  const res = await api.post(
    "https://generateapi.techsnack.online/api/properties",
    propertyData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

// ✅ UPDATE
export const updateProperty = async (id, updatedData) => {
  const res = await api.patch(
    `https://generateapi.techsnack.online/api/properties/${id}`,
    updatedData
  );
  return res.data;
};

// ✅ DELETE
export const deleteProperty = async (id) => {
  const res = await api.delete(
    `https://generateapi.techsnack.online/api/properties/${id}`
  );
  return res.data;
};
