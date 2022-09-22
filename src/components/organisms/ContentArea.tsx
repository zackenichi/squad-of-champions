import { Grid } from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';
import { SearchAndFilter, SearchResults } from '../molecules';
import Roster from './Roster';

import jsonData from '../../data/characters.json';

const ContentArea = (): React.ReactElement => {
  const data: Character[] = jsonData as Character[];
  const [filteredTags, setFilteredTags] = React.useState<string[]>([]);
  const [keyword, setKeyword] = React.useState<string>('');
  const [myTeam, setMyTeam] = React.useState<Character[]>([]);
  const [showTeam, setShowTeam] = React.useState<boolean>(false);

  const addMember = (character: Character) => {
    const teamCopy = [...myTeam];

    setMyTeam([...teamCopy, character]);
  };

  const deleteMember = (id: number) => {
    const teamCopy = [...myTeam];

    const newTeam = teamCopy.filter((member) => {
      return member.id !== id;
    });

    setMyTeam(newTeam);
  };

  const handleShowTeam = () => {
    setShowTeam((toggle) => !toggle);
  };

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <Roster myTeam={myTeam} deleteMember={deleteMember} />
      </Grid>
      <Grid item xs={12}>
        <SearchAndFilter
          data={data}
          filteredTags={filteredTags}
          setFilteredTags={setFilteredTags}
          keyword={keyword}
          setKeyword={setKeyword}
          handleShowTeam={handleShowTeam}
        />
      </Grid>
      <Grid item xs={12}>
        <SearchResults
          data={data}
          filteredTags={filteredTags}
          searchTerm={keyword}
          myTeam={myTeam}
          addMember={addMember}
          deleteMember={deleteMember}
          showTeam={showTeam}
        />
      </Grid>
    </Grid>
  );
};

export default ContentArea;
