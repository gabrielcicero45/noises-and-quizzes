import React from "react";
import { useSelector } from "react-redux";
import Quiz from "./Quiz";

const QuizesList = () => {
  const quizes = useSelector((state) => state.quizReducer.quizes)
  return (
    <>
      {quizes.map(({id,title,description,questions}) => (
        <Quiz key={id} id={id} title={title} description={description} questions={questions}/>
      ))}
    </>
  );
};

export default QuizesList;
