import { IconButton } from '@chakra-ui/react';
import { CopyPlus } from 'lucide-react';
import { useCategory } from '../hooks/useCategory';
import { AddCategoryModal } from './AddCategoryModal';
import { PenIcon, Trash2 } from 'lucide-react';

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
          <div className="flex items-center justify-between p-2 bg-[#ffa335] rounded-md">
            <h1 key={category.id}>
              {category.name}
            </h1>
            <div className="flex gap-2">
              <IconButton
                // onClick={handleEdit}
                isRound
                colorScheme="yellow"
                size={'sm'}
                aria-label="edit recipe"
                icon={<PenIcon size={16} />}
              />
              <IconButton
                // onClick={handleDelete}
                isRound
                colorScheme="red"
                size={'sm'}
                aria-label="delete recipe"
                icon={<Trash2 size={16} />}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
