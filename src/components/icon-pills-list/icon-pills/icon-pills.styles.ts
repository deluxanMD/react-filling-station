import { styled } from "@mui/material";
import { Chip } from "@mui/material";

export const IconChip = styled(Chip)`
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: #fff;
  }
`;
