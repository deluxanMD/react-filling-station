import { SwipeableDrawer } from "@mui/material";

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
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <p>Details</p>
    </SwipeableDrawer>
  );
};

export default DetailsDrawer;
