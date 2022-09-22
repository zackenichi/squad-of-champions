import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import {
  logoHeight,
  logoWidth,
  MastHeadGap,
  logoOffset,
  MastHeight,
} from '../../constants';
import RosterLogo from '../../img/Mortal-Kombat-Logo.png';

const MastHead = (): React.ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ height: MastHeight, backgroundColor: '#000' }}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img
            src={RosterLogo}
            alt="Roster logo"
            style={{
              height: logoHeight,
              width: logoWidth,
              marginTop: logoOffset,
            }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ height: MastHeadGap }} />
    </Box>
  );
};

export default MastHead;
