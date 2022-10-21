import { CssBaseline } from "@mui/material";
import { Fragment } from "react";
import "./App.css";
import Map from "./pages/map/map.component";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Map />
    </Fragment>
  );
}

export default App;
