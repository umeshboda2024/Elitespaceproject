let locations = [
  {
    id: 1,
    city: "Ahmedabad",
    enabled: true,
    areas: [
      { id: 11, name: "Bopal", enabled: true },
      { id: 12, name: "Maninagar", enabled: true },
    ],
  },
  {
    id: 2,
    city: "Mumbai",
    enabled: true,
    areas: [
      { id: 21, name: "Andheri", enabled: true },
      { id: 22, name: "Borivali", enabled: false },
    ],
  },
];

export const getLocations = () => Promise.resolve(locations);

export const toggleCity = (id) => {
  locations = locations.map((c) =>
    c.id === id ? { ...c, enabled: !c.enabled } : c
  );
  return Promise.resolve();
};

export const toggleArea = (cityId, areaId) => {
  locations = locations.map((c) =>
    c.id === cityId
      ? {
          ...c,
          areas: c.areas.map((a) =>
            a.id === areaId ? { ...a, enabled: !a.enabled } : a
          ),
        }
      : c
  );
  return Promise.resolve();
};

export const addCity = (city) => {
  locations.push({
    id: Date.now(),
    city,
    enabled: true,
    areas: [],
  });
  return Promise.resolve();
};

export const addArea = (cityId, name) => {
  locations = locations.map((c) =>
    c.id === cityId
      ? {
          ...c,
          areas: [...c.areas, { id: Date.now(), name, enabled: true }],
        }
      : c
  );
  return Promise.resolve();
};

/* ---------- DELETE (NEW) ---------- */
export const deleteCity = (id) => {
  locations = locations.filter((c) => c.id !== id);
  return Promise.resolve();
};

export const deleteArea = (cityId, areaId) => {
  locations = locations.map((c) =>
    c.id === cityId
      ? {
          ...c,
          areas: c.areas.filter((a) => a.id !== areaId),
        }
      : c
  );
  return Promise.resolve();
};
