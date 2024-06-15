import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useRecipe } from '../hooks/useRecipe';
import { RecipeForm } from './RecipeForm';

export const AddRecipeModal = () => {
  const { onClose, isOpen, dispatch } = useRecipe();

  const handleClose = () => {
    dispatch({ type: 'remove-editinId' });
  };

  return (
    <>
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
