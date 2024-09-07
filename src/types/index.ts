export type Category = {
  id: string;
  name: string;
};
export type DraftCategory = {
  name: string;
};
export type Ingredient = {
  id: string;
  name: string; // The name of the input
  value: string;
};
export type DraftRecipe = {
  name: string;
  category: string;
  ingredients: Ingredient[];
  instructions: string;
};
export type Recipe = {
  id: string;
  name: string;
  category: string;
  ingredients: Ingredient[];
  instructions: string;
};
