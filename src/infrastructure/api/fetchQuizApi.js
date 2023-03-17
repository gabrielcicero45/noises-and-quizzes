import axios from "axios";

const baseUrl = "http://localhost:3001";

export const fetchQuizApi = (quiz) => {
  return axios.post(`${baseUrl}/quizzes`, quiz);
};
