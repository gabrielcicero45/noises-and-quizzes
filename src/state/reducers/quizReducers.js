export const quizReducer = (
  state = {
    viewState: "Home",
    data: { title: "", description: "", questions: [] },
    saveStatus: { message: "" },
    quizes: [],
  },
  action
) => {
  switch (action.type) {
    case "QUIZ_CREATION_STARTED":
      return { ...state, viewState: "Quiz Form" };

    case "QUIZ_CREATION_ENDED":
      return { ...state, viewState: "Home" };
    
    case "GO_TO_QUIZZES_LIST":
      return { ...state, viewState: "Quizzes List" };

    case "QUESTION_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          questions: [...state.data.questions, action.payload],
        },
      };

    case "QUESTION_REMOVED":
      return {
        ...state,
        data: {
          ...state.data,
          questions: [
            ...state.data.questions.filter(
              (question) =>
                state.data.questions.indexOf(question) !== action.payload
            ),
          ],
        },
      };

    case "QUESTION_TITLE_CHANGED":
      return {
        ...state,
        data: {
          ...state.data,
          questions: [
            ...state.data.questions.map((question, index) => ({
              ...question,
              title:
                action.payload.questionId === index
                  ? action.payload.title
                  : question.title,
            })),
          ],
        },
      };

    case "QUESTION_TYPE_CHANGED":
      return {
        ...state,
        data: {
          ...state.data,
          questions: [
            ...state.data.questions.map((question, index) => ({
              ...question,
              type:
                action.payload.questionId === index
                  ? action.payload.type
                  : question.type,
            })),
          ],
        },
      };

    case "QUIZ_SAVE_PENDING":
      return { ...state, saveStatus: {type:"info", message: "Saving ..." } };

    case "QUIZ_SAVE_SUCEED":
      return {
        ...state,
        data: { title: "", description: "", questions: [] },
        saveStatus: {type:"info", message: "Quiz Saved !" },
      };

    case "QUIZ_SAVE_FAILED":
      return {
        ...state,
        saveStatus: {type:"warning", message: action.payload.message },
      };
    case "GET_ALL_QUIZES":
      return { ...state, quizes: action.payload };
    default:
      return state;
  }
};

export const getQuizCretionStarted = (state) => {
  return state.quizCreation;
};
