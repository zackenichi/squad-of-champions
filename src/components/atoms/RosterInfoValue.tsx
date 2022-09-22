import { Grid, Typography } from '@mui/material';
import React from 'react';

const RosterInfoValue = (props: {
  label: string;
  aveValue?: number | null;
}): React.ReactElement => {
  const { label, aveValue } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: '700', fontSize: '24px' }}>
          {aveValue ? aveValue.toFixed(2) : '-'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RosterInfoValue;
