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
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { NotebookPen } from 'lucide-react';
import { FormEvent } from 'react';

export const RecipeForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Add new recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <FormLabel>Name</FormLabel>
                <Input type="text" size="md" placeholder="Recipe name" />
              </div>

              <div>
                <FormLabel>Ingredient 1</FormLabel>
                <Input
                  type="text"
                  size="md"
                  placeholder="Ex: Flour, 1/2 Onion..."
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                colorScheme="blue"
                onClick={onClose}
              >
                Add
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
