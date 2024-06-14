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
  onOpenRecipeModal: () => void;
  onCloseRecipeModal: () => void;
  isRecipeModalOpen: boolean;
  onOpenCategoryModal: () => void;
  onCloseCategoryModal: () => void;
  isCategoryModalOpen: boolean;
};

type RecipeProviderProps = {
  children: ReactNode;
};

export const RecipeContext = createContext<RecipeContextProps>(null!);

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const {
    onOpen: onOpenRecipeModal,
    onClose: onCloseRecipeModal,
    isOpen: isRecipeModalOpen,
  } = useDisclosure();
  const {
    onOpen: onOpenCategoryModal,
    onClose: onCloseCategoryModal,
    isOpen: isCategoryModalOpen,
  } = useDisclosure();
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider
      value={{
        state,
        dispatch,
        onOpenRecipeModal,
        onCloseRecipeModal,
        isRecipeModalOpen,
        onOpenCategoryModal,
        onCloseCategoryModal,
        isCategoryModalOpen,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
