import { CategoryList } from './components/CategoryList';
import { RecipeList } from './components/RecipeList';
import { useEffect } from 'react';
import { useRecipe } from './hooks/useRecipe';
import { useCategory } from './hooks/useCategory';

export const App = () => {
  const { state: recipeState } = useRecipe();
  const { state: categoryState } = useCategory();
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipeState.recipes));
  }, [recipeState]);
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categoryState.categories));
  }, [categoryState]);

  return (
    <>
      <header className=" bg-orange-500 p-4 flex justify-center">
        <h1 className=" text-white font-black text-4xl">FlavourCache</h1>
      </header>

      <main className=" bg-[#feffdb] h-[89vh] flex flex-col md:flex-row gap-5 p-10">
        <CategoryList />
        <RecipeList />
      </main>
    </>
  );
};
