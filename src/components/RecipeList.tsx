import { useRecipe } from '../hooks/useRecipe';
import { RecipeDisplay } from './RecipeDisplay';

export const RecipeList = () => {
  const { state } = useRecipe();
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 flex-1">
      <h1 className=" text-3xl font-black">Recipes</h1>
      <div className="space-y-4 p-4">
        {state.recipes.map((recipe) => (
          <RecipeDisplay recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
