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
  const { name, ingredients, instructions } = recipe;

  return (
    <div className="shadow-xl p-4 rounded-lg w-[90%]">
      <h1 className="text-2xl font-bold">{name}</h1>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" className="flex-1 text-left font-bold text-md">
                  Ingredients
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {ingredients.map((ingredient) => (
                <p>{ingredient.value}</p>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <h2>
            <AccordionButton>
              <Box as="span" className="flex-1 text-left font-bold text-md">
                Instructions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>{instructions}</p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
