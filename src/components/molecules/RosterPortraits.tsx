import { Grid } from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';
import { RosterPortrait } from '../atoms';

const RosterPortraits = (props: {
  roster: Character[];
  deleteMember: (id: number) => void;
}): React.ReactElement => {
  const { roster, deleteMember } = props;

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {roster.map((member) => {
        return (
          <Grid item key={member.id}>
            <RosterPortrait member={member} deleteMember={deleteMember} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RosterPortraits;
