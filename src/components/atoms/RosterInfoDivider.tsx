import { Divider, Grid } from '@mui/material';
import React from 'react';

const RosterInfoDivider = (): React.ReactElement => {
  return (
    <Grid item xs={1} container justifyContent="center">
      <Divider orientation="vertical" />
    </Grid>
  );
};

export default RosterInfoDivider;
