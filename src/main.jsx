import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { ProductsProvider } from './contexts/products/ProductsContext';
import './Globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
