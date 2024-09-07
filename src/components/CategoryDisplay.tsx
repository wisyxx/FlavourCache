import { PenIcon, Trash2 } from 'lucide-react';
import { Category } from '../types';
import { IconButton } from '@chakra-ui/react';
import { useCategory } from '../hooks/useCategory';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'animate.css';

type CategoryDisplayProps = {
  category: Category;
};

export const CategoryDisplay = ({ category }: CategoryDisplayProps) => {
  const { id } = category;
  const { dispatch, onOpen } = useCategory();

  const handleDelete = () => {
    const SweetAlert = withReactContent(Swal);

    SweetAlert.fire({
      title: <p>Are you sure?</p>,
      icon: 'question',
      confirmButtonColor: '#ff8b00',
      confirmButtonText: 'Delete',
      showCancelButton: true,
      cancelButtonColor: '#444444',
      cancelButtonText: 'Cancel',
      /* Custom animations with animate.css */
      showClass: {
        popup: `
              animate__animated
              animate__fadeIn
              animate__faster
           `,
      },
      hideClass: {
        popup: `
              animate__animated
              animate__fadeOut
              animate__faster
           `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: 'remove-category', payload: { id } });

        SweetAlert.fire({
          title: <p>Category successfully deleted</p>,
          toast: true,
          position: 'top-end',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          /* Custom animations with animate.css */
          showClass: {
            popup: `
              animate__animated
              animate__backInRight
              animate__fast
           `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__backOutRight
              animate__fast
           `,
          },
        });
      }
    });
  };

  const handleEdit = () => {
    dispatch({
      type: 'set-editing-id',
      payload: { id },
    });
    onOpen();
  };

  return (
    <div className="flex items-center justify-between p-2 bg-[#ffa335] rounded-md">
      <h1 className='font-medium' key={category.id}>{category.name}</h1>
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
          onClick={handleDelete}
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
