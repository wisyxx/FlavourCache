import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton,
} from '@chakra-ui/react';
import { NotebookPen } from 'lucide-react';
import { useRecipe } from '../hooks/useRecipe';
import { RecipeForm } from './RecipeForm';
import { initialState } from '../reducers/recipeReducer';

export const AddRecipeModal = () => {
  const { onOpen, onClose, isOpen, state } = useRecipe();

  const handleClose = () => {
    onClose();
    state.ingredients = initialState.ingredients;
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="New recipe"
        bg="#444444"
        size="lg"
        isRound={true}
        _hover={{
          background: '#ffc60b',
        }}
        _active={{
          background: '#ffdb66',
        }}
        icon={<NotebookPen className=" text-white" />}
      >
        Button
      </IconButton>

      <Modal
        onCloseComplete={handleClose}
        size="xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg="#feffdb">
          <ModalHeader fontWeight="bold">Add new recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RecipeForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
