import { Button, useColorMode } from "theme-ui";
import { Header, HeaderText } from "../styles/Header";
import { quizCreationEnded } from "../../state/actions/quizActions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import Notification from "./Notification";
import QuizesList from "./QuizesList";
import QuizForm from "./QuizForm";
import React from "react";
import Wrapper from "../styles/Wrapper";

const Content = () => {
  const viewState = useSelector(
    (state) => state.quizReducer.viewState
  );
  const dispatch = useDispatch();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Wrapper>
      <Header>
        <Notification/>
        <HeaderText onClick={() => dispatch(quizCreationEnded())}>
          Noises & Quizzes
        </HeaderText>
        <Button onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>Change color</Button>
      </Header>
      {viewState === "Home" && <Home/>}
      {viewState === "Quiz Form" && <QuizForm />}
      {viewState === "Quizzes List" && <QuizesList/>}
    </Wrapper>
  );
};

export default Content;
