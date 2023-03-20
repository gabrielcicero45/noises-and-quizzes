import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./reducers/quizReducers";

const reducer = {
  quizReducer: quizReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
