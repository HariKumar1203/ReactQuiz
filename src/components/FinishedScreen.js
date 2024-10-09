import { useQuiz } from "./QuizProvider";

function FinishedScreen() {
  const { points, maxQuestionPoints, highscore, dispatch } = useQuiz();
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
