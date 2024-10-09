import { useQuiz } from "./components/QuizProvider";
import Option from "./Option";

function Question() {
  const { questions, index } = useQuiz();

  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
}

export default Question;
