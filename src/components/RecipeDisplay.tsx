import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PenIcon, Trash2 } from 'lucide-react';
import { Recipe } from '../types';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { useRecipe } from '../hooks/useRecipe';
import 'animate.css';
import { useCategory } from '../hooks/useCategory';

type RecipeDisplayProps = {
  recipe: Recipe;
};

export const RecipeDisplay = ({ recipe }: RecipeDisplayProps) => {
  const SweetAlert = withReactContent(Swal);

  const { dispatch, onOpen } = useRecipe();
  const { state } = useCategory();
  const { name, instructions, ingredients, id, category } = recipe;

  const handleEdit = () => {
    dispatch({
      type: 'set-editing-id',
      payload: { id },
    });
    onOpen();
  };

  const handleDelete = () => {
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
        dispatch({ type: 'remove-recipe', payload: { id } });

        SweetAlert.fire({
          title: <p>Recipe successfully deleted</p>,
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

  return (
    <div className="shadow-xl p-6 rounded-lg w-full bg-[#ffa335]">
      <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center mb-5">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Category:</span> {category}
          </h2>
        </div>
        <div className="flex gap-4">
          <IconButton
            onClick={handleEdit}
            isRound
            colorScheme="yellow"
            aria-label="edit recipe"
            icon={<PenIcon />}
          />
          <IconButton
            onClick={handleDelete}
            isRound
            colorScheme="red"
            aria-label="delete recipe"
            icon={<Trash2 />}
          />
        </div>
      </div>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ backgroundColor: '#ffba69' }}>
              <Box as="span" className="flex-1 text-left font-bold text-md">
                Ingredients
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className="flex justify-start items-center ml-5">
            <Box as="ul" className="list-decimal">
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.value}</li>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ backgroundColor: '#ffba69' }}>
              <Box as="span" className="flex-1 text-left font-bold text-md">
                Instructions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box as="p">{instructions}</Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
