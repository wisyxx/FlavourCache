import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import {
  RecipeActions,
  RecipeState,
  initialState,
  recipeReducer,
} from '../reducers/recipeReducer';
import { useDisclosure } from '@chakra-ui/react';

type RecipeContextProps = {
  state: RecipeState;
  dispatch: Dispatch<RecipeActions>;
  /* ChakraUI useDisclosure() */
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
};

type RecipeProviderProps = {
  children: ReactNode;
};

export const RecipeContext = createContext<RecipeContextProps>(null!);

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider
      value={{ state, dispatch, onOpen, onClose, isOpen }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
