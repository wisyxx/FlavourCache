import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App.tsx';
import './index.css';
import { RecipeProvider } from './contexts/RecipeContext.tsx';
import { CategoryProvider } from './contexts/CategoryContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CategoryProvider>
      <RecipeProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RecipeProvider>
    </CategoryProvider>
  </React.StrictMode>
);
