import { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';

export const useCategory = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useRecipe must be used within a BudgetProvider');
  }

  return context;
};
