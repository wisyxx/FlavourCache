import { Box, Button, FormLabel, Input } from '@chakra-ui/react';
import { useCategory } from '../hooks/useCategory';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { DraftCategory } from '../types';

export const CategoryForm = () => {
  const { state, dispatch, onClose } = useCategory();
  const [error, setError] = useState('');
  const [category, setCategory] = useState<DraftCategory>({
    name: '',
  });

  // If editing add category data to form fields
  useEffect(() => {
    if (state.editingId) {
      const editingCategory = state.categories.filter(
        (category) => category.id === state.editingId
      )[0];
      setCategory(editingCategory);
    }
  }, [state.editingId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const categoryName = e.target.value;
    setCategory({ ...category, name: categoryName });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(category).includes('')) {
      setError('You must fill all fields');
    } else {
      state.editingId
        ? dispatch({ type: 'update-category', payload: { category } })
        : dispatch({ type: 'add-category', payload: { category } });
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3">
      {error && (
        <p className="w-full bg-red-500 text-white font-bold p-2">{error}</p>
      )}
      <Box>
        <FormLabel htmlFor="name">Name *</FormLabel>
        <Input
          onChange={handleChange}
          autoComplete="given-name"
          name="name"
          id="name"
          type="text"
          size="md"
          placeholder="Category name"
          value={category.name}
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
