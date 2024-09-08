import { IconButton } from '@chakra-ui/react';
import { useRecipe } from '../hooks/useRecipe';
import { RecipeDisplay } from './RecipeDisplay';
import { NotebookPen } from 'lucide-react';
import { AddRecipeModal } from './AddRecipeModal';
import { RecipeFilter } from './RecipeFilter';

export const RecipeList = () => {
  const { state, onOpen } = useRecipe();

  return (
    <div className="bg-[#ffdd6d] shadow-lg rounded-lg p-5 flex-1 overflow-scroll no-scrollbar">
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-4">
          <h1 className=" text-3xl font-black">Recipes</h1>
          <RecipeFilter />
        </div>
        <IconButton
          onClick={onOpen}
          aria-label="New recipe"
          bg="#444444"
          size="lg"
          isRound={true}
          _hover={{
            background: '#ffc60b',
          }}
          _active={{
            background: '#ffdb66',
          }}
          icon={<NotebookPen className=" text-white" />}
        />
      </div>
      <AddRecipeModal />
      <div className="space-y-4 p-4">
        {state.recipes.map((recipe) => {
          if (state.filter === 'All') {
            return <RecipeDisplay key={recipe.id} recipe={recipe} />;
          } else if (state.filter === recipe.category) {
            // If not "All" then filter by category
            return <RecipeDisplay key={recipe.id} recipe={recipe} />;
          }
        })}
      </div>
    </div>
  );
};
