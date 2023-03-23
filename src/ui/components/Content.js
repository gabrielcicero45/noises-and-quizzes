import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizCreationEnded } from "../../state/actions/quizActions";
import QuizForm from "./QuizForm";
import Wrapper from "../theme/Wrapper";
import { Header, HeaderText } from "../theme/Header";
import Home from "./Home";

const Content = () => {
  const creationStarted = useSelector(
    (state) => state.quizReducer.quizCreation
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <HeaderText onClick={() => dispatch(quizCreationEnded())}>
          Noises & Quizzes
        </HeaderText>
      </Header>
      {creationStarted ? <QuizForm /> : <Home />}
    </Wrapper>
  );
};

export default Content;
