import axios from "axios";

const API_URL = "https://generateapi.techsnack.online/api/signup";
const TOKEN = "XI9aLT2keHbs64RP";

export const getUsers = async () => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: TOKEN },
  });
  return res.data.Data; // 🔥 important
};

export const toggleUserStatus = async (id, status) => {
  return axios.patch(
    `${API_URL}/${id}`,
    { status },
    { headers: { Authorization: TOKEN } }
  );
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: TOKEN },
  });
};
