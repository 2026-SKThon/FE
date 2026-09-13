import axios from "axios";

import { USER_ID } from "../constants/api";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-USER-ID": String(USER_ID),
  },
});

export default api;
