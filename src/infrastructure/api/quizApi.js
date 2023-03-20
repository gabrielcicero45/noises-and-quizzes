import axios from "axios";

const baseUrl = "http://localhost:3001";

export const quizApiPost = (quiz) => {
  return axios.post(`${baseUrl}/quizzes`, quiz);
};

export const quizApiGet = (quiz) => {
  return axios.get(`${baseUrl}/quizzes`);
};
