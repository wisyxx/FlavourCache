import { ChangeEvent, Dispatch } from 'react';
import { Box, FormLabel, IconButton, Input } from '@chakra-ui/react';
import { Minus } from 'lucide-react';
import { Ingredient } from '../types';
import { useRecipe } from '../hooks/useRecipe';

type NewIngredientProps = {
  id: Ingredient['id'];
  name: Ingredient['name'];
  ingredientValue?: Ingredient['value'];
  draftIngredients: Ingredient[];
  setDraftIngredients: Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        value: string;
      }[]
    >
  >;
};

export const NewIngredient = ({
  id,
  name,
  ingredientValue,
  setDraftIngredients,
  draftIngredients,
}: NewIngredientProps) => {
  const { state, dispatch } = useRecipe();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedValueIngredients = draftIngredients.map((ingredient) => {
      // Set ingredient value
      if (ingredient.id === id) {
        ingredient = { ...ingredient, value: e.target.value };
      }
      return ingredient;
    });
    setDraftIngredients(updatedValueIngredients);
  };

  const handleDeleteIngredient = () => {
    if (state.editingId) {
      dispatch({ type: 'remove-recipe-ingredient', payload: { id } });
    } else {
      const updatedIngredients = draftIngredients.filter(
        (ingredient) => ingredient.id !== id
      );
      setDraftIngredients(updatedIngredients);
    }
  };

  return (
    <Box>
      <FormLabel htmlFor={id}>{name}</FormLabel>

      <Box className=" flex gap-4 items-center">
        <Input
          value={ingredientValue}
          onChange={onChange}
          name={name}
          id={id}
          type="text"
          size="md"
          placeholder="Ex: Flour, cocoa powder..."
        />
        {id !== 'DEFAULT' ? (
          <IconButton
            onClick={handleDeleteIngredient}
            aria-label="delete ingredient"
            icon={<Minus />}
            colorScheme="red"
            size="sm"
            isRound={true}
          />
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};
