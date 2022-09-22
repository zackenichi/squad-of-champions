import { Container, Grid } from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';
import { RosterTitle } from '../atoms';
import { RosterInfo, RosterPortraits } from '../molecules';

const Roster = (props: {
  myTeam: Character[];
  deleteMember: (id: number) => void;
}): React.ReactElement => {
  const { myTeam, deleteMember } = props;

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <RosterTitle myTeam={myTeam} />
        </Grid>
        <Grid item xs={12}>
          {myTeam.length > 0 && (
            <RosterPortraits roster={myTeam} deleteMember={deleteMember} />
          )}
        </Grid>
        <Grid item xs={12}>
          <RosterInfo myTeam={myTeam} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Roster;
