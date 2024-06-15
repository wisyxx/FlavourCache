import { IconButton } from '@chakra-ui/react';
import { CopyPlus } from 'lucide-react';
import { useCategory } from '../hooks/useCategory';
import { AddCategoryModal } from './AddCategoryModal';

export const CategoryList = () => {
  const { onOpen } = useCategory();
  return (
    <div className="bg-[#ffdd6d] shadow-lg rounded-lg p-5 min-w-[300px]">
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl font-black">Categories</h1>
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
            background: '#c99c09',
          }}
          icon={<CopyPlus className=" text-white" />}
        >
          Button
        </IconButton>
      </div>
      <AddCategoryModal />
    </div>
  );
};
