import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App.tsx';
import './index.css';
import { RecipeProvider } from './contexts/RecipeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecipeProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RecipeProvider>
  </React.StrictMode>
);
