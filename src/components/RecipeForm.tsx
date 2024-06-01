import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { NotebookPen } from 'lucide-react';

export const RecipeForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleSubmit = () => {
    onClose();
    // dispatch({}); TODO
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Add new recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" onClick={handleSubmit}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
