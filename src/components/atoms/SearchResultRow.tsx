import {
  Avatar,
  Checkbox,
  Grid,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';
import FilterTag from './FilterTag';

const SearchResultRow = (props: {
  charData: Character;
  myTeam: Character[];
  addMember: (character: Character) => void;
  deleteMember: (id: number) => void;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement => {
  const { charData, myTeam, addMember, deleteMember, setOpenSnackbar } = props;

  const [checked, setChecked] = React.useState<boolean>(false);
  const [inTeam, setInTeam] = React.useState<boolean>(false);

  React.useEffect(() => {
    setInTeam(myTeam.includes(charData));
  }, [charData, myTeam]);

  React.useEffect(() => {
    if (!inTeam) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [inTeam]);

  const handleUpdateRoster = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (myTeam.length < 6) {
        setChecked(true);
        addMember(charData);
      } else {
        setChecked(false);
        setOpenSnackbar(true);
      }
    } else {
      setChecked(false);
      deleteMember(charData.id);
    }
  };

  return (
    <TableRow
      sx={{
        background: inTeam ? '#EDF5FF' : 'none',
        '&:hover': {
          background: '#EDF5FF',
        },
        columnGap: '0px',
      }}
    >
      <TableCell align="left" padding="none">
        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <Checkbox
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              checked={checked}
              onChange={handleUpdateRoster}
            />
          </Grid>

          <Grid item>
            <Avatar
              src={charData.thumbnail}
              sx={{ width: 40, height: 40, border: '1px solid #217AFF' }}
            />
          </Grid>

          <Grid item>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              {charData.name}
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        {charData?.tags?.map((tag) => {
          return <FilterTag label={tag.tag_name} key={tag.slot} />;
        })}
      </TableCell>
      {charData.abilities.map((ability) => {
        const rate = ability.abilityScore;
        return (
          <TableCell
            key={ability.abilityName}
            sx={{
              fontSize: '24px',
              fontWeight: '700',
              textAlign: 'center',
              color: rate === 10 ? 'red' : 'black',
            }}
          >
            {rate}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default SearchResultRow;
