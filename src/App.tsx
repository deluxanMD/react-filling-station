import { CssBaseline } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Map from "./pages/map/map.component";

export type Center = {
  lat: number;
  lng: number;
};

const App = () => {
  const [center, setCenter] = useState<Center>({ lat: 0, lng: 0 });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Map center={center} />
    </Fragment>
  );
};

export default App;
