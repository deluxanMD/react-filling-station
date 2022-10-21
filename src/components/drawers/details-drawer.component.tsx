import { SwipeableDrawer } from "@mui/material";
import { useFSTheme } from "../../hooks/theme.helpers";

type DetailsDrawerType = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const DetailsDrawer = ({
  open,
  handleOpen,
  handleClose,
}: DetailsDrawerType) => {
  const { isMobile } = useFSTheme();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <div style={{ width: isMobile ? "100%" : "42ch" }}></div>
    </SwipeableDrawer>
  );
};

export default DetailsDrawer;
