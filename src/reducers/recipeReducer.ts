import { v4 as uuidv4 } from 'uuid';
import { Recipe, DraftRecipe, Category } from '../types';

export type RecipeActions =
  | { type: 'add-recipe'; payload: { recipe: DraftRecipe } }
  | { type: 'set-editing-id'; payload: { id: Recipe['id'] } }
  | { type: 'remove-recipe'; payload: { id: Recipe['id'] } }
  | { type: 'update-recipe'; payload: { recipe: DraftRecipe } }
  | { type: 'remove-editing-id' }
  | { type: 'filter'; payload: { filter: Category['name'] } };

export type RecipeState = {
  recipes: Recipe[];
  filter: Category['name'];
  editingId: Recipe['id'];
};

const initialRecipes = (): Recipe[] => {
  const recipes = localStorage.getItem('recipes');
  return recipes ? JSON.parse(recipes) : [];
};

export const initialState: RecipeState = {
  recipes: initialRecipes(),
  filter: 'All',
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
  if (action.type === 'remove-editing-id') {
    return {
      ...state,
      editingId: '',
    };
  }
  if (action.type === 'update-recipe') {
    const updatedRecipes = state.recipes.map((recipe) => {
      const { name, instructions, ingredients, category } =
        action.payload.recipe;
      if (recipe.id === state.editingId) {
        recipe = {
          ...recipe,
          id: uuidv4(),
          ingredients: ingredients.map((ingredient) => ingredient),
          name,
          instructions,
          category,
        };
      }
      return recipe;
    });

    return {
      ...state,
      recipes: updatedRecipes,
    };
  }

  if (action.type === 'filter') {
    return {
      ...state,
      filter: action.payload.filter,
    };
  }

  return state;
};
