import axios from "axios";

const api = axios.create({
  baseURL: "https://generateapi.techsnack.online/api/review",
  headers: {
    Authorization: "9CU7Xtj6ac2vyvgV",
  },
});

export const getReviews = async () => {
  return api.get("/");
};
export const addReview = async (data) => {
  return api.post("/", data);
};

export const updateReviewStatus = async (id, status) => {
  return api.patch(`/${id}`, { status });
};

export const deleteReview = async (id) => {
  return api.delete(`/${id}`);
};
