import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const search = (query = "") => {
  return axios.get(`${baseURL}/search?query=${query}`);
};

export const search_scores = (query = "") => {
  return axios.get(`${baseURL}/search_scores?query=${query}`);
};
