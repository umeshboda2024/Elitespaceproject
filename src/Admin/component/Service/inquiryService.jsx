let inquiries = [
  {
    id: 1,
    name: "Rohan Shah",
    phone: "9876543210",
    email: "rohan@gmail.com",
    property: "3 BHK Apartment",
    city: "Ahmedabad",
    status: "New",
    priority: "Hot",
    date: "2026-01-05",
  },
  {
    id: 2,
    name: "Neha Singh",
    phone: "9123456789",
    email: "neha@gmail.com",
    property: "4 BHK Villa",
    city: "Delhi",
    status: "Contacted",
    priority: "Normal",
    date: "2026-01-04",
  },
];

export const getInquiries = () => {
  return Promise.resolve(inquiries);
};

export const updateInquiryStatus = (id, status) => {
  inquiries = inquiries.map((i) => (i.id === id ? { ...i, status } : i));
  return Promise.resolve();
};

export const deleteInquiry = (id) => {
  inquiries = inquiries.filter((i) => i.id !== id);
  return Promise.resolve();
};
