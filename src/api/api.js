import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const search = (query = "") => {
  return axios.get(`${baseURL}/search?query=${query}`);
};
