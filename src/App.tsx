import { CategoryList } from './components/CategoryList';
import { RecipeList } from './components/RecipeList';
import { RecipeForm } from './components/RecipeForm';

export const App = () => {
  return (
    <>
      <header className=" bg-orange-500 p-4 flex justify-between">
        <h1 className=" text-white font-black text-4xl">FlavourCache</h1>
        <RecipeForm />
      </header>

      <main className=" flex gap-5 p-10">
        <CategoryList />
        <RecipeList />
      </main>
    </>
  );
};
