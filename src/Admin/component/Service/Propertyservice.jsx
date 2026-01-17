import axios from "axios";

const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/properties",
  headers: {
    Authorization: "3K3BYd3gR7H98FEE",
  },
});

/* ADD PROPERTY */
export const addProperty = async (data) => {
  const res = await api.post("/", data);
  return res.data;
};

/* GET ALL */
export const getProperties = async () => {
  const res = await api.get("/");
  return res.data;
};

/* GET ONE */
export const getPropertyById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

/* UPDATE */
export const updateProperty = async (id, data) => {
  const res = await api.patch(`/${id}`, data);
  return res.data;
};

/* DELETE */
export const deleteProperty = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
