
export const quizCreationStarted = () => (dispatch) => {
  dispatch({
      type: "QUIZ_CREATION_STARTED",
  })
}

export const questionAdded = (data) => (dispatch) => {
  dispatch({
      type: "QUESTION_ADDED",
      payload: data
  })
}

export const questionTitleChanged = (data) => (dispatch) => {
  dispatch({
      type: "QUESTION_TITLE_CHANGED",
      payload: data
  })
}

export const questionTypeChanged = (data) => (dispatch) => {
  dispatch({
      type: "QUESTION_TYPE_CHANGED",
      payload: data
  })
}
