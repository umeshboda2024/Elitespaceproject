// Dummy in-memory data (replace with backend later)
let agents = [
  {
    id: 1,
    name: "Rohan Shah",
    email: "rohan@gmail.com",
    phone: "9876543210",
    city: "Ahmedabad",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Malik",
    email: "priya@gmail.com",
    phone: "9123456789",
    city: "Mumbai",
    status: "Inactive",
  },
];

export const getAgents = () => {
  return Promise.resolve(agents);
};

export const addAgent = (agent) => {
  agents.push({ ...agent, id: Date.now(), status: "Active" });
  return Promise.resolve(agent);
};

export const deleteAgent = (id) => {
  agents = agents.filter((a) => a.id !== id);
  return Promise.resolve(id);
};

export const toggleAgentStatus = (id) => {
  agents = agents.map((a) =>
    a.id === id
      ? { ...a, status: a.status === "Active" ? "Inactive" : "Active" }
      : a
  );
  return Promise.resolve();
};
