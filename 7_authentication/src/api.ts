import axios from "axios";

export const api = axios.create({
  baseURL: "https://nest-demo.nis.noinputsignal.com/",
  timeout: 1000,
  withCredentials: true,
});
