import { IconButton } from '@chakra-ui/react';
import { CopyPlus } from 'lucide-react';
import { useCategory } from '../hooks/useCategory';
import { AddCategoryModal } from './AddCategoryModal';

export const CategoryList = () => {
  const { state, onOpen } = useCategory();
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
      <div className="flex flex-col gap-2 my-5 overflow-scroll no-scrollbar h-[90%]">
        {state.categories.map((category) => (
          <p className="p-2 bg-[#ffa335] rounded-md" key={category.id}>
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};
