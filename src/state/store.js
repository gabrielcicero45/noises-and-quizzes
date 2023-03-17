import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./reducers/quizReducers";
import { quizThunk } from "./thunks/quizThunks";

const reducer = {
  quizReducer: quizReducer,
};

const store = configureStore({
  reducer: reducer,
});

store.dispatch(quizThunk.postQuiz);
store.dispatch(quizThunk.getQuizes());
export default store;
