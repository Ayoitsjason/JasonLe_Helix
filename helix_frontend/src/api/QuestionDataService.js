import axios from "axios";
import { requestError } from "../utils/helper";

const BACKEND_URL = "http://127.0.0.1:8000";

export const createQuestion = async (form) => {
  const body = JSON.stringify(form);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.post(`${BACKEND_URL}/questions/create`, body, config);
    return { success: true };
  } catch (err) {
    return requestError(err);
  }
};

export const deleteQuestion = async (id) => {
  const data = id;
  try {
    await axios.delete(`${BACKEND_URL}/questions/create`, data);
    return { success: true };
  } catch (err) {
    return requestError(err);
  }
};

export const getAllQuestions = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/questions/all`);
    return { success: true, questions: res.data };
  } catch (err) {
    console.log(err);
    return requestError(err);
  }
};
