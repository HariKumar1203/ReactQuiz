function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <p>{numQuestions} questions to test your React mastery</p>
      <button>Let's Start</button>
    </div>
  );
}

export default StartScreen;
