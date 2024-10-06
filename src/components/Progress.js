function Progress({ index, numQuestions, points, maxQuestionPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points}/{maxQuestionPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
