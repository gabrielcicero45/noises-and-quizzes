import { useColorMode } from "theme-ui";
import { Header, HeaderText } from "../styles/Header";
import { quizCreationEnded } from "../../state/actions/quizActions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import Notification from "./Notification";
import QuizesList from "./QuizesList";
import QuizForm from "./QuizForm";
import React from "react";
import Wrapper from "../styles/Wrapper";
import Switch from "../styles/Switch";
const Content = () => {
  const viewState = useSelector((state) => state.quizReducer.viewState);
  const dispatch = useDispatch();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Wrapper>
      <Header>
        <Notification />
        <HeaderText onClick={() => dispatch(quizCreationEnded())}>
          Noises & Quizzes
        </HeaderText>
        <HeaderText>
          Switch theme: 
          <Switch>
            <input
              type="checkbox"
              role="switch"
              onClick={(e) => {
                setColorMode(colorMode === "default" ? "dark" : "default");
              }}
            />
            <span></span>
          </Switch>
        </HeaderText>
      </Header>
      {viewState === "Home" && <Home />}
      {viewState === "Quiz Form" && <QuizForm />}
      {viewState === "Quizzes List" && <QuizesList />}
    </Wrapper>
  );
};

export default Content;
