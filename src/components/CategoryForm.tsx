import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import { useCategory } from '../hooks/useCategory';

export const CategoryForm = () => {
  const { state } = useCategory();

  return (
    <form className="space-y-3 p-3">
      {/* {error && (
        <p className="w-full bg-red-500 text-white font-bold p-2">{error}</p>
      )} */}
      <Box>
        <FormLabel htmlFor="name">Name *</FormLabel>
        <Input
          //   onChange={}
          autoComplete="given-name"
          name="name"
          id="name"
          type="text"
          size="md"
          placeholder="Category name"
          //   value={}
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
