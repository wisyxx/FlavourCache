import { ChangeEvent, Dispatch } from 'react';
import { Box, FormLabel, IconButton, Input } from '@chakra-ui/react';
import { Minus } from 'lucide-react';
import { useRecipe } from '../hooks/useRecipe';
import { Ingredient } from '../types';

type NewIngredientProps = {
  id: Ingredient['id'];
  name: Ingredient['name'];
  value?: Ingredient['value'];
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
  value,
  setDraftIngredients,
  draftIngredients,
}: NewIngredientProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const updatedValueIngredients = draftIngredients.map((ingredient) => {
      if (ingredient.id === id) {
        ingredient.value === e.target.value;
      }
      return ingredient;
    });
    setDraftIngredients(updatedValueIngredients);
  };

  const handleDeleteIngredient = () => {
    const updatedIngredients = draftIngredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setDraftIngredients(updatedIngredients);
  };

  return (
    <Box>
      <FormLabel htmlFor={id}>{name}</FormLabel>

      <Box className=" flex gap-4 items-center">
        <Input
          value={value}
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
