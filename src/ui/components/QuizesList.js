import React from "react";
import Question from "./Question";

const QuizesList = ({ quizes }) => {
  return (
    <div>
      {quizes.map((quiz) => (
        <div key={quiz.id}>
          <ul>
            <li>{quiz.title}</li>
            <li>{quiz.description}</li>
            <li>Questões {quiz.questions.map(({id, title, type}) => <Question key={id} id={id} title={title} type={type} action={false}/>)}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizesList;
