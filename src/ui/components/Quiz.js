import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionAdded, questionTitleChanged, questionTypeChanged
} from "../../state/actions/quizActions";
import FormInput from "./FormInput";
import Question from "./Question";

const Quiz = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizReducer.data);
  const [quizTitle, setQuizTitle] = useState(quizData.title || "");
  const [quizDescription, setQuizDescription] = useState(quizData.description || "");

  const onConfirm = (questionId,question) => {
    if(quizData.questions[questionId].type !== question.type){
      dispatch(questionTypeChanged({questionId:questionId,type:question.type}))
    }
    if(quizData.questions[questionId].title !== question.title){
      dispatch(questionTitleChanged({questionId:questionId,title:question.title}))
    }
  }
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
        <Question key={id} id={id} title={title} type={type} onConfirm={onConfirm} />
      ))}
    </div>
  );
};

export default Quiz;
