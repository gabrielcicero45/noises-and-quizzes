import { getQuizes } from "../../state/thunks/quizThunks";
import { quizCreationStarted } from "../../state/actions/quizActions";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../theme/Banner";
import Button from "../theme/Button";
import QuizesList from "./QuizesList";
import React, { useEffect } from "react";
import TextBanner from "../theme/TextBanner";

const Home = () => {
  const quizes = useSelector((state) => state.quizReducer.quizes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizes());
  }, []);
  return (
    <>
      <TextBanner>
        <h1>Noises & Quizzes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem
          ipsum illum voluptas ipsam nisi quaerat, dolorem laboriosam ex dolor
          modi fuga saepe autem nostrum, totam non, exercitationem laudantium
          minus.
        </p>
        <Button onClick={() => dispatch(quizCreationStarted())}>
          Create Quiz !
        </Button>
        <QuizesList quizes={quizes} />
      </TextBanner>
      <Banner></Banner>
    </>
  );
};

export default Home;
