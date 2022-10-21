import { Box } from "@mui/system";
import { FuelType } from "../../constants/fuel-types";
import { useFSTheme } from "../../hooks/theme.helpers";
import IconPills from "./icon-pills.component";
import "./icon-pills.styles.css";

type IconsPillsListType = {
  fuelTypes: FuelType[];
};

const IconsPillsList = ({ fuelTypes }: IconsPillsListType) => {
  const { isMobile } = useFSTheme();

  return (
    <Box id="icon-pills-list" sx={{ width: isMobile ? "100%" : "auto" }}>
      {fuelTypes.map((fuelType) => (
        <Box mr={1}>
          <IconPills label={fuelType.label} key={fuelType.id} />
        </Box>
      ))}
    </Box>
  );
};

export default IconsPillsList;
