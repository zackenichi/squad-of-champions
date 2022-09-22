import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Box,
  Snackbar,
  IconButton,
} from '@mui/material';
import React from 'react';
import { Character } from 'src/resources/types';
import { EmptyBoard, ResultsPagination, SearchResultRow } from '../atoms';
import CloseIcon from '@mui/icons-material/Close';

const SearchResults = (props: {
  data: Character[];
  filteredTags: string[];
  searchTerm: string;
  myTeam: Character[];
  addMember: (character: Character) => void;
  deleteMember: (id: number) => void;
  showTeam: boolean;
}): React.ReactElement => {
  const {
    data: CharacterData,
    filteredTags,
    searchTerm,
    myTeam,
    addMember,
    deleteMember,
    showTeam,
  } = props;

  const [openSnackBar, setOpenSnackbar] = React.useState<boolean>(false);

  const searched: Character[] = CharacterData.filter((char) => {
    return (
      char?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char?.tags?.find((tag) => {
        return tag?.tag_name.includes(searchTerm.toLowerCase());
      })
    );
  });

  const char: Character[] = filteredTags
    .map((selectedTag) => {
      return CharacterData.filter((character) => {
        return character?.tags?.find((tag) => {
          return tag?.tag_name === selectedTag;
        });
      });
    })
    .flat(1);

  let filteredCharacters: Character[] =
    char.length > 0
      ? searched
          .filter((character) => char.includes(character))
          .filter((char, index, self) => {
            return self.indexOf(char) === index;
          })
      : [...char, ...searched].filter((char, index, self) => {
          return self.indexOf(char) === index;
        });

  // if my team is clicked

  filteredCharacters = showTeam ? [...myTeam] : filteredCharacters;

  // pagination

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 5;

  const lastIndexOfPage = currentPage * itemsPerPage;
  const firstIndexOfPage = lastIndexOfPage - itemsPerPage;

  const charactersPerPageArray = filteredCharacters.slice(
    firstIndexOfPage,
    lastIndexOfPage
  );

  const charactersTotalPage = Math.ceil(
    filteredCharacters.length / itemsPerPage
  );

  // if filter or search term changed, go back to page 1
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filteredTags, searchTerm]);

  return (
    <Container component={Paper} maxWidth="lg" sx={{ borderRadius: '20px' }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                width="30%"
                sx={{ fontWeight: 'bold', fontSize: '20px' }}
              >
                Character
              </TableCell>
              <TableCell
                width="30%"
                sx={{ fontWeight: 'bold', fontSize: '20px' }}
              >
                Tags
              </TableCell>
              <TableCell
                width="8%"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  textAlign: 'center',
                }}
              >
                Power
              </TableCell>
              <TableCell
                width="8%"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  textAlign: 'center',
                }}
              >
                Mobility
              </TableCell>
              <TableCell
                width="8%"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  textAlign: 'center',
                }}
              >
                Technique
              </TableCell>
              <TableCell
                width="8%"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  textAlign: 'center',
                }}
              >
                Survivabilty
              </TableCell>
              <TableCell
                width="8%"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  textAlign: 'center',
                }}
              >
                Energy
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ background: '#FFF' }}>
            {searched?.length > 0 || filteredTags?.length > 0 ? (
              charactersPerPageArray?.map((character: Character) => {
                return (
                  <SearchResultRow
                    setOpenSnackbar={setOpenSnackbar}
                    key={character?.id}
                    charData={character}
                    myTeam={myTeam}
                    addMember={addMember}
                    deleteMember={deleteMember}
                  />
                );
              })
            ) : (
              <EmptyBoard />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85px',
        }}
      >
        <ResultsPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          charactersTotalPage={charactersTotalPage}
        />
      </Box>
      <Snackbar
        open={openSnackBar}
        message="Only 6 team members allowed"
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        action={
          <IconButton onClick={() => setOpenSnackbar(false)}>
            <CloseIcon sx={{ fill: '#FFF' }} />
          </IconButton>
        }
      />
    </Container>
  );
};

export default SearchResults;
