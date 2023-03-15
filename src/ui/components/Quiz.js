import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionAdded,
  quizTitleAdded,
  quizDescriptionAdded,
  quizSavePending,
} from "../../state/quizCreation";
import FormInput from "./FormInput";
import Question from "./Question";

const Quiz = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizCreation.data);
  const savePending = useSelector((state) => state.quizCreation.savePending);
  const saveSuceed = useSelector((state) => state.quizCreation.saveSuceed);
  const saveErrors = useSelector((state) => state.quizCreation.saveFailed);
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
              title: "",
              type: "",
            })
          )
        }
      >
        Add question
      </button>
      {quizData.questions.map(({ title, type }, index) => (
        <Question key={index} id={index} title={title} type={type} />
      ))}
    {savePending && "Saving ..."}
    {saveSuceed && "Quiz Saved !"}
    {saveErrors.message !== "" && saveErrors.message}
    <button onClick={() => dispatch(quizSavePending(quizData))}>Save quiz</button>
    </div>
  );
};

export default Quiz;
