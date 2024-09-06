import { v4 as uuidv4 } from 'uuid';
import { Category, DraftCategory } from '../types';

export type CategoryActions =
  | { type: 'add-category'; payload: { category: DraftCategory } }
  | { type: 'update-category'; payload: { category: DraftCategory } }
  | { type: 'remove-category'; payload: { category: Category } }
  | { type: 'set-editing-id'; payload: { id: Category['id'] } }
  | { type: 'remove-editing-id' };

export type CategoryState = {
  categories: Category[];
  editingId: Category['id'];
};

const initialCategories = (): Category[] => {
  const categories = localStorage.getItem('categories');
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

  if (action.type === 'update-category') {
    const updatedRecipes = state.categories.map((category) => {
      if (category.id === state.editingId) {
        category = {
          ...category,
          name: action.payload.category.name,
        };
      }
      return category;
    });

    return {
      ...state,
      categories: updatedRecipes,
    };
  }

  if (action.type === 'set-editing-id') {
    return {
      ...state,
      editingId: action.payload.id,
    };
  }

  if (action.type === 'remove-editing-id') {
    return {
      ...state,
      editingId: '',
    };
  }

  return state;
};
