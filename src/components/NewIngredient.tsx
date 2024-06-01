import { Box, FormLabel, Input } from '@chakra-ui/react';

type NewIngredientProps = {
  id: Ingredient['id'];
  name: Ingredient['name'];
};

export const NewIngredient = ({ id, name }: NewIngredientProps) => {
  return (
    <Box>
      <FormLabel>{` ${name} ${id}`}</FormLabel>
      <Input
        name={`${name}-${id}`}
        type="text"
        size="md"
        placeholder="Ex: Flour, cocoa powder..."
      />
    </Box>
  );
};
