import { FormEvent, useState } from 'react';
import { useRecipe } from '../hooks/useRecipe';
import {
  Box,
  Button,
  Input,
  FormLabel,
  Textarea,
  IconButton,
} from '@chakra-ui/react';
import { NewIngredient } from './NewIngredient';
import { Plus } from 'lucide-react';
import type { Ingredient } from '../types';

export const RecipeForm = () => {
  const { onClose, state, dispatch } = useRecipe();
  const [error, setError] = useState();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [],
    instructions: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    onClose();

    if (Object.values(recipe).includes('')) {
    }
    // dispatch({}); TODO
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3">
      <Box>
        <FormLabel htmlFor="name">Name *</FormLabel>
        <Input
          autoComplete="given-name"
          name="name"
          id="name"
          type="text"
          size="md"
          placeholder="Recipe name"
        />
      </Box>

      <Box className="space-y-3">
        {state.ingredients.map((ingredient) => (
          <NewIngredient
            key={ingredient.id}
            name={ingredient.name}
            id={ingredient.id}
          />
        ))}
        <IconButton
          bg="#ff8b00"
          _hover={{
            backgroundColor: '#ffc60b',
          }}
          isRound={true}
          aria-label="Add ingredient"
          icon={<Plus />}
          onClick={() => dispatch({ type: 'add-ingredient' })}
          colorScheme="blue"
        >
          Add ingredient
        </IconButton>
      </Box>

      <Box>
        <FormLabel htmlFor="instructions">Instructions</FormLabel>
        <Textarea
          name="instructions"
          id="instructions"
          h="150"
          className=" resize-none"
          placeholder="Ex: First add all dry ingredients..."
        />
      </Box>

      <Button
        bg="#ff8b00"
        _hover={{
          backgroundColor: '#ffc60b',
        }}
        className="w-full"
        type="submit"
        colorScheme="blue"
        onClick={onClose}
      >
        Add
      </Button>
    </form>
  );
};
