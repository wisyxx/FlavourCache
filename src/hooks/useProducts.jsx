import { useContext } from 'react';
import { ProductsContext } from '../contexts/products/ProductsContext';

// Returns products data from context
export const useProducts = () => useContext(ProductsContext);
