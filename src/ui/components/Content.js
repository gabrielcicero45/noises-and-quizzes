import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizCreationStarted } from "../../state/actions/quizActions";
import { getQuizes } from "../../state/thunks/quizThunks";
import { useEffect } from "react";
import QuizesList from "./QuizesList";
import QuizForm from "./QuizForm";
import Button from "../theme/Button";
import Wrapper from "../theme/Wrapper";
import Header from "../theme/Header";
import Banner from "../theme/Banner";
import TextBanner from "../theme/TextBanner";

const Content = () => {
  const creationStarted = useSelector(
    (state) => state.quizReducer.quizCreation
  );
  const quizes = useSelector((state) => state.quizReducer.quizes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizes());
  }, []);
  return (
    <Wrapper>
      <Header>Noises & Quizzes</Header>
      {creationStarted ? (
        <QuizForm />
      ) : (
        <>
        
          <TextBanner>
            <h1>Noises & Quizzes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem ipsum illum voluptas ipsam nisi quaerat, dolorem laboriosam ex dolor modi fuga saepe autem nostrum, totam non, exercitationem laudantium minus.</p>
            <Button onClick={() => dispatch(quizCreationStarted())}>
              Create Quiz !
            </Button>
            <QuizesList quizes={quizes} />
          </TextBanner>
          <Banner></Banner>
        </>
      )}
    </Wrapper>
  );
};

export default Content;
