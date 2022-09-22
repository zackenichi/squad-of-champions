import { Avatar } from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';

const RosterPortrait = (props: {
  member: Character;
  deleteMember: (id: number) => void;
}): React.ReactElement => {
  const { member, deleteMember } = props;
  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <Avatar
      onClick={() => deleteMember(member.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      src={hovered ? undefined : member.image}
      sx={{
        width: 80,
        height: 80,
        border: '1px solid #217AFF',
        cursor: 'pointer',
        '&:hover': { background: '#75AEFF' },
      }}
    >
      Remove
    </Avatar>
  );
};

export default RosterPortrait;
