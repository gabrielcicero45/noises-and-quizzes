import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import store from "./store";

export const quizCreationSlice = createSlice({
  name: "quizCreation",
  initialState: {
    value: false,
    data: { title: "", description: "", questions: [] },
    savePending: false,
    saveSuceed: false,
    saveFailed: {message: ""},
  },
  reducers: {
    quizCreationStarted: (state) => {
      state.value = true;
    },
    quizTitleAdded: (state, action) => {
      state.data.title = action.payload;
    },
    quizDescriptionAdded: (state, action) => {
      state.data.description = action.payload;
    },
    questionAdded: (state, action) => {
      state.data.questions.push(action.payload);
    },
    questionTitleChanged: (state, action) => {
      state.data.questions[action.payload.questionId].title =
        action.payload.title;
    },
    questionTypeChanged: (state, action) => {
      state.data.questions[action.payload.questionId].type =
        action.payload.type;
    },
    questionRemoved: (state, action) => {
      state.data.questions = state.data.questions.filter(
        (question) => state.data.questions.indexOf(question) !== action.payload
      );
    },
    quizSavePending: (state, action) => {
      state.savePending = true;
      axios.post("http://localhost:3001/quizzes", action.payload)
      .then(response => store.dispatch(quizSaveSuceed(response.data)))
      .catch(error => {
        if(error.response){
          store.dispatch(quizSaveFailed(error.response.data))
        }
        else{
          console.error("Error",error.message)
        }
      })
    },
    quizSaveSuceed: (state, action) => {
      store.dispatch(quizSaveFailed(""))
      state.savePending = false;
      state.saveSuceed = true;
      state.data = { title: "", description: "", questions: [] };
    },
    quizSaveFailed: (state, action) => {
      state.savePending = false;
      state.saveSuceed = false;
      state.saveFailed = action.payload;
    },
  },
});

export const {
  quizCreationStarted,
  quizTitleAdded,
  quizDescriptionAdded,
  questionAdded,
  questionTypeChanged,
  questionTitleChanged,
  questionRemoved,
  quizSavePending,
  quizSaveSuceed,
  quizSaveFailed,
} = quizCreationSlice.actions;

export default quizCreationSlice.reducer;
