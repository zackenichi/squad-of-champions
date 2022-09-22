import { Box, TableCell, TableRow } from '@mui/material';
import React from 'react';

const EmptyBoard = (): React.ReactElement => {
  return (
    <TableRow>
      <TableCell>
        <Box
          sx={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
          }}
        ></Box>
      </TableCell>
    </TableRow>
  );
};

export default EmptyBoard;
