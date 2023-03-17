import { quizApiGet, quizApiPost } from "../../infrastructure/api/quizApi";
import {
  getAllQuizes,
  quizSaveFailed,
  quizSavePending,
  quizSaveSuceed,
} from "../actions/quizActions";

export const quizThunk = {
  postQuiz: (quiz) => (dispatch) => {
    dispatch(quizSavePending());
    quizApiPost(quiz)
      .then(() => dispatch(quizSaveSuceed()))
      .catch((error) => {
        if (error.response) {
          dispatch(quizSaveFailed(error.response.data));
        } else {
          console.error("Error", error.message);
        }
      });
  },
  getQuizes: () => (dispatch) => {
    quizApiGet()
      .then((res) => dispatch(getAllQuizes(res.data)))
      .catch(error => console.error("Error", error.message))
  }
};
