import axios from "axios";

export const serverAxios = axios.create({
  baseURL: "http://backend:4000",
  timeout: 1000,
});
