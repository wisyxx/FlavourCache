export type RecipeActions = {
  type: 'add-category';
  payload: { category: Category };
};

export type RecipeState = {
  recipes: [];
  categories: Category[];
};

export const initialState: RecipeState = {
  recipes: [],
  categories: [],
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

  return state;
};
