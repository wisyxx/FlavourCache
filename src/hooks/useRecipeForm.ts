import { DraftRecipe } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { useRecipe } from '../hooks/useRecipe';

export const useRecipeForm = () => {
  const { state, dispatch, onClose } = useRecipe();
  const [error, setError] = useState('');
  const [draftIngredients, setDraftIngredients] = useState([
    { id: 'DEFAULT', name: 'Ingredient', value: '' },
  ]);
  const [recipe, setRecipe] = useState<DraftRecipe>({
    name: '',
    category: '',
    ingredients: [],
    instructions: '',
  });

  /* 
    If draftIngredients changes, it updates the recipe ingredients array 
    adding or deleting that one, that wouldn't happen unles you changed the 
    input value of any ingredient after adding or deleting one of them.
  */
  useMemo(
    () => setRecipe({ ...recipe, ingredients: draftIngredients }),
    [draftIngredients]
  );

  useEffect(() => {
    if (state.editingId) {
      const editingRecipe = state.recipes.filter(
        (recipe) => recipe.id === state.editingId
      )[0];

      const editingRecipeIngredients = editingRecipe.ingredients.map(
        (ingredient) => ingredient
      );

      setRecipe(editingRecipe);
      /* 
        Set those so they can be edited with out using any reducer action,
        that way the state is centralized into the RecipeForm and 
        NewIngredient components 
      */
      setDraftIngredients(editingRecipeIngredients);
    }
  }, [state.editingId]);

  // Set the recipe ingredients
  const onIngredientChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id } = e.target;

    const updatedValueIngredients = draftIngredients.map((ingredient) => {
      // Set ingredient value
      if (ingredient.id === id) {
        ingredient = { ...ingredient, value: e.target.value };
      }
      return ingredient;
    });
    setDraftIngredients(updatedValueIngredients);
    setRecipe({
      ...recipe,
      ingredients: draftIngredients,
    });
  };

  // Set every property of the recipe but the ingredients
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setRecipe({
      ...recipe,
      ingredients: draftIngredients,
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

    // Look for no filled ingredient inputs
    const allIngredientsFilled = recipe.ingredients.filter(
      (ingredient) => ingredient.value.trim() === ''
    );

    if (Object.values(recipe).includes('') || allIngredientsFilled.length > 0) {
      setError('You must fill all fields');
      return;
    }

    if (state.editingId) {
      dispatch({ type: 'update-recipe', payload: { recipe } });
    } else {
      dispatch({ type: 'add-recipe', payload: { recipe } });
    }
    onClose();
  };

  return {
    handleSubmit,
    error,
    onChange,
    recipe,
    draftIngredients,
    setDraftIngredients,
    onIngredientChange,
    handleAddIngredient,
    state,
  };
};
