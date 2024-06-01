import { FormEvent } from 'react';
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

export const RecipeForm = () => {
  const { onClose, state, dispatch } = useRecipe();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    onClose();
    // dispatch({}); TODO
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3">
      <Box>
        <FormLabel>Name *</FormLabel>
        <Input name="name" type="text" size="md" placeholder="Recipe name" />
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
        <FormLabel>Instructions</FormLabel>
        <Textarea
          h='150'
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
