import { useContext } from 'react';
import { ProductsContext } from '../contexts/products/ProductsContext';

export const useProducts = () => {
  useContext(ProductsContext); // Returns products data from context
};
