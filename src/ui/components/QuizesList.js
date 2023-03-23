import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../styles/Card";
import Question from "./Question";

const QuizesList = () => {
  const quizes = useSelector((state) => state.quizReducer.quizes)
  return (
    <div>
      {quizes.map((quiz) => (
        <div key={quiz.id}>
          <Card>
            <span>Title:</span>
            <span>Description:</span>
            <span>{quiz.title}</span>
            <span>{quiz.description}</span>

          </Card>
        </div>
      ))}
    </div>
  );
};

export default QuizesList;
