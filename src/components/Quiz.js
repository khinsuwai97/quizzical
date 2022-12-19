import React from 'react';
import useQuizContext from '../store/useQuizContext';
import Answers from './Answers';

function Quiz() {
  const { questions, correct, checkAnswer, complete, playAgain } =
    useQuizContext();

  return (
    <main>
      <div className="quiz-container">
        {questions.map((q) => {
          return (
            <div className="question" key={q.question}>
              <h3 dangerouslySetInnerHTML={{ __html: q.question }} />
              <Answers
                answers={q.answers}
                correctAnswer={q.correctAnswer}
                id={q.id}
                selectedAnswer={q.selectedAnswer}
              />
            </div>
          );
        })}

        {!complete && (
          <button className="check-answers-btn" onClick={checkAnswer}>
            Check Answer
          </button>
        )}
        {complete && (
          <button className="check-answers-btn" onClick={playAgain}>
            Play Again
          </button>
        )}

        {complete && (
          <h3 className="answer-score">
            You scored {correct} / {questions.length} correct answers
          </h3>
        )}
      </div>
    </main>
  );
}

export default Quiz;
