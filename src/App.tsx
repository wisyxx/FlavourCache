import { IconButton } from '@chakra-ui/react';
import { NotebookPen } from 'lucide-react';

export const App = () => {
  return (
    <header className=" bg-orange-500 p-4 flex justify-between">
      <h1 className=" text-white font-black text-4xl">FlavourCache</h1>
      <IconButton
        aria-label="New recipe"
        bg="#444444"
        size='lg'
        isRound={true}
        _hover={{
          background: '#ffc60b',
        }}
        _active={{
          background: '#ffdb66',
        }}
        icon={<NotebookPen className=" text-white" />}
      >
        Button
      </IconButton>
    </header>
  );
};
