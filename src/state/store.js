import { configureStore } from '@reduxjs/toolkit'
import { quizReducer } from './reducers/quizReducers'

export default configureStore({
  reducer: {
    quizReducer: quizReducer
  },
})
