import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type FSThemeType = {
  isMobile: boolean;
};

export const useFSTheme = (): FSThemeType => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  return { isMobile };
};
