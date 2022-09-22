import { Grid } from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';
import { SearchBar } from '../atoms';
import ChampionFilters from './ChampionFilters';

const SearchAndFilter = (props: {
  data: Character[];
  filteredTags: string[];
  setFilteredTags: React.Dispatch<React.SetStateAction<string[]>>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  handleShowTeam: () => void;
}): React.ReactElement => {
  const {
    data,
    filteredTags,
    setFilteredTags,
    keyword,
    setKeyword,
    handleShowTeam,
  } = props;

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item md={3} xs={12} />
      <Grid item md={6} xs={12}>
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
      </Grid>
      <Grid item md={3} xs={12} />
      <Grid item xs={12}>
        <ChampionFilters
          data={data}
          filteredTags={filteredTags}
          setFilteredTags={setFilteredTags}
          handleShowTeam={handleShowTeam}
        />
      </Grid>
    </Grid>
  );
};

export default SearchAndFilter;
