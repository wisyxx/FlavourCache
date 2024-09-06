import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useCategory } from '../hooks/useCategory';
import { CategoryForm } from './CategoryForm';

export const AddCategoryModal = () => {
  const { isOpen, onClose, dispatch, state } = useCategory();

  const handleClose = () => {
    if (state.editingId) {
      dispatch({ type: 'remove-editing-id' });
    }
    onClose();
  };

  return (
    <Modal size="xl" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent bg="#feffdb">
        <ModalHeader fontWeight="bold">Add new recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CategoryForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
