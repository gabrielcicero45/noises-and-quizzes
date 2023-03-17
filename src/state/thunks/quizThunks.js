import { fetchQuizApi } from "../../infrastructure/api/fetchQuizApi"
import { quizSaveFailed,quizSavePending,quizSaveSuceed } from "../actions/quizActions"

export const quizThunk = {
    postQuiz: (quiz) => dispatch => { 
      dispatch(quizSavePending())
      fetchQuizApi(quiz)
        .then(res => dispatch(quizSaveSuceed(res)))
        .catch(error => {
          if(error.response){
            dispatch(quizSaveFailed(error.response.data))
          }
          else{
            console.error("Error",error.message)
          }
        })
    }
}
