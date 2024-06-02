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
  ingredients: [{ id: '1', name: 'Ingredient' }],
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
        { id: (state.ingredients.length + 1).toString(), name: 'Ingredient' },
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

  return state;
};
