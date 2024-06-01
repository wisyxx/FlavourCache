import { Box, Button, Input, FormLabel, Textarea } from '@chakra-ui/react';
import { FormEvent } from 'react';

export const RecipeForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    // dispatch({}); TODO
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Box>
        <FormLabel>Name *</FormLabel>
        <Input type="text" size="md" placeholder="Recipe name" />
      </Box>

      <Box>
        <FormLabel>Ingredient 1</FormLabel>
        <Input type="text" size="md" placeholder="Ex: Flour, 1/2 Onion..." />
      </Box>

      <Box>
        <FormLabel>Instructions</FormLabel>
        <Textarea placeholder="Ex: First add all dry ingredients..." />
      </Box>

      <Button
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
