import { Typography } from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';

const RosterTitle = (props: { myTeam: Character[] }): React.ReactElement => {
  const { myTeam } = props;
  return (
    <Typography
      sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '28px' }}
    >
      {myTeam.length > 0
        ? 'Your champions!'
        : 'Select your squad to defend earthrealm'}
    </Typography>
  );
};

export default RosterTitle;
