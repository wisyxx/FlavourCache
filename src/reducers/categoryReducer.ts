import { v4 as uuidv4 } from 'uuid';
import { Category, DraftCategory } from '../types';

export type CategoryActions =
  | { type: 'add-category'; payload: { category: DraftCategory } }
  | { type: 'remove-category'; payload: { category: Category } };

export type CategoryState = {
  categories: Category[];
  editingId: Category['id'];
};

const initialCategories = (): Category[] => {
  const categories = localStorage.getItem('recipes');
  return categories ? JSON.parse(categories) : [];
};

export const initialState: CategoryState = {
  categories: initialCategories(),
  editingId: '',
};

/* Adds an ID to the category  */
const createCategory = (category: DraftCategory) => {
  return {
    ...category,
    id: uuidv4(),
  };
};

export const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryActions
) => {
  if (action.type === 'add-category') {
    return {
      ...state,
      categories: [
        ...state.categories,
        createCategory(action.payload.category),
      ],
    };
  }

  return state;
};
