import { createSlice } from "@reduxjs/toolkit";

export const quizCreationSlice = createSlice({
  name: "quizCreation",
  initialState: {
    value: false,
    data: {title: "" ,description: "", questions: []}
  },
  reducers: {
    quizCreationStarted: (state) => {
      state.value = true;
    },
    quizTitleAdded: (state, action) => {
      console.log(action.payload)
      state.data.title = action.payload;
    },
    quizDescriptionAdded: (state, action) => {
      console.log(action.payload)
      state.data.description = action.payload;
    },
    questionAdded: (state,action) => {
      state.data.questions.push(action.payload)
    },
    questionTitleChanged: (state,action) => {
      console.log(action.payload)
      state.data.questions[action.payload.questionId].title = action.payload.title
    },
    questionTypeChanged: (state,action) => {
      console.log(action.payload)
      state.data.questions[action.payload.questionId].type = action.payload.type
    },
  },
});

export const { quizCreationStarted,quizTitleAdded, quizDescriptionAdded, questionAdded, questionTypeChanged, questionTitleChanged} = quizCreationSlice.actions;

export default quizCreationSlice.reducer;
