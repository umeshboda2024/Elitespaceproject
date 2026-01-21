import axios from "axios";

/* =====================
   CITY API INSTANCE
===================== */
const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/state",
  headers: {
    Authorization: "Y4m6iIEhi0gGJ4dP",
  },
});

/* =====================
   ADD CITY (POST)
===================== */
export const addCityProperty = async (formData) => {
  const res = await api.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* =====================
   GET ALL CITIES
===================== */
export const getCityProperties = async () => {
  const res = await api.get("/");
  return res.data;
};

/* =====================
   GET CITY BY ID
===================== */
export const getCityPropertyById = async (id) => {
  const res = await api.get("/");
  const item = res.data?.Data?.find((c) => c._id === id);
  return { Data: item || null };
};

/* =====================
   UPDATE CITY (NO IMAGE)
===================== */
export const updateCityProperty = async (id, data) => {
  const res = await api.patch(`/${id}`, data);
  return res.data;
};

/* =====================
   DELETE CITY
===================== */
export const deleteCityProperty = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
