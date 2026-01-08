// This will later connect to backend
const properties = [
  {
    id: 1,
    title: "Luxury 3 BHK Apartment",
    location: "Ahmedabad",
    type: "Flat",
    status: "Available",
    price: "1.5 Cr",
  },
  {
    id: 2,
    title: "Modern 4 BHK Villa",
    location: "Surat",
    type: "Villa",
    status: "Sold",
    price: "3.2 Cr",
  },
];

export const getProperties = () => {
  return Promise.resolve(properties);
};

export const addProperty = (property) => {
  properties.push({ ...property, id: Date.now() });
  return Promise.resolve(property);
};

export const deleteProperty = (id) => {
  return Promise.resolve(id);
};
