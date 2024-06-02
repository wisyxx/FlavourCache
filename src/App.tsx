import { CategoryList } from './components/CategoryList';
import { RecipeList } from './components/RecipeList';
import { AddRecipeModal } from './components/AddRecipeModal';

export const App = () => {
  return (
    <>
      <header className=" bg-orange-500 p-4 flex justify-between">
        <h1 className=" text-white font-black text-4xl">FlavourCache</h1>
        <AddRecipeModal />
      </header>

      <main className=" bg-[#feffdb] h-[89vh] flex flex-col md:flex-row gap-5 p-10">
        <CategoryList />
        <RecipeList />
      </main>
    </>
  );
};
