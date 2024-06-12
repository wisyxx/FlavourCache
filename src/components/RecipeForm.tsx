import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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
import { DraftRecipe } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const RecipeForm = () => {
  const { state, dispatch, onClose } = useRecipe();
  const [error, setError] = useState('');
  const [draftIngredients, setDraftIngredients] = useState([
    { id: 'DEFAULT', name: 'Ingredient', value: '' },
  ]);
  const [recipe, setRecipe] = useState<DraftRecipe>({
    name: '',
    ingredients: [],
    instructions: '',
  });

  useEffect(() => {
    if (state.editingId) {
      const editingRecipe = state.recipes.filter(
        (recipe) => recipe.id === state.editingId
      )[0];

      setRecipe(editingRecipe);
    }
  }, [state.editingId]);

  const setIngredientInputs = () => {
    if (state.editingId) {
      return recipe.ingredients.map((ingredient) => (
        <NewIngredient
          key={ingredient.id}
          name={ingredient.name}
          value={ingredient.value}
          id={ingredient.id}
          draftIngredients={draftIngredients}
          setDraftIngredients={setDraftIngredients}
        />
      ));
    } else
      return draftIngredients.map((ingredient) => (
        <NewIngredient
          key={ingredient.id}
          name={ingredient.name}
          id={ingredient.id}
          draftIngredients={draftIngredients}
          setDraftIngredients={setDraftIngredients}
        />
      ));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const ingredients = draftIngredients.map((ingredient) => ingredient);

    setRecipe({
      ...recipe,
      ingredients,
      [name]: value,
    });
  };

  const handleAddIngredient = () => {
    setDraftIngredients([
      ...draftIngredients,
      { id: uuidv4(), name: 'Ingredient', value: '' },
    ]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(recipe).includes('')) {
      setError('You must fill all fields');
      return;
    }

    dispatch({ type: 'add-recipe', payload: { recipe } });
    onClose();
  };

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

      <Box className="space-y-3">
        {setIngredientInputs()}
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
        Add
      </Button>
    </form>
  );
};
