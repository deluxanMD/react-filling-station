import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { IconChip } from "./icon-pills.styles";

type IconPillsType = {
  label: string;
};

const IconPills = ({ label }: IconPillsType) => {
  return <IconChip icon={<LocalGasStationIcon />} label={label} />;
};

export default IconPills;
