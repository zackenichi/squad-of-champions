import { Box, Button } from '@mui/material';
import React from 'react';
import type { Character, CharacterTag } from '../../resources/types';
import { FilterTag } from '../atoms';

const ChampionFilters = (props: {
  data: Character[];
  filteredTags: string[];
  setFilteredTags: React.Dispatch<React.SetStateAction<string[]>>;
  handleShowTeam: () => void;
}): React.ReactElement => {
  const { data, filteredTags, setFilteredTags, handleShowTeam } = props;

  const tag_data: CharacterTag[] = data
    .map((tag) => {
      return tag.tags;
    })
    .flat();

  // get unique tags
  const tags = tag_data
    .map((tag) => {
      return tag?.tag_name;
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index && value !== undefined;
    });

  const handleSetFilter = (tag: string) => {
    setFilteredTags([...filteredTags, tag]);
  };

  const handleRemoveFilter = (label: string) => {
    const tagsCopy = [...filteredTags];
    const updatedTags = tagsCopy.filter((tag) => {
      return tag !== label;
    });

    setFilteredTags(updatedTags);
  };

  const handleClear = () => {
    setFilteredTags([]);
  };

  return (
    <Box>
      {tags.map((tag, index) => {
        return (
          <FilterTag
            key={index.toString()}
            label={tag}
            filteredTags={filteredTags}
            handleSetFilter={handleSetFilter}
            handleRemoveFilter={handleRemoveFilter}
          />
        );
      })}
      <FilterTag label="My Team" handleSetFilter={handleShowTeam} />
      <Button
        onClick={handleClear}
        variant="text"
        sx={{
          color: '#999999',
          textTransform: 'none',
          textDecoration: 'underline',
          fontSize: '20px',
          borderRadius: '20px',
          '&:hover': {
            background: 'none',
          },
        }}
      >
        Clear all
      </Button>
    </Box>
  );
};

export default ChampionFilters;
