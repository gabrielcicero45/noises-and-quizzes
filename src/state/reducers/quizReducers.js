export const quizReducer = (
  state = {
    quizCreation: false,
    data: { title: "", description: "", questions: [] },
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
    default:
      return state;
  }
};

export const getQuizCretionStarted = (state) => {
  return state.quizCreation;
};
