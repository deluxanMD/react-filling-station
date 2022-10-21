import { Box } from "@mui/material";
import { useState } from "react";
import DetailsDrawer from "../../components/details-drawer/details-drawer.component";

const Map = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
      <DetailsDrawer
        open={open}
        handleOpen={() => toggleDrawer(true)}
        handleClose={() => toggleDrawer(false)}
      />
    </Box>
  );
};

export default Map;
