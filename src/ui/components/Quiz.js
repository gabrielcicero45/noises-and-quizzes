import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionAdded,
  quizTitleAdded,
  quizDescriptionAdded,
} from "../../state/quizCreation";
import FormInput from "./FormInput";
import Question from "./Question";

const Quiz = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizCreation.data);
  return (
    <div>
      <FormInput
        labelText={"Title"}
        value={quizData.title}
        onChange={(e) => dispatch(quizTitleAdded(e.target.value || ""))}
      />
      <FormInput
        labelText={"Description"}
        value={quizData.description}
        onChange={(e) => dispatch(quizDescriptionAdded(e.target.value || ""))}
      />

      <button
        onClick={() =>
          dispatch(
            questionAdded({
              id: quizData.questions.length,
              title: "",
              type: "",
            })
          )
        }
      >
        Add question
      </button>
      {quizData.questions.map(({ id, title, type }) => (
        <Question key={id} id={id} title={title} type={type} />
      ))}
    </div>
  );
};

export default Quiz;
