import { PenIcon, Trash2 } from 'lucide-react';
import { Category } from '../types';
import { IconButton } from '@chakra-ui/react';
import { useCategory } from '../hooks/useCategory';

type CategoryDisplayProps = {
  category: Category;
};

export const CategoryDisplay = ({ category }: CategoryDisplayProps) => {
  const { id } = category;
  const { dispatch, onOpen } = useCategory();

  const handleEdit = () => {
    dispatch({
      type: 'set-editing-id',
      payload: { id },
    });
    onOpen();
  };

  return (
    <div className="flex items-center justify-between p-2 bg-[#ffa335] rounded-md">
      <h1 key={category.id}>{category.name}</h1>
      <div className="flex gap-2">
        <IconButton
          onClick={handleEdit}
          isRound
          colorScheme="yellow"
          size={'sm'}
          aria-label="edit category"
          icon={<PenIcon size={16} />}
        />
        <IconButton
          // onClick={handleDelete}
          isRound
          colorScheme="red"
          size={'sm'}
          aria-label="delete category"
          icon={<Trash2 size={16} />}
        />
      </div>
    </div>
  );
};
