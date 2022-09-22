import { Chip } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const FilterTag = (props: {
  label: string;
  filteredTags?: string[];
  handleSetFilter?: (tag: string) => void;
  handleRemoveFilter?: (label: string) => void;
}): React.ReactElement => {
  const { label, filteredTags, handleSetFilter, handleRemoveFilter } = props;

  const [toggleTeam, setToggleTeam] = React.useState<boolean>(false);

  const isInArray = filteredTags?.some((tag) => {
    return tag === label;
  });

  const handleToggleFilter = () => {
    if (label === 'My Team' && handleSetFilter) {
      setToggleTeam((toggle) => !toggle);
      handleSetFilter(label);
    } else {
      if (handleSetFilter) {
        if (isInArray && handleRemoveFilter) {
          handleRemoveFilter(label);
        } else {
          handleSetFilter(label);
        }
      }
    }
  };

  return (
    <Chip
      label={label}
      variant={isInArray || toggleTeam ? 'filled' : 'outlined'}
      icon={
        isInArray || toggleTeam ? (
          <CheckIcon sx={{ fill: '#FFF' }} />
        ) : undefined
      }
      sx={{
        color: isInArray || toggleTeam ? '#FFF' : '#217AFF',
        borderColor: '#217AFF',
        borderRadius: '20px',
        fontSize: '18px',
        padding: '18px 10px',
        textTransform: 'capitalize',
        margin: '5px',
        background: isInArray || toggleTeam ? '#217AFF' : '#FFF',
        cursor: handleSetFilter && 'pointer',
        '&:hover': {
          background: filteredTags || toggleTeam ? '#217AFF' : 'auto',
        },
      }}
      onClick={handleSetFilter ? handleToggleFilter : undefined}
    />
  );
};

export default FilterTag;
