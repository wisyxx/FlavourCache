import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { CopyPlus } from 'lucide-react';
import { useRecipe } from '../hooks/useRecipe';

export const CategoryList = () => {
  const { isCategoryModalOpen, onCloseCategoryModal, onOpenCategoryModal } =
    useRecipe();
  return (
    <div className="bg-[#ffdd6d] shadow-lg rounded-lg p-5 min-w-[300px]">
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl font-black">Categories</h1>
        <IconButton
          onClick={onOpenCategoryModal}
          aria-label="New recipe"
          bg="#444444"
          size="lg"
          isRound={true}
          _hover={{
            background: '#ffc60b',
          }}
          _active={{
            background: '#c99c09',
          }}
          icon={<CopyPlus className=" text-white" />}
        >
          Button
        </IconButton>

        <Modal
          size="xl"
          isOpen={isCategoryModalOpen}
          onClose={onCloseCategoryModal}
        >
          <ModalOverlay />
          <ModalContent bg="#feffdb">
            <ModalHeader fontWeight="bold">Add new recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>It works</h1>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
