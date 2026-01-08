let reviews = [
  {
    id: 1,
    name: "Amit Patel",
    role: "Buyer",
    rating: 5,
    message: "Amazing service! Found my dream home easily.",
    property: "3 BHK Apartment, Ahmedabad",
    status: "Pending", // Pending | Approved | Hidden
    date: "2026-01-04",
  },
  {
    id: 2,
    name: "Neha Singh",
    role: "Tenant",
    rating: 4,
    message: "Very professional agents and smooth process.",
    property: "2 BHK Flat, Delhi",
    status: "Approved",
    date: "2026-01-03",
  },
];

export const getReviews = () => {
  return Promise.resolve(reviews);
};

export const updateReviewStatus = (id, status) => {
  reviews = reviews.map((r) => (r.id === id ? { ...r, status } : r));
  return Promise.resolve();
};

export const deleteReview = (id) => {
  reviews = reviews.filter((r) => r.id !== id);
  return Promise.resolve();
};
