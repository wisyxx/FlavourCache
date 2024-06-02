export type Category = {
  id: string;
  name: string;
};
export type Ingredient = {
  id: string;
  name: string; // The name of the input
  value: string;
};
export type DraftRecipe = {
  name: string;
  ingredients: Ingredient[];
  instructions: string;
};
export type Recipe = {
  id: string;
  name: string;
  ingredients: Ingredient[];
  instructions: string;
};
