import { configureStore } from '@reduxjs/toolkit'
import quizCreation from './quizCreation'

export default configureStore({
  reducer: {
    quizCreation: quizCreation
  },
})