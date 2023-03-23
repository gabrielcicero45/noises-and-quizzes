import { getQuizes } from "../../state/thunks/quizThunks";
import { goToQuizzesList, quizCreationStarted } from "../../state/actions/quizActions";
import { useDispatch } from "react-redux";
import Banner from "../styles/Banner";
import Button from "../styles/Button";
import React, { useEffect } from "react";
import TextBanner from "../styles/TextBanner";

const Home = () => {
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
        <Button onClick={() => dispatch(goToQuizzesList())}>
          See Created Quizzes !
        </Button>
      </TextBanner>
      <Banner></Banner>
    </>
  );
};

export default Home;
