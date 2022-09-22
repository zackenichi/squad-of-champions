import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement => {
  const { keyword, setKeyword } = props;

  const handleChangeKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  // search using character name and tag field

  return (
    <TextField
      variant="outlined"
      fullWidth
      value={keyword}
      onChange={handleChangeKeywords}
      placeholder="Search Characters..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
