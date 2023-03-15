import { configureStore } from "@reduxjs/toolkit";
import quizCreation from "./quizCreation";

const store = configureStore({
  reducer: {
    quizCreation: quizCreation,
  },
});

export default store;
