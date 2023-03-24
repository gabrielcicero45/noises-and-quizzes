import React, { useState } from "react";
import Button from "../styles/Button";
import { Card } from "../styles/Card";
import QuizWrapper from "../styles/QuizWrapper";
import Question from "./Question";

const Quiz = ({ id, title, description, questions }) => {
  const [showQuestions, setShowQuestions] = useState(false);
  return (
    <div key={id}>
      <Card>
        <QuizWrapper>
        <span>
          <strong>Title: </strong>
          {title}
        </span>
        <span>
          <strong>Description:</strong> {description}
        </span>
        {showQuestions && (
          <>
            {questions.map(({id, title, type}) =>
            <Question
              key={id}
              id={id}
              title={title}
              type={type}
              actions={false}
            />
            )}
            <Button
              onClick={() => {
                setShowQuestions(false);
              }}
            >
              Hide Questions
            </Button>
          </>
        )}
        {!showQuestions && (
          <Button
            onClick={() => {
              setShowQuestions(true);
            }}
          >
            See Questions
          </Button>
        )}
        </QuizWrapper>
 
      </Card>
    </div>
  );
};

export default Quiz;
