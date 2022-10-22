import { Box } from "@mui/material";
import { useState } from "react";
import { Center } from "../../App";
import DetailsDrawer from "../../components/drawers/details-drawer.component";
import SearchInput from "../../components/forms/search-input.component";
import IconsPillsList from "../../components/icon-pills-list/icon-pills-list.component";
import MapComponent from "../../components/map/map.component";
import { FUEL_TYPES } from "../../constants/fuel-types";
import { useFSTheme } from "../../hooks/theme.helpers";

type MapType = {
  center: Center;
};

const Map = ({ center }: MapType) => {
  const [open, setOpen] = useState<boolean>(false);

  const { isMobile } = useFSTheme();

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleSearch = () => {
    toggleDrawer(true);
  };

  const handleClose = () => {
    toggleDrawer(false);
  };

  return (
    <Box>
      <Box
        flexDirection={isMobile ? "column" : "row"}
        display="flex"
        alignItems="center"
        position="absolute"
      >
        <SearchInput handleSearch={handleSearch} handleClose={handleClose} />
        <IconsPillsList fuelTypes={FUEL_TYPES} />
      </Box>
      <DetailsDrawer
        open={open}
        handleOpen={() => toggleDrawer(true)}
        handleClose={() => toggleDrawer(false)}
      />
      <MapComponent center={center} />
    </Box>
  );
};

export default Map;
