export const quizCreationStarted = () => {
  return {
    type: "QUIZ_CREATION_STARTED",
  };
};

export const questionAdded = (data) => {
  return {
    type: "QUESTION_ADDED",
    payload: data,
  };
};

export const questionRemoved = (id) => {
  return {
    type: "QUESTION_REMOVED",
    payload: id,
  };
};

export const questionTitleChanged = (data) => {
  return {
    type: "QUESTION_TITLE_CHANGED",
    payload: data,
  };
};

export const questionTypeChanged = (data) => {
  return {
    type: "QUESTION_TYPE_CHANGED",
    payload: data,
  };
};

export const quizSavePending = () => {
  return {
    type: "QUIZ_SAVE_PENDING",
  };
};

export const quizSaveSuceed = () => {
  return {
    type: "QUIZ_SAVE_SUCEED",
  };
};

export const quizSaveFailed = (data) => {
  return {
    type: "QUIZ_SAVE_FAILED",
    payload: data,
  };
};

export const getAllQuizes = (data) => {
  return {
    type: "GET_ALL_QUIZES",
    payload: data
  }
}
