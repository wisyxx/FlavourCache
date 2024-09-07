import {
  Box,
  Button,
  Input,
  FormLabel,
  Textarea,
  IconButton,
  Select,
} from '@chakra-ui/react';
import { NewIngredient } from './NewIngredient';
import { Plus } from 'lucide-react';
import { useRecipeForm } from '../hooks/useRecipeForm';
import { useCategory } from '../hooks/useCategory';

export const RecipeForm = () => {
  const {
    handleSubmit,
    error,
    onChange,
    recipe,
    draftIngredients,
    setDraftIngredients,
    onIngredientChange,
    handleAddIngredient,
    state,
  } = useRecipeForm();

  const { state: categoryState } = useCategory();

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3">
      {error && (
        <p className="w-full bg-red-500 text-white font-bold p-2">{error}</p>
      )}
      <Box>
        <FormLabel htmlFor="name">Name *</FormLabel>
        <Input
          onChange={onChange}
          autoComplete="given-name"
          name="name"
          id="name"
          type="text"
          size="md"
          placeholder="Recipe name"
          value={recipe.name}
        />
      </Box>

      <Box>
        <Select
          name="category"
          id="category"
          onChange={onChange}
          placeholder="Select option"
        >
          {categoryState.categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </Select>
      </Box>

      <Box className="space-y-3">
        {
          // Set ingredient inputs
          draftIngredients.map((ingredient) => (
            <NewIngredient
              key={ingredient.id}
              name={ingredient.name}
              id={ingredient.id}
              ingredientValue={ingredient.value}
              draftIngredients={draftIngredients}
              setDraftIngredients={setDraftIngredients}
              onIngredientChange={onIngredientChange}
            />
          ))
        }
        <IconButton
          bg="#ff8b00"
          _hover={{
            backgroundColor: '#ffc60b',
          }}
          isRound={true}
          aria-label="Add ingredient"
          icon={<Plus />}
          onClick={handleAddIngredient}
          colorScheme="blue"
        ></IconButton>
      </Box>

      <Box>
        <FormLabel htmlFor="instructions">Instructions</FormLabel>
        <Textarea
          onChange={onChange}
          name="instructions"
          id="instructions"
          h="150"
          className=" resize-none"
          placeholder="Ex: First add all dry ingredients..."
          value={recipe.instructions}
        />
      </Box>

      <Button
        type="submit"
        bg="#ff8b00"
        _hover={{
          backgroundColor: '#ffc60b',
        }}
        className="w-full"
        colorScheme="blue"
      >
        {state.editingId ? 'Update' : 'Add'}
      </Button>
    </form>
  );
};
