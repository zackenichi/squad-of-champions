import { Container } from '@mui/system';
import React from 'react';

import './App.css';
import { ContentArea, MastHead } from './components/organisms';

function App() {
  return (
    <>
      <MastHead />
      <Container disableGutters maxWidth="xl">
        <ContentArea />
      </Container>
    </>
  );
}

export default App;
