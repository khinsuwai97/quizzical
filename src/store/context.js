import React, { useState } from 'react';
import transformData from './transformData';

export const QuizContext = React.createContext();

const categoryInfo = {
  sports: 21,
  history: 23,
  politics: 24,
  film: 11,
  music: 12,
  computer: 18,
  celebrities: 26,
  japaneseAnime: 31,
  cartoon: 32,
};
const API = 'https://opentdb.com/api.php?';

export const QuizProvider = ({ children }) => {
  const [startQuiz, setStartQuiz] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [questions, setQuesions] = useState([]);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports' || categoryInfo.sports,
    difficulty: 'easy',
  });

  const [complete, setComplete] = useState(false);

  const fetchQuizs = async (url) => {
    setIsLoading(true);
    setStartQuiz(false);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Something went wrong!');
      const data = await res.json();
      if (data) {
        const updatedData = transformData(data.results);
        setQuesions(updatedData);
        setIsLoading(false);
        setStartQuiz(false);
        setError(null);
      } else {
        setStartQuiz(true);
      }
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz({ ...quiz, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { amount, category, difficulty } = quiz;

    fetchQuizs(
      `${API}amount=${amount}&category=${categoryInfo[category]}&difficulty=${difficulty}&type=multiple`
    );
  };

  const checkAnswer = () => {
    questions.map((question) => {
      if (question.correctAnswer === question.selectedAnswer) {
        setCorrect((preveCorrect) => preveCorrect + 1);
      }
    });
    setComplete(true);
  };

  const getSelectedAnswer = (answer, id) => {
    setQuesions((prevData) => {
      return prevData.map((data) =>
        data.id === id ? { ...data, selectedAnswer: answer } : data
      );
    });
  };

  const playAgain = () => {
    setStartQuiz(true);
    setComplete(false);
    setCorrect(0);
    setQuesions([]);
    setQuiz({
      amount: 10,
      category: 'sports' || categoryInfo.sports,
      difficulty: 'easy',
    });
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        quiz,
        handleFormSubmit,
        handleChange,
        error,
        isLoading,
        startQuiz,
        checkAnswer,
        correct,
        complete,
        getSelectedAnswer,
        playAgain,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
