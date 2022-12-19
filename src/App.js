import React from 'react';
import useQuizContext from './store/useQuizContext';
import QuizForm from './components/QuizForm';
import Loading from './components/Loading';
import Quiz from './components/Quiz';

const App = () => {
  const { isLoading, startQuiz, error } = useQuizContext();
  if (startQuiz) {
    return <QuizForm />;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Quiz />
    </>
  );
};

export default App;
