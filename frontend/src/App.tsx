import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import MainPage from './MainPage';

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <MainPage/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
