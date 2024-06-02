export type Category = {
  id: string;
  name: string;
};
export type Ingredient = {
  id: string;
  name: string;
};
export type DraftRecipe = {
  name: string;
  ingredients: Ingredient[];
  instructions: string;
};
