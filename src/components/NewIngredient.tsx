import { ChangeEvent, Dispatch } from 'react';
import { Box, FormLabel, IconButton, Input } from '@chakra-ui/react';
import { Minus } from 'lucide-react';
import { Ingredient } from '../types';

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
  onIngredientChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const NewIngredient = ({
  id,
  name,
  ingredientValue,
  setDraftIngredients,
  draftIngredients,
  onIngredientChange,
}: NewIngredientProps) => {
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
          value={ingredientValue}
          onChange={onIngredientChange}
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
