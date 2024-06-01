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

export const AddRecipeModal = () => {
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

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Add new recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
