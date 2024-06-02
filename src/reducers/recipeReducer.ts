import { v4 as uuidv4 } from 'uuid';

export type RecipeActions =
  | { type: 'add-category'; payload: { category: Category } }
  | { type: 'add-ingredient' }
  | { type: 'remove-ingredient'; payload: { id: Ingredient['id'] } };

export type RecipeState = {
  recipes: [];
  categories: Category[];
  ingredients: Ingredient[];
};

export const initialState: RecipeState = {
  recipes: [],
  categories: [],
  ingredients: [{ id: 'DEFAULT', name: 'Ingredient' }],
};

export const recipeReducer = (
  state: RecipeState = initialState,
  action: RecipeActions
) => {
  if (action.type === 'add-category') {
    return {
      ...state,
    };
  }
  if (action.type === 'add-ingredient') {
    return {
      ...state,
      ingredients: [...state.ingredients, { id: uuidv4(), name: 'Ingredient' }],
    };
  }
  if (action.type === 'remove-ingredient') {
    const ingredients = state.ingredients.filter(
      (ingredient) => ingredient.id !== action.payload.id
    );

    return {
      ...state,
      ingredients,
    };
  }

  return state;
};
