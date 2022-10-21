import { Box } from "@mui/material";
import { useState } from "react";
import DetailsDrawer from "../../components/drawers/details-drawer.component";
import SearchInput from "../../components/forms/search-input.component";

const Map = () => {
  const [open, setOpen] = useState<boolean>(false);

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
    <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
      <SearchInput handleSearch={handleSearch} handleClose={handleClose} />
      <DetailsDrawer
        open={open}
        handleOpen={() => toggleDrawer(true)}
        handleClose={() => toggleDrawer(false)}
      />
    </Box>
  );
};

export default Map;
