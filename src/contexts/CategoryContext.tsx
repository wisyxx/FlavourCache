import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import {
  CategoryActions,
  CategoryState,
  initialState,
  categoryReducer,
} from '../reducers/categoryReducer';
import { useDisclosure } from '@chakra-ui/react';

type CategoryContextProps = {
  state: CategoryState;
  dispatch: Dispatch<CategoryActions>;
  /* ChakraUI useDisclosure() */
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
};

type CategoryProviderProps = {
  children: ReactNode;
};

export const CategoryContext = createContext<CategoryContextProps>(null!);

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  return (
    <CategoryContext.Provider
      value={{ state, dispatch, onOpen, onClose, isOpen }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
