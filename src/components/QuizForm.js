import React from 'react';
import useQuizContext from '../store/useQuizContext';

const QuizForm = () => {
  const { quiz, handleFormSubmit, handleChange, error } = useQuizContext();
  const { amount, category, difficulty } = quiz;

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleFormSubmit}>
          <h2>
            Have fun with quiz
            <span role="img" aria-label="smile">
              😃
            </span>
            !
          </h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-input"
              value={amount}
              min={1}
              max={50}
              onChange={handleChange}
            />
          </div>

          {amount === '' && (
            <p className="error">Please fill out number of questions</p>
          )}
          {/* category */}

          <div className="form-control">
            <label htmlFor="category">select category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={category}
              onChange={handleChange}
            >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
              <option value="film">Film</option>
              <option value="music">Music</option>
              <option value="celebrities">Celebrities</option>
              <option value="computer">Science:Computer</option>
              <option value="japaneseAnime">Japanese Anime & Manga</option>
              <option value="cartoon">Cartoon & Animations</option>
            </select>
          </div>
          {/* difficulty */}

          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}

          <button type="submit" className="submit-btn" disabled={amount === ''}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default QuizForm;
