import { FuelType } from "../../constants/fuel-types";
import { useFSTheme } from "../../hooks/theme.helpers";
import IconPills from "./icon-pills/icon-pills.component";
import * as S from "./icon-pills-list.styles";

type IconsPillsListType = {
  fuelTypes: FuelType[];
};

const IconsPillsList = ({ fuelTypes }: IconsPillsListType) => {
  const { isMobile } = useFSTheme();

  return (
    <S.Container sx={{ width: isMobile ? "100%" : "auto" }}>
      {fuelTypes.map((fuelType) => (
        <S.PillsContainer mr={1} key={fuelType.id}>
          <IconPills label={fuelType.label} />
        </S.PillsContainer>
      ))}
    </S.Container>
  );
};

export default IconsPillsList;
