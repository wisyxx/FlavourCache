import { ChangeEvent } from 'react';
import { Box, FormLabel, IconButton, Input } from '@chakra-ui/react';
import { Minus } from 'lucide-react';
import { useRecipe } from '../hooks/useRecipe';
import { Ingredient } from '../types';

type NewIngredientProps = {
  id: Ingredient['id'];
  name: Ingredient['name'];
};

export const NewIngredient = ({ id, name }: NewIngredientProps) => {
  const { dispatch } = useRecipe();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'set-ingredient-value',
      payload: { id, value: e.target.value },
    });
  };

  return (
    <Box>
      <FormLabel htmlFor={id}>{name}</FormLabel>

      <Box className=" flex gap-4 items-center">
        <Input
          onChange={onChange}
          name={name}
          id={id}
          type="text"
          size="md"
          placeholder="Ex: Flour, cocoa powder..."
        />
        {id !== 'DEFAULT' ? (
          <IconButton
            onClick={() =>
              dispatch({ type: 'remove-ingredient', payload: { id } })
            }
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
