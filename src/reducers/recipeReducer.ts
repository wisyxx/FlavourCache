import { v4 as uuidv4 } from 'uuid';
import { Ingredient, Category, Recipe, DraftRecipe } from '../types';

export type RecipeActions =
  | { type: 'add-recipe'; payload: { recipe: DraftRecipe } }
  | { type: 'set-editing-id'; payload: { id: Recipe['id'] } }
  | { type: 'remove-recipe'; payload: { id: Recipe['id'] } }
  | { type: 'remove-editinId' }
  | { type: 'add-category'; payload: { category: Category } };

export type RecipeState = {
  recipes: Recipe[];
  categories: Category[];
  editingId: Recipe['id'];
};

const initialRecipes = (): Recipe[] => {
  const recipes = localStorage.getItem('recipes');
  return recipes ? JSON.parse(recipes) : [];
};

export const initialState: RecipeState = {
  recipes: initialRecipes(),
  categories: [],
  editingId: '',
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
  if (action.type === 'add-recipe') {
    return {
      ...state,
      recipes: [...state.recipes, createRecipe(action.payload.recipe)],
    };
  }
  if (action.type === 'remove-recipe') {
    const recipes = state.recipes.filter(
      (recipe) => recipe.id !== action.payload.id
    );

    return {
      ...state,
      recipes,
    };
  }
  if (action.type === 'set-editing-id') {
    return {
      ...state,
      editingId: action.payload.id,
    };
  }
  if (action.type === 'remove-editinId') {
    return {
      ...state,
      editingId: '',
    };
  }

  return state;
};
