import React from 'react';
import useQuizContext from '../store/useQuizContext';

const Answers = ({ answers, correctAnswer, id, selectedAnswer }) => {
  const { getSelectedAnswer, complete } = useQuizContext();
  return answers.map((answer) => {
    let color = '';
    if (answer === selectedAnswer && !complete) {
      color = '#d6dbf5';
    } else if (answer === correctAnswer && complete) {
      color = '#94d7a2';
    } else if (
      answer === selectedAnswer &&
      answer !== correctAnswer &&
      complete
    ) {
      color = '#f8bcbc';
    }

    return (
      <button
        style={{ backgroundColor: color }}
        key={answer}
        className="answer-btn"
        dangerouslySetInnerHTML={{ __html: answer }}
        onClick={() => getSelectedAnswer(answer, id)}
      />
    );
  });
};
export default Answers;
