import { Chip } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

type IconPillsType = {
  label: string;
};

const IconPills = ({ label }: IconPillsType) => {
  return <Chip icon={<LocalGasStationIcon />} label={label} />;
};

export default IconPills;
