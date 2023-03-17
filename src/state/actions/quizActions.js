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

export const quizSavePending = (data) => {
  return {
    type: "QUIZ_SAVE_PENDING",
    payload: data,
  };
};

export const quizSaveSuceed = (data) => {
  return {
    type: "QUIZ_SAVE_SUCEED",
    payload: data,
  };
};

export const quizSaveFailed = (data) => {
  return {
    type: "QUIZ_SAVE_FAILED",
    payload: data,
  };
};
