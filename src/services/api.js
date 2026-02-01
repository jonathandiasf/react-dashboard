import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // backend futuramente
  timeout: 5000,
});
