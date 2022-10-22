import { useState } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./search-input.styles.css";
import { useFSTheme } from "../../hooks/theme.helpers";

type SearchInputType = {
  handleSearch: () => void;
  handleClose: () => void;
};

const SearchInput = ({ handleSearch, handleClose }: SearchInputType) => {
  const [value, setValue] = useState<string>("");

  const { isMobile } = useFSTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, mt: 3, width: isMobile ? "95%" : "40ch", zIndex: 9999 }}
    >
      <FilledInput
        id="search-input"
        value={value}
        onChange={handleChange}
        endAdornment={
          <>
            <InputAdornment
              position="end"
              id="search-icon"
              sx={{ mr: 1 }}
              onClick={handleSearch}
            >
              <SearchIcon />
            </InputAdornment>
            <Divider orientation="vertical" flexItem />
            <InputAdornment
              position="end"
              id="close-icon"
              onClick={handleClose}
            >
              <CloseIcon />
            </InputAdornment>
          </>
        }
      />
    </FormControl>
  );
};

export default SearchInput;
