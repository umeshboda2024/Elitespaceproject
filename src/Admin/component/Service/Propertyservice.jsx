import axios from "axios";

const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/properties",
  headers: {
    Authorization: "3K3BYd3gR7H98FEE",
  },
});

/* ADD PROPERTY */
export const addProperty = async (formData) => {
  const res = await api.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* GET ALL */
export const getProperties = async () => {
  const res = await api.get("/");
  return res.data;
};

/* GET ONE (API DOES NOT SUPPORT /:id so workaround) */
export const getPropertyById = async (id) => {
  const res = await api.get("/");
  const item = res.data?.Data?.find((p) => p._id === id);
  return { Data: item };
};

/* UPDATE PROPERTY (PATCH REQUIRED) */
export const updateProperty = async (id, formData) => {
  const res = await api.patch(`/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

/* DELETE */
export const deleteProperty = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};
