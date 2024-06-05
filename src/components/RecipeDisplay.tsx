import { Recipe } from '../types';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

type RecipeDisplayProps = {
  recipe: Recipe;
};

export const RecipeDisplay = ({ recipe }: RecipeDisplayProps) => {
  const { name, instructions, ingredients } = recipe;

  return (
    <div className="shadow-xl p-6 rounded-lg w-full bg-[#ffa335]">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
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
