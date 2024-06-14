import { v4 as uuidv4 } from 'uuid';
import { Recipe, DraftRecipe } from '../types';

export type RecipeActions =
  | { type: 'add-recipe'; payload: { recipe: DraftRecipe } }
  | { type: 'set-editing-id'; payload: { id: Recipe['id'] } }
  | { type: 'remove-recipe'; payload: { id: Recipe['id'] } }
  | { type: 'update-recipe'; payload: { recipe: DraftRecipe } }
  | { type: 'remove-editinId' };

export type RecipeState = {
  recipes: Recipe[];
  editingId: Recipe['id'];
};

const initialRecipes = (): Recipe[] => {
  const recipes = localStorage.getItem('recipes');
  return recipes ? JSON.parse(recipes) : [];
};

export const initialState: RecipeState = {
  recipes: initialRecipes(),
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
  if (action.type === 'update-recipe') {
    const updatedRecipes = state.recipes.map((recipe) => {
      const { name, instructions, ingredients } = action.payload.recipe;
      if (recipe.id === state.editingId) {
        recipe = {
          ...recipe,
          id: uuidv4(),
          ingredients: ingredients.map((ingredient) => ingredient),
          name,
          instructions,
        };
      }
      return recipe;
    });

    return {
      ...state,
      recipes: updatedRecipes,
    };
  }

  return state;
};
