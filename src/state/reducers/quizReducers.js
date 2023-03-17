export const quizReducer = (
  state = {
    quizCreation: false,
    data: { title: "", description: "", questions: [] },
    savePending: false,
    saveSuceed: false,
    saveFailed: { message: "" },
    quizes: []
  },
  action
) => {
  switch (action.type) {
    case "QUIZ_CREATION_STARTED":
      return { ...state, quizCreation: true };

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
      return { ...state, savePending: true };

    case "QUIZ_SAVE_SUCEED":
      return {
        ...state,
        quizCreation:false,
        data: { title: "", description: "", questions: [] },
        savePending: false,
        saveSuceed: true,
        saveFailed: { message: "" },
      };

    case "QUIZ_SAVE_FAILED":
      return {
        ...state,
        savePending: false,
        saveSuceed: false,
        saveFailed: { message: action.payload.message },
      };
    case "GET_ALL_QUIZES":
      console.log(action.payload)
      return {...state, quizes: [...action.payload]}
    default:
      return state;
  }
};

export const getQuizCretionStarted = (state) => {
  return state.quizCreation;
};
