import { Grid, Typography } from '@mui/material';
import React from 'react';

const InfoFootnote = (): React.ReactElement => {
  return (
    <Grid item xs={12}>
      <Typography
        sx={{
          color: '#999999',
          fontSize: '14px',
          textAlign: 'left',
          marginTop: '25px',
          marginLeft: '3vw',
        }}
      >
        *Totals as average for squad
      </Typography>
    </Grid>
  );
};

export default InfoFootnote;
