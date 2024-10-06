function FinishedScreen({ points, maxQuestionPoints, highscore, dispatch }) {
  const percentage = (points / maxQuestionPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxQuestionPoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} Points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Start Again
      </button>
    </>
  );
}

export default FinishedScreen;
