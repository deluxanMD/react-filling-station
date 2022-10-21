import { Box } from "@mui/material";
import { useState } from "react";
import DetailsDrawer from "../../components/drawers/details-drawer.component";
import SearchInput from "../../components/forms/search-input.component";
import IconsPillsList from "../../components/icon-pills/icon-pills-list.component";
import { FUEL_TYPES } from "../../constants/fuel-types";
import { useFSTheme } from "../../hooks/theme.helpers";

const Map = () => {
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
    <Box sx={{ height: "100vh" }}>
      <Box
        flexDirection={isMobile ? "column" : "row"}
        display="flex"
        alignItems="center"
      >
        <SearchInput handleSearch={handleSearch} handleClose={handleClose} />
        <IconsPillsList fuelTypes={FUEL_TYPES} />
      </Box>
      <DetailsDrawer
        open={open}
        handleOpen={() => toggleDrawer(true)}
        handleClose={() => toggleDrawer(false)}
      />
    </Box>
  );
};

export default Map;
