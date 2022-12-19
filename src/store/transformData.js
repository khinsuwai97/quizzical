const transformData = (data) => {
  return data.map((result) => {
    const randomAnswers = [...result.incorrect_answers];
    const randomNumber = Math.floor(Math.random() * 4);
    randomAnswers.splice(randomNumber, 0, result.correct_answer);
    return {
      category: result.category,
      correctAnswer: result.correct_answer,
      answers: randomAnswers,
      difficulty: result.difficulty,
      question: result.question,
      id: Math.random() * Date.now(),
      selectedAnswer: '',
    };
  });
};

export default transformData;
