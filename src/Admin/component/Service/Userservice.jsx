let users = [
  {
    id: 1,
    name: "Amit Patel",
    email: "amit@gmail.com",
    phone: "9876543210",
    city: "Ahmedabad",
    status: "Active",
  },
  {
    id: 2,
    name: "Neha Singh",
    email: "neha@gmail.com",
    phone: "9123456789",
    city: "Delhi",
    status: "Blocked",
  },
  {
    id: 3,
    name: "Rohan Shah",
    email: "rohan@gmail.com",
    phone: "9988776655",
    city: "Mumbai",
    status: "Active",
  },
];

export const getUsers = () => {
  return Promise.resolve(users);
};

export const toggleUserStatus = (id) => {
  users = users.map((u) =>
    u.id === id
      ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
      : u
  );
  return Promise.resolve();
};

export const deleteUser = (id) => {
  users = users.filter((u) => u.id !== id);
  return Promise.resolve();
};
