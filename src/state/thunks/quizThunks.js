import { quizApiGet, quizApiPost } from "../../infrastructure/api/quizApi";
import {
  getAllQuizes,
  quizSaveFailed,
  quizSavePending,
  quizSaveSuceed,
} from "../actions/quizActions";

export const postQuiz =  (quiz) => (dispatch) => {
  dispatch(quizSavePending());
  return quizApiPost(quiz)
    .then(() => dispatch(quizSaveSuceed()))
    .then(() => dispatch(this.getQuizes()))
    .catch((error) => {
      if (error.response) {
        dispatch(quizSaveFailed(error.response.data));
      } else {
        console.error("Error", error.message);
      }
    });
}

export const getQuizes = () => (dispatch) => {
  return quizApiGet()
    .then((res) => dispatch(getAllQuizes(res.data)))
    .catch((error) => console.error("Error", error.message));
}

