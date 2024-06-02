import { v4 as uuidv4 } from 'uuid';
import { Ingredient, Category, Recipe, DraftRecipe } from '../types';

export type RecipeActions =
  | { type: 'add-recipe'; payload: { recipe: DraftRecipe } }
  | { type: 'add-ingredient' }
  | {
      type: 'set-ingredient-value';
      payload: { value: Ingredient['value']; id: Ingredient['id'] };
    }
  | { type: 'remove-ingredient'; payload: { id: Ingredient['id'] } }
  | { type: 'add-category'; payload: { category: Category } };

export type RecipeState = {
  recipes: Recipe[];
  categories: Category[];
  ingredients: Ingredient[];
};

export const initialState: RecipeState = {
  recipes: [],
  categories: [],
  ingredients: [{ id: 'DEFAULT', name: 'Ingredient', value: '' }],
};

/* Adds an ID to the recipe  */
const createRecipe = (recipe: DraftRecipe) => {
  return {
    ...recipe,
    id: uuidv4(),
  };
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
      ingredients: [
        ...state.ingredients,
        { id: uuidv4(), name: 'Ingredient', value: '' },
      ],
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
  if (action.type === 'add-recipe') {
    return {
      ...state,
      recipes: [...state.recipes, createRecipe(action.payload.recipe)],
    };
  }
  if (action.type === 'set-ingredient-value') {
    return {
      ...state,
      ingredients: state.ingredients.map((ingredient) =>
        ingredient.id === action.payload.id
          ? { ...ingredient, value: action.payload.value }
          : ingredient
      ),
    };
  }

  return state;
};
