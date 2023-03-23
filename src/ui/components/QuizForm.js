import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionAdded } from "../../state/actions/quizActions";
import { postQuiz } from "../../state/thunks/quizThunks";
import Button from "../styles/Button";
import Icon from "../styles/Icon";
import QuizFormWrapper from "../styles/QuizFormWrapper";
import FormInput from "./FormInput";
import QuestionForm from "./QuestionForm";
import plus from '../assets/plus.svg'

const QuizForm = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizReducer);
  const [quizTitle, setQuizTitle] = useState(quizData.data.title || "");
  const [quizDescription, setQuizDescription] = useState(
    quizData.data.description || ""
  );

  return (
    <QuizFormWrapper>
        <FormInput
          labelText={"Quiz Title"}
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />
        <FormInput
          labelText={"Quiz Description"}
          value={quizDescription}
          onChange={(e) => setQuizDescription(e.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(
              questionAdded({
                title: "",
                type: "",
              })
            )
          }
        >
          <Icon src={plus} />
          Add question
        </Button>
        {quizData.data.questions.map(({ title, type }, index) => (
          <QuestionForm key={index} id={index} title={title} type={type} />
        ))}

        <Button
        type="primary"
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
        </Button>

    </QuizFormWrapper>
  );
};

export default QuizForm;
