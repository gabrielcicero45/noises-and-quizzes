import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionAdded } from "../../state/actions/quizActions";
import { postQuiz} from "../../state/thunks/quizThunks";
import FormInput from "./FormInput";
import Question from "./Question";

const QuizForm = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizReducer);
  const [quizTitle, setQuizTitle] = useState(quizData.data.title || "");
  const [quizDescription, setQuizDescription] = useState(
    quizData.data.description || ""
  );

  return (
    <div>
      <FormInput
        labelText={"Title"}
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <FormInput
        labelText={"Description"}
        value={quizDescription}
        onChange={(e) => setQuizDescription(e.target.value)}
      />

      <button
        className="button"
        onClick={() =>
          dispatch(
            questionAdded({
              title: "",
              type: "",
            })
          )
        }
      >
        Add question
      </button>
      {quizData.data.questions.map(({ title, type }, index) => (
        <Question key={index} id={index} title={title} type={type} />
      ))}
      {quizData.savePending && "Saving ..."}
      {quizData.saveSuceed && "Quiz Saved !"}
      {quizData.saveFailed.message !== "" && quizData.saveFailed.message}
      <button
        className="button"
        onClick={() =>
          dispatch(
            postQuiz({
              title: quizTitle,
              description: quizDescription,
              questions: quizData.data.questions,
            })
          )
        }
      >
        Save quiz
      </button>
    </div>
  );
};

export default QuizForm;
