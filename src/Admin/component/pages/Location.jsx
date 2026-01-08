import { useEffect, useState } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import LocationCard from "../Componets/locationcard";
import {
  getLocations,
  toggleCity,
  toggleArea,
  addCity,
  addArea,
  deleteArea,
  deleteCity,
} from "../Service/Locationservice";

export default function Locations() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    getLocations().then(setData);
  }, []);

  const refresh = () => getLocations().then(setData);

  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Cities & Locations
      </Typography>

      {/* ADD CITY */}
      <Box display="flex" gap={1} mb={3}>
        <TextField
          size="small"
          placeholder="Add new city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            addCity(city);
            setCity("");
            refresh();
          }}
        >
          Add City
        </Button>
      </Box>

      <Grid container spacing={3}>
        {data.map((city) => (
          <Grid item xs={12} md={6} key={city.id}>
            <LocationCard
              city={city}
              onToggleCity={(id) => {
                toggleCity(id);
                refresh();
              }}
              onToggleArea={(cityId, areaId) => {
                toggleArea(cityId, areaId);
                refresh();
              }}
              onAddArea={(cityId, name) => {
                addArea(cityId, name);
                refresh();
              }}
              onDeleteCity={(id) => {
                deleteCity(id);
                refresh();
              }}
              onDeleteArea={(cityId, areaId) => {
                deleteArea(cityId, areaId);
                refresh();
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
