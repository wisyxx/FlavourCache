import { Box, Select } from '@chakra-ui/react';
import { useCategory } from '../hooks/useCategory';
import { useRecipe } from '../hooks/useRecipe';
import { ChangeEvent } from 'react';

export const RecipeFilter = () => {
  const { state } = useCategory();
  const { dispatch } = useRecipe();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    console.log(selectedCategory);
    dispatch({ type: 'filter', payload: { filter: selectedCategory } });
  };

  return (
    <form>
      <Box>
        <Select
          width="32"
          fontWeight="medium"
          background="#feffdb"
          border="hidden"
          name="category"
          id="category"
          onChange={onChange}
        >
          <option value="All">All</option>
          {state.categories.map((category) => (
            <option
              className="bg-[#feffdb]"
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </Select>
      </Box>
    </form>
  );
};
