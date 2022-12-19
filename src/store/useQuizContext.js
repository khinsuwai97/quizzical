import { useContext } from 'react';
import { QuizContext } from './context';

const useQuizContext = () => {
  return useContext(QuizContext);
};

export default useQuizContext;
