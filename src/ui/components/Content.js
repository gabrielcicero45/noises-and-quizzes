import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizCreationEnded } from "../../state/actions/quizActions";
import QuizForm from "./QuizForm";
import Wrapper from "../styles/Wrapper";
import { Header, HeaderText } from "../styles/Header";
import Home from "./Home";
import QuizesList from "./QuizesList";
import Notification from "./Notification";

const Content = () => {
  const viewState = useSelector(
    (state) => state.quizReducer.viewState
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <Notification/>
        <HeaderText onClick={() => dispatch(quizCreationEnded())}>
          Noises & Quizzes
        </HeaderText>
      </Header>
      {viewState === "Home" && <Home/>}
      {viewState === "Quiz Form" && <QuizForm />}
      {viewState === "Quizzes List" && <QuizesList/>}
    </Wrapper>
  );
};

export default Content;
